import { State } from "./types.js";
export declare const store: {
    getState(): State;
    dispatch(action: import("./types.js").Action): Promise<void>;
    subscribe(key: string, listener: Function): () => boolean;
};
export declare function anchorRouteListener(): void;
export declare function init(): Promise<void>;
export declare function onMovieAdded(movieId: string): Promise<void>;
export declare function onMovieDelete(movieId: string): void;
