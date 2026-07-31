import { navigate } from "../js/utils.js";
import { registerPath } from "../js/utils.js";
import { renderListPage } from "../js/pages/list";
import { addToList } from "../js/components/addWatchlistCard";
import * as mainModule from "../main";
const fetch = require("cross-fetch");
global.fetch = fetch;
describe("Test Routing", () => {
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
    let routes = {};
    test("test list register", () => {
        let path = "/list";
        registerPath(routes, path, renderListPage);
        expect(routes[path]).toBe(renderListPage);
    });
    test("navigate to List without params", async () => {
        const res = await navigate(routes, "/list", {});
        expect(res).toBe(true);
    });
    test("check image on error", () => {
        const img = document.querySelector(".card-img img");
        const errorEvent = new ErrorEvent("error", {
            bubbles: true,
            cancelable: true,
            message: "Image failed to load",
        });
        if (img instanceof HTMLImageElement) {
            img.dispatchEvent(errorEvent);
            expect(img.src).toBe("https://picsum.photos/id/1/200/300");
        }
    });
    test("check image on error for createCard1", async () => {
        document.body.innerHTML = `<div class="results" data-id="tt0147800">
        <div class="AddButton">
        <img style="display:none;" src="https://picsum.photos/id/1/200/300"/>
        </div>
        </div>
        <div class="cards"></div>`;
        await addToList("tt0147800");
        const img = document.querySelector(".card-img img");
        const errorEvent = new ErrorEvent("error", {
            bubbles: true,
            cancelable: true,
            message: "Image failed to load",
        });
        if (img instanceof HTMLImageElement) {
            img.dispatchEvent(errorEvent);
            expect(img.src).toBe("https://picsum.photos/id/1/200/300");
        }
    });
    test("Delete movie", () => {
        const spy = jest
            .spyOn(mainModule, "onMovieDelete")
            .mockImplementation(() => "hello");
        console.log(document.body.innerHTML);
        const but = document.querySelector(".addToFav-button");
        but.click();
        expect(spy).toHaveBeenCalled();
    });
});
