import { searchCardMovieAdded } from "./searchCardMovieAdded.js";
let movieList: Set<string> = new Set();
export function createSearchCard(details: Record<string, string>) {
    const card = document.createElement("div");
    card.classList.add("results");
    const img = document.createElement("img");
    img.src = details.Poster;
    img.addEventListener("error", handleImageError);
    card.appendChild(img);
    const div = document.createElement("div");
    div.textContent = `${details.Title} ( ${details.Year} )`;
    card.dataset.id = details.imdbID;
    const burron = document.createElement("button");
    const svg = document.createElement("img");
    svg.src = "../../assets/addtofav.svg";
    burron.appendChild(svg);
    burron.style.background = "none";
    svg.style.width = "20px";
    svg.style.height = "20px";
    burron.classList.add("AddButton");
    burron.addEventListener("click", async (e) => {
        const currTarget = e.currentTarget as HTMLElement;
        movieList = await searchCardMovieAdded(currTarget, movieList, svg);
    });
    div.appendChild(burron);
    card.appendChild(div);
    function handleImageError() {
        img.onerror = null;
        img.src = "https://picsum.photos/id/1/200/300";
    }

    return card;
}
