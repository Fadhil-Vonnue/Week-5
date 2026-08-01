import { navigate } from "@utils";
import { registerPath } from "@utils";
import { renderHomePage } from "@pages/home.js";
import { renderDetailPage } from "@pages/detail.js";
import { renderListPage } from "@pages/list.js";
import { renderSettingsPage } from "@pages/settings.js";
import { createStore, reducer } from "@utils";
import { renderWatchListPage } from "@pages/watchlist.js";
import { updateWatchList } from "@components/updateWatchList.js";
import { isWatchList } from "@components/isWatchList.js";
import { onRouteChange } from "@utils";
import { obj1, State } from "./types.js";
const initialState: State = {
    route: {
        path: "/home",
        params: {},
    },
    watchList: {
        list: new Set(),
        id: "",
        type: "Add",
    },
};

const localData = localStorage.getItem("watchList");
let datas;

if (localData) datas = JSON.parse(localData);

if (datas) {
    initialState.watchList.list = new Set(datas);
}

export const store = createStore(initialState, reducer);
const allRoutes = ["/home", "/list", "/detail", "/settings", "/watchlist"];
const routes = {};

registerPath(routes, "/home", renderHomePage);

registerPath(routes, "/list", renderListPage);

registerPath(routes, "/detail", renderDetailPage);

registerPath(routes, "/settings", renderSettingsPage);

registerPath(routes, "/watchlist", renderWatchListPage);

export function anchorRouteListener() {
    document.querySelectorAll("a").forEach((el) => {
        el.addEventListener("click", async (e) => {
            const target = e.currentTarget as HTMLElement;

            e.preventDefault();
            const url = `/${target.id}`;
            if (url !== document.location.pathname) {
                history.pushState({}, "", url);
                await onRouteChange(document.location.pathname, {});
            }
        });
    });
}
anchorRouteListener();

window.onload = async (e) => {
    await init();
};

export async function init() {
    let pathname = document.location.pathname;
    let obj: obj1 = {};
    if (pathname.includes(":")) {
        const pathnames = pathname.split("/");
        pathname = pathnames.slice(0, -1).join("/");
        const imdbId = pathnames[pathnames.length - 1].slice(1);
        obj = { imdbID: imdbId };
    }
    if (allRoutes.includes(pathname)) {
        await onRouteChange(pathname, obj);
    } else {
        try {
            const url = `/home`;
            await onRouteChange(`/home`, obj);
            history.replaceState({}, "", url);
        } catch (err) {
            alert(err);
        }
    }
}

export async function onMovieAdded(movieId: string) {
    await store.dispatch({
        type: "MOVIE_ADDED",
        payload: {
            id: movieId,
            type: "Add",
        },
    });
}

export function onMovieDelete(movieId: string) {
    store.dispatch({
        type: "MOVIE_ADDED",
        payload: {
            id: movieId,
            type: "Delete",
        },
    });
}

store.subscribe("ROUTE_CHANGED", async (state: State) => {
    await navigate(routes, state.route.path, state.route.params);
    await isWatchList();
});

store.subscribe("MOVIE_ADDED", async (state: State) => {
    await updateWatchList(state.watchList);
});

window.onpopstate = (event) => {
    onRouteChange(document.location.pathname, {});
};

window.addEventListener("keydown", (e) => {
    if (document.location.pathname.includes("watchlist")) {
        const overlay = document.querySelector(".modalOverlay") as HTMLElement;

        if (overlay.style.display === "flex")
            if (e.key === "Escape") {
                overlay.style.display = "none";
            }
        if (e.key === "Enter") {
            const searchBut = overlay.querySelector(
                ".searchbutton"
            ) as HTMLElement;
            searchBut.click();
        }
    }
});
