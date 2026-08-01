export class ApiClient {
    baseUrl: string;
    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }
    async responseInterceptor<T>(response: T) {
        console.log("INTERCEPTING RESPONSE");
        return response;
    }

    async requestInterceptor<T>(path: string, option: object): Promise<T> {
        const url = this.baseUrl + path;
        const result = await fetchJSON<T>(url, option);
        return this.responseInterceptor(result);
    }
    async get<T>(path: string): Promise<T> {
        return this.requestInterceptor(path, {});
    }
    async post<T, B>(path: string, body: B): Promise<T> {
        return this.requestInterceptor(path, {
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
            body: body,
        });
    }
    async put<T, B>(path: string, body: B): Promise<T> {
        return this.requestInterceptor(path, {
            method: "PUT",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
            body: body,
        });
    }
    async delete<T>(path: string): Promise<T> {
        return this.requestInterceptor(path, {
            method: "DELETE",
        });
    }
}
async function fetchJSON<T>(url: string, options?: object): Promise<T> {
    let data;
    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error("Error while fetching");
        }
        data = response.json();
    } catch (error) {
        if (error instanceof Error) throw new Error(error.message);
    }
    return data;
}
const MockApiClient = new ApiClient("https://jsonplaceholder.typicode.com");

const body = JSON.stringify({
    title: "title1",
    body: "TEXT",
    userId: 101,
    id: 104,
});
const body1 = JSON.stringify({
    id: 1,
    name: "TEST",
    userId: 102,
});

MockApiClient.get("/posts/1").then((response) => {
    console.log("GET");
    console.log(response);
});
MockApiClient.post("/posts", body).then((response) => {
    console.log("POST");
    console.log(response);
});
MockApiClient.put("/posts/1", body1).then((response) => {
    console.log("PUT");
    console.log(response);
});
MockApiClient.delete("/posts/1").then((response) => {
    console.log("DELETE");
    console.log(response);
});
