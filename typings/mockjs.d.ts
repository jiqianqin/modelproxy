// Generated by typings
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/c17b1b78b886e84afe27e1b65fe5bf901da5bbe7/tv4/index.d.ts
declare module 'mockjs' {
    // Type definitions for Tiny Validator tv4 1.2.5
    // Project: https://github.com/geraintluff/tv4
    // Definitions by: Bart van der Schoor <https://github.com/Bartvds>, Peter Snider <https://github.com/psnider>
    // Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

    namespace mockjs {
        export interface Mock {
            mock(config: any): any;
        }
    }

    var mockjs: mockjs.Mock;
    export = mockjs;
}