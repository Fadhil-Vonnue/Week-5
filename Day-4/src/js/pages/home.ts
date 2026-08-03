import { parseCSV, showToast } from "@utils";
import { createCard } from "@components/movieCards.js";

export async function renderHomePage() {
    const div = document.createElement("div");
    div.classList.add("hero");
    const img = document.createElement("img");
    img.src = "../../assets/collage.jpg";
    let div1 = document.createElement("div");
    div1.classList.add("fade-overlay");
    div.appendChild(img);
    div.appendChild(div1);
    div1 = document.createElement("div");
    div1.classList.add("black-overlay");
    div.appendChild(div1);
    const mainElement1 = document.querySelector("main")!;
    const mainElement = document.createElement("div");
    mainElement1.innerHTML = ``;
    mainElement.classList.add("reload");
    const cardsElement = document.createElement("div");
    cardsElement.classList.add("cards");
    mainElement.appendChild(div);
    const allCards = await parseCSV("http://127.0.0.1:8080/Top_100_Movies.csv");
    if (allCards)
        for (let i = 0; i < 6; i++) {
            const newCard = await createCard(allCards[i]);
            cardsElement.appendChild(newCard);
        }
    else cardsElement.textContent = `Couldnt fetch Cards`;
    mainElement.appendChild(cardsElement);
    mainElement1.appendChild(mainElement);
}
