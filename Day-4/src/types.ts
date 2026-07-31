export type obj1 = {
    imdbID?: string;
};
export interface State {
    route: {
        path: string;
        params: obj1;
    };
    watchList: {
        list: Set<unknown>;
        id: string;
        type: string;
    };
}
export interface Action {
    type: string;
    payload: Record<string, unknown>;
}
