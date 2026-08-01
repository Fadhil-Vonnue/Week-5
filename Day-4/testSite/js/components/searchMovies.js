import { showToast, fetchJSON1 } from "../utils.js";
import { createSearchCard } from "./searchCards.js";
export async function searchMovies() {
    const input = document.querySelector("#movie-input");
    const value = input.value;
    const form = {};
    form["movieTitle"] = { value };
    if (form["movieTitle"].value.length < 3) {
        showToast({ message: "Minlength is 3" });
    }
    else {
        const data = await fetchJSON1(`https://www.omdbapi.com/?apikey=d65b40df&s=${form["movieTitle"].value}&page=1`);
        if (data.Response == "False") {
            showToast({ message: "Couldn't Fetch" });
        }
        else {
            const mainElement = document.querySelector(".searchResults");
            mainElement.style.display = "flex";
            mainElement.innerHTML = ``;
            data.Search.forEach((el) => {
                const card1 = createSearchCard(el);
                mainElement.appendChild(card1);
            });
        }
    }
}
