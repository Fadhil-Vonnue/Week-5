import { showToast } from "@utils";
import { addToList } from "./addWatchlistCard.js";
export async function updateWatchList(state: {
    list: Set<unknown>;
    id: string;
    type: string;
}) {
    const list = state.list;
    const imdbID = state.id;
    if (state.type === "Add") {
        if (document.location.pathname.includes("watchlist"))
            await addToList(imdbID);
    }
    if (state.type === "Delete") {
        const delCard = document.querySelector(`.card[data-id="${imdbID}"]`)!;
        delCard.remove();
    }
    localStorage.setItem("watchList", JSON.stringify([...list]));
}
