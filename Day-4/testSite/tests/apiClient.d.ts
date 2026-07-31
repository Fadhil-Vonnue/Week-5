export declare class ApiClient {
    baseUrl: string;
    constructor(baseUrl: string);
    responseInterceptor<T>(response: T): Promise<T>;
    requestInterceptor<T>(path: string, option: object): Promise<T>;
    get<T>(path: string): Promise<T>;
    post<T, B>(path: string, body: B): Promise<T>;
    put<T, B>(path: string, body: B): Promise<T>;
    delete<T>(path: string): Promise<T>;
}
