import { store } from "../main.js";
import { Action, obj1, State } from "../types.js";
export function registerPath(
    routes: Record<string, Function>,
    path: string,
    component: Function
) {
    routes[path] = component;
}

export async function navigate(
    routes: Record<string, Function>,
    path: string,
    params: obj1
) {
    let fn = routes[path];
    if (fn) {
        if (params !== undefined && Object.keys(params).length !== 0) {
            await fn(params.imdbID);
            return true;
        } else {
            await fn();

            return true;
        }
    } else {
        return false;
    }
}
export async function onRouteChange(path: string, params: obj1) {
    await store.dispatch({
        type: "ROUTE_CHANGED",
        payload: {
            path,
            params,
        },
    });
}

export async function fetchJSON1(url: string) {
    try {
        const response = await fetch(url);
        const data = response.json();
        return data;
    } catch (err) {
        console.error(err);
    }
}
export function reducer(state: State, action: Action) {
    switch (action.type) {
        case "ROUTE_CHANGED":
            return { ...state, route: action.payload };
        case "MOVIE_ADDED":
            const list = state.watchList.list;
            if (action.payload.type === "Add") {
                showToast(
                    { message: "Added movie to WatchList" },
                    4,
                    "success"
                );
                list.add(action.payload.id);
            } else {
                showToast(
                    { message: "Removed movie from WatchList" },
                    4,
                    "warning"
                );
                list.delete(action.payload.id);
            }
            const obj = {
                list,
                id: action.payload.id,
                type: action.payload.type,
            };
            return { ...state, watchList: obj };
        default:
            return state;
    }
}
export function createStore(initialState: State, reducer: Function) {
    let state = initialState;
    let listeners: Record<string, Array<Function>> = {};
    return {
        getState() {
            return state;
        },
        async dispatch(action: Action) {
            if (
                state.watchList.list.has(action.payload.id) &&
                action.payload.type == "Add"
            ) {
                showToast({ message: "Already in WatchList" }, 3, "info");
                return;
            }
            state = reducer(state, action);
            let allListeners = listeners[action.type];

            for (let listener of allListeners) {
                await listener(state);
            }
        },
        subscribe(key: string, listener: Function) {
            if (!listeners[key]) listeners[key] = [];
            listeners[key].push(listener);
            return () => delete listeners[key];
        },
    };
}

export async function parseCSV(filePath: string) {
    try {
        const response = await fetch(filePath);
        const data = await response.text();
        const lines = data.trim().split(/\r?\n/);

        const headers = parseLine(lines[0]);
        const result = [];

        for (let i = 1; i < lines.length; i++) {
            if (!lines[i].trim()) continue;

            const values = parseLine(lines[i]);
            const obj: Record<string, string> = {};

            headers.forEach((header, index) => {
                obj[header] = values[index] ?? "";
            });

            result.push(obj);
        }

        return result;
    } catch (err) {
        showToast(err as Error);
    }
}

function parseLine(line: string) {
    const values = [];
    let current = "";
    let inQuotes = false;

    for (let i = 0; i < line.length; i++) {
        const char = line[i];

        if (char === '"') {
            if (inQuotes && line[i + 1] === '"') {
                current += '"';
                i++;
            } else {
                inQuotes = !inQuotes;
            }
        } else if (char === "," && !inQuotes) {
            values.push(current);
            current = "";
        } else {
            current += char;
        }
    }

    values.push(current);

    return values;
}

export function showToast(
    err: Error | { message: string },
    duration: number = 4,
    type = "error"
) {
    const check = document.querySelector(".toaster");
    if (check) {
        check.remove();
    }
    const toaster = document.createElement("div");
    toaster.classList.add("toaster");
    const toasterWarning = document.createElement("div");
    toasterWarning.classList.add("toastWarning");
    const toasterErrorMessage = document.createElement("div");
    toasterErrorMessage.classList.add("toastErrormessage");
    const toastProgress = document.createElement("div");
    toastProgress.classList.add("toastProgress");
    const CSSstyle = document.createElement("style");
    let toastColor = "#ffd7d3";
    let toastProgressBar = "red";
    if (type.toLowerCase() == "error") {
        toasterWarning.innerHTML = `<img width="20" height="20" src="https://img.icons8.com/?size=100&id=8122&format=png&color=FF0000"/>`;
    }
    if (type.toLowerCase() === "success") {
        toasterWarning.innerHTML = `<img width="20" height="20" src="https://img.icons8.com/?size=100&id=63312&format=png&color=000000"/>`;
        toastColor = "#8dddae;";
        toastProgressBar = "green";
    }
    if (type.toLowerCase() === "info") {
        toasterWarning.innerHTML = `<img width="20" height="20" src="https://img.icons8.com/?size=100&id=63308&format=png&color=000000"/>`;
        toastColor = "#7db5f5;";
        toastProgressBar = "blue";
    }
    if (type.toLowerCase() === "warning") {
        toasterWarning.innerHTML = `<img width="20" height="20" src="https://img.icons8.com/?size=100&id=EggHJUeUuU6C&format=png&color=000000"/>`;
        toastColor = "#f5d97d;";
        toastProgressBar = "#ffc400;";
    }
    toasterErrorMessage.textContent = err.message;
    CSSstyle.textContent += `*{
      box-sizing: border-box;
     }
  .animateToaster{
        animation:
          slideInRight 0.3s ease-in-out forwards,
          fadeOut 0.5s ease-in-out forwards ${duration}s;
      }
      .animateProgressBar{
        animation: toastProgress ${duration}s ease-in-out forwards;
      }
        
    .toaster {
      max-width: 300px;
      border-radius: 4px;
      border: 1px solid ${toastProgressBar};
      position: fixed;
      top: 25px;
      right: 25px;
      display: flex;
      background-color: ${toastColor};
      box-shadow: -1px 1px 10px rgba(0, 0, 0, 0.3);
      z-index: 1023;
      animation:
        slideInRight 0.3s ease-in-out forwards,
        fadeOut 0.5s ease-in-out forwards ${duration}s;
      transform: translateX(120%);
    }
    .toastErrormessage {
      padding: 0.5rem 0.5rem calc(0.5rem + 4px) 0;
    }
    .toastWarning {
      width: 30px;
      display:flex;
      justify-content:center;
      padding-bottom:12px;
      padding-top:8px;
    }
    .toastProgress {
      position: absolute;
      width: 100%;
      background-color: ${toastProgressBar};
      height: 4px;
      bottom: 0;
      left: 0;
      animation: toastProgress ${duration}s ease-in-out forwards;
    }
    @keyframes slideInRight {
      0% {
        transform: translateX(110%);
      }

      75% {
        transform: translateX(-10%);
      }

      100% {
        transform: translateX(0%);
      }
    }

    @keyframes slideOutRight {
      0% {
        transform: translateX(0%);
      }

      25% {
        transform: translateX(-10%);
      }

      100% {
        transform: translateX(110%);
      }
    }

    @keyframes fadeOut {
      0% {
        opacity: 1;
      }

      100% {
        opacity: 0;
      }
    }

    @keyframes toastProgress {
      0% {
        width: 100%;
      }

      100% {
        width: 0%;
      }
    }`;
    document.head.appendChild(CSSstyle);
    toaster.appendChild(toasterWarning);
    toaster.appendChild(toasterErrorMessage);
    toaster.appendChild(toastProgress);
    document.body.prepend(toaster);
}
