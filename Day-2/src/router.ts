type Route = {
    path: string;
    component: (params?: Record<string, string>) => HTMLElement;
};

function register(routes: Route[], route: Route) {
    routes.push(route);
}

function navigate(
    routes: Route[],
    path: string,
    params?: Record<string, string>
): void {
    let route = routes.filter((el) => el.path === path);
    if (route.length === 0) return;
    let element: HTMLElement;
    if (params) element = route[0].component(params);
    else element = route[0].component();
}

let routes: Route[] = [];
let obj = { id: "101" };
function func(obj?: Record<string, string>): HTMLElement {
    const divElement = document.createElement("div");
    divElement.textContent = ` ${obj?.id}`;
    return divElement;
}
register(routes, { path: "/", component: func });
navigate(routes, "/", obj);
