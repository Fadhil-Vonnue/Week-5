"use strict";
async function fetchJSON(url, options) {
    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error("Error while fetching");
        }
        const data = await response.json();
        return data;
    }
    catch (err) {
        return Promise.reject(err);
    }
}
