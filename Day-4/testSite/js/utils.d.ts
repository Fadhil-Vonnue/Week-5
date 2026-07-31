import { Action, obj1, State } from "../types.js";
export declare function registerPath(routes: Record<string, Function>, path: string, component: Function): void;
export declare function navigate(routes: Record<string, Function>, path: string, params: obj1): Promise<boolean>;
export declare function onRouteChange(path: string, params: obj1): Promise<void>;
export declare function fetchJSON1(url: string): Promise<any>;
export declare function reducer(state: State, action: Action): {
    route: Record<string, unknown>;
    watchList: {
        list: Set<unknown>;
        id: string;
        type: string;
    };
} | {
    watchList: {
        list: Set<unknown>;
        id: unknown;
        type: unknown;
    };
    route: {
        path: string;
        params: obj1;
    };
};
export declare function createStore(initialState: State, reducer: Function): {
    getState(): State;
    dispatch(action: Action): Promise<void>;
    subscribe(key: string, listener: Function): () => boolean;
};
export declare function parseCSV(filePath: string): Promise<Record<string, string>[] | undefined>;
export declare function showToast(err: Error | {
    message: string;
}, duration?: number, type?: string): void;
