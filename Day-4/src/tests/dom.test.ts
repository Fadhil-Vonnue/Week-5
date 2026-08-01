import { renderHomePage } from "@pages/home";
import { navigate } from "@utils";
import { registerPath } from "@utils";
import { renderDetailPage } from "@pages/detail";
import { renderListPage } from "@pages/list";
import { renderSettingsPage } from "@pages/settings";
import { renderWatchListPage } from "@pages/watchlist";
import { searchMovies } from "@components/searchMovies";
import "../main";
jest.mock("@components/searchMovies");
const fetch = require("cross-fetch");
global.fetch = fetch;
describe("Test Routing", () => {
    beforeEach(() => {
        window.onload = null;
    });
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
    const routes: Record<string, Function> = {};
    // let routes = {};
    const a = 20;

    test("test home register", () => {
        const path = "/home";
        registerPath(routes, path, renderHomePage);
        expect(routes[path]).toBe(renderHomePage);
    });
    test("test list register", () => {
        const path = "/list";
        registerPath(routes, path, renderListPage);
        expect(routes[path]).toBe(renderListPage);
    });
    test("test list register", () => {
        const path = "/settings";
        registerPath(routes, path, renderSettingsPage);
        expect(routes[path]).toBe(renderSettingsPage);
    });
    test("test list register", () => {
        const path = "/watchlist";
        registerPath(routes, path, renderWatchListPage);
        expect(routes[path]).toBe(renderWatchListPage);
    });
    test("test detail register", () => {
        const path = "/detail";
        registerPath(routes, path, renderDetailPage);
        expect(routes[path]).toBe(renderDetailPage);
    });
    test("navigate to Home without params", async () => {
        const res = await navigate(routes, "/home", {});
        expect(res).toBe(true);
    });
    test("navigate to List without params", async () => {
        const res = await navigate(routes, "/list", {});
        expect(res).toBe(true);
    });
    test("navigate to Settings without params", async () => {
        const res = await navigate(routes, "/settings", {});
        expect(res).toBe(true);
    });
    test("navigate to Detail with params", async () => {
        const res = await navigate(routes, "/detail", {
            imdbID: "tt0111161",
        });
        expect(res).toBe(true);
    });
    test("navigate to WatchList without params", async () => {
        const res = await navigate(routes, "/watchlist", {});
        expect(res).toBe(true);
        // const modal = document.querySelector(".openModal");
        // if (modal instanceof HTMLElement) modal.click();
    });
    test("search movies", async () => {
        const form = document.querySelector("#movie-input")!;
        // const form = document.querySelector("#movie-input");

        if (form instanceof HTMLFormElement) form.value = "Inception";
        const but = document.querySelector(".searchbutton");
        if (but instanceof HTMLElement) but.click();
        expect(searchMovies).toHaveBeenCalled();
    });
    // test("search movies", async () => {
    //     const form = document.querySelector("#movie-input")!;

    //     if (form instanceof HTMLInputElement) form.value = "Inception";
    //     await searchMovies();
    //     const mainElement = document.querySelector(".searchResults");
    //     if (mainElement instanceof HTMLElement)
    //         expect(mainElement.style.display == "flex");
    // });
    test("URL change", () => {
        document.querySelectorAll("a").forEach((el) => {
            el.addEventListener("click", (e) => {
                e.preventDefault();
                if (e.currentTarget instanceof HTMLElement) {
                    const url = `/${e.currentTarget.id}`;
                    if (url !== document.location.pathname) {
                        history.pushState({}, "", url);
                    }
                }
            });
        });
        const links = document.querySelectorAll("a");
        links[2].click();
        expect(document.location.pathname).toContain("watchlist");
    });
});
