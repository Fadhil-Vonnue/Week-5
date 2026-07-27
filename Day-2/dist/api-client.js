"use strict";
class ApiClient {
    baseUrl;
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }
    async responseInterceptor(response) {
        console.log("INTERCEPTING RESPONSE");
        return response;
    }
    async requestInterceptor(path, option) {
        let url = this.baseUrl + path;
        let result = await fetchJSON(url, option);
        return this.responseInterceptor(result);
    }
    async get(path) {
        return this.requestInterceptor(path, {});
    }
    async post(path, body) {
        return this.requestInterceptor(path, {
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
            body: body,
        });
    }
    async put(path, body) {
        return this.requestInterceptor(path, {
            method: "PUT",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
            body: body,
        });
    }
    async delete(path) {
        return this.requestInterceptor(path, {
            method: "DELETE",
        });
    }
}
async function fetchJSON(url, options) {
    let data;
    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error("Error while fetching");
        }
        data = response.json();
    }
    catch (error) {
        if (error instanceof Error)
            throw new Error(error.message);
    }
    return data;
}
const MockApiClient = new ApiClient("https://jsonplaceholder.typicode.com");
let body = JSON.stringify({
    title: "title1",
    body: "TEXT",
    userId: 101,
    id: 104,
});
let body2 = JSON.stringify({
    id: 1,
    name: "TEST",
    userId: 102,
});
MockApiClient.get("/posts/1").then((response) => {
    console.log(response);
});
MockApiClient.post("/posts", body).then((response) => {
    console.log("POST");
    console.log(response);
});
MockApiClient.put("/posts/1", body2).then((response) => {
    console.log("PUT");
    console.log(response);
});
MockApiClient.delete("/posts/1").then((response) => {
    console.log("DELETE");
    console.log(response);
});
