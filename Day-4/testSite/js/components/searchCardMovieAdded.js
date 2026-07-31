import { onMovieAdded } from "../../main.js";
export async function searchCardMovieAdded(currentTarget, movieList, svg) {
    const imbdbID = currentTarget.parentElement.parentElement.dataset.id;
    movieList.add(imbdbID);
    await onMovieAdded(imbdbID);
    svg.style.display = "none";
    currentTarget.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.style.display =
        "none";
    return movieList;
}
