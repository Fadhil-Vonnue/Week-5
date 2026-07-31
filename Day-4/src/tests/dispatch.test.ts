import { renderHomePage } from "@pages/home";
import { createStore, navigate } from "@utils";
import { registerPath } from "@utils";
import { renderDetailPage } from "@pages/detail";
import { onRouteChange } from "@utils";

import { renderListPage } from "@pages/list";
import { renderSettingsPage } from "@pages/settings";
import { renderWatchListPage } from "@pages/watchlist";
import { parseCSV } from "@utils";
import { reducer } from "@utils";
import { store } from "../main";
import { onMovieAdded } from "../main";
import { updateWatchList } from "@components/updateWatchList";
import * as utilModule from "@utils";

const fetch = require("cross-fetch");
global.fetch = fetch;
describe("Test state manager", () => {
    document.body.innerHTML = `        <header>
            <div class="navLeft">
                <a id="home" href="">Home</a>
                <a id="list" href="">List</a>
                <a id="watchlist" href="">Watchlist</a>
            </div>
            <div class="navRight">
                <a id="settings" href="">
                    <img src="/assets/settings.svg" alt="" />
                </a>
            </div>
        </header>
        <main>
      
        </main>
        <div id="hidden">
            <div class="detailed-card">
                <div class="detailed-card-img">
                    <img
                        src="https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_QL75_UX380_CR0,0,380,562_.jpg"
                        alt=""
                    />
                </div>
                <div class="detailed-card-desc">
                    <h1 class="detail-title">Star Wars: Return of the Jedi</h1>
                    <hr />
                    <div class="card-rating">
                        9.3 &starf; 󠁯
                        <span>•󠁏󠁏 2,811,614 votes</span>
                    </div>
                    <div class="detail-span">Action, Adventure, Sci-Fi</div>
                    <div class="detail-span">English, Japanese, French</div>
                    <div class="detail-plot">
                        A thief who steals corporate secrets through the use of
                        dream-sharing technology is given the inverse task of
                        planting an idea into the mind of a CEO, but his tragic
                        past may doom the project and his team to disaster.
                    </div>
                    <div class="fields">
                        <span>Director</span><span>Christopher Nolan</span>
                    </div>
                    <div class="fields">
                        <span>Actors </span
                        ><span
                            >Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot
                            Page</span
                        >
                    </div>
                    <div class="fields">
                        <span>Release</span><span>16 Jul 2010</span>
                    </div>
                    <div class="fields">
                        <span>Runtime</span><span>148 min</span>
                    </div>
                    <div class="detailed-buttons">
                        <button>Watch Now</button><button>Favourite</button>
                    </div>
                </div>
            </div>
        </div>`;
    let routes: Record<string, Function> = {};
    // let routes = {};
    const initialState = {
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
    let a = 20;

    // document.querySelectorAll(".addToFav-button").forEach((el) => {
    //     el.addEventListener("click", (e) => {
    //         console.log("INSIDE LISTERNER");
    //         if (e.currentTarget instanceof HTMLImageElement) {
    //             const imbdbID = e.currentTarget!.parentElement!.dataset.id;
    //             console.log(imbdbID);
    //             if (typeof imbdbID === "string") onMovieAdded(imbdbID);
    //             e.currentTarget.src = "assets/close.svg";
    //         }
    //     });
    // });
    test("test list register", () => {
        let path = "/list";
        registerPath(routes, path, renderListPage);
        expect(routes[path]).toBe(renderListPage);
    });
    test("navigate to List without params", async () => {
        const res = await navigate(routes, "/list", {});
        console.log(document.location.pathname);
        expect(res).toBe(true);
    });
    test("test movie dispatch", async () => {
        console.log(
            "DATA ID",
            document.querySelector(".addToFav-button")!.parentElement!.dataset
                .id
        );
        const faveBut = document.querySelector(".addToFav-button");
        if (faveBut instanceof HTMLElement) faveBut.click();
        let state = store.getState();
        const list1 = [...state.watchList.list];
        console.log(state.watchList);
        expect(list1[0]).toBe("tt0111161");
    });
    test("test movie already in watchlist", async () => {
        const faveBut = document.querySelector(".addToFav-button");
        if (faveBut instanceof HTMLElement) faveBut.click();
        let state = store.getState();
        const list1 = [...state.watchList.list];
        expect(list1.length).toBe(1);
    });
});
