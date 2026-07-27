"use strict";
function register(routes, route) {
    routes.push(route);
}
function navigate(routes, path, params) {
    let route = routes.filter((el) => el.path === path);
    if (route.length === 0) return;
    let element;
    if (params) element = route[0].component(params);
    else element = route[0].component();
    document.body.appendChild(element);
}
let routes = [];
let obj = { id: "101" };
function func(obj) {
    const divElement = document.createElement("div");
    divElement.textContent = ` ${obj?.id}`;
    return divElement;
}
register(routes, { path: "/", component: func });
navigate(routes, "/", obj);
