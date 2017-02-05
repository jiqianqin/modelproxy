import * as _ from "lodash";
import * as Bluebird from "bluebird";

/**
 * koa中间件方法
 */
export class Compose {
    private middlewares: Array<Function>;

    constructor() {
        this.middlewares = [];
    }

    /**
     * 添加中间件函数
     * @param func    {Function} 中间件方法
     * @return        {void}
     */
    use(func: Function): void {
        if (!_.isFunction(func)) {
            throw new TypeError("middleware must be a function！");
        }

        this.middlewares.push(func);
    }

    /**
     * 生成中间件执行函数
     * @return {Function}
     */
    compose(): Function {
        if (!Array.isArray(this.middlewares)) throw new TypeError("Middleware stack must be an array!");
        for (const fn of this.middlewares) {
            if (typeof fn !== "function") throw new TypeError("Middleware must be composed of functions!");
        }

        return (context, next): Bluebird.Thenable<any> => {
            return new Bluebird((resolve, reject) => {
                let index = -1;

                const dispatch = (i) => {
                    return new Bluebird((resolve1) => {
                        let fn = this.middlewares[i];

                        if (i <= index) {
                            return reject(new Error("next() called multiple times" + i + "-" + index));
                        }
                        index = i;
                        if (i === this.middlewares.length) fn = next;
                        if (!fn) {
                            return resolve1(context);
                        }
                        try {
                            fn(context, async () => {
                                await dispatch(i + 1);
                                // console.log("resolve", i, context.isError);
                                resolve1();
                            }).catch(reject);
                        } catch (err) {
                            console.log("compose error" + err);
                            reject(err);
                        }
                    });
                };

                return dispatch(0).then(resolve);
            });
        };
    }

    /**
     * 错误的判断
     * @param ctx   {Object} 执行上下文
     * @param err   {Object} 错误数据
     */
    errorHandle(ctx, err) {
        ctx.isError = true;
        ctx.err = err;
        console.error("compose--", err);
    }

    /**
     * 包装compose函数
     * @param complete {Function} 执行完毕后回调函数
     * @return  {Function}
     */
    callback(complete: Function): Function {
        const fn = this.compose();

        return (options: Object): Bluebird.Thenable<any> => {
            let ctx = _.extend({}, options || {}, {
                app: this
            });

            return fn(ctx, async (ctx, next) => {
                await next();
            }).catch((err) => {
                this.errorHandle(ctx, err);
            }).finally(() => {
                complete(ctx);
            });
        };
    }
}