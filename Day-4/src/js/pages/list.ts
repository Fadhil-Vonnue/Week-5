import { parseCSV } from "@utils";
import { createCard } from "@components/movieCards.js";

export async function renderListPage() {
    const documentFragment = document.createDocumentFragment();
    const divElement = document.createElement("div");
    documentFragment.append(divElement);
    const mainElement1 = document.querySelector("main")!;
    const mainElement = document.createElement("div");
    mainElement1.innerHTML = ``;
    mainElement.classList.value = ``;
    mainElement.classList.add("reload");
    const cardsElement = document.createElement("div");
    cardsElement.classList.add("cards");
    mainElement.appendChild(documentFragment);
    const allCards = await parseCSV("http://127.0.0.1:8080/Top_100_Movies.csv");
    if (allCards)
        for (let i = 0; i < allCards.length; i++) {
            const newCard = createCard(allCards[i]);
            cardsElement.appendChild(newCard);
        }
    else cardsElement.textContent = "Couldnt fetch cards";
    mainElement.appendChild(cardsElement);
    mainElement1.appendChild(mainElement);
}
