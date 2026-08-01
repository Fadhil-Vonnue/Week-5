import { createButton } from "@components/createButton.js";

export function renderSettingsPage() {
    const documentFragment = document.createDocumentFragment();
    const divElement = document.createElement("div");
    const h2Element = document.createElement("h2");
    h2Element.textContent = "Settings Page";
    divElement.append(h2Element);
    documentFragment.append(divElement);
    const mainElement1 = document.querySelector("main")!;
    const mainElement = document.createElement("div");
    mainElement1.innerHTML = ``;
    mainElement.classList.value = ``;
    mainElement.classList.add("reload");
    mainElement.innerHTML = "";
    mainElement.append(documentFragment);
    mainElement1.appendChild(mainElement);
    const container = document.createElement("div");
    container.classList.add("container");
    let card = createButton("Log In") as HTMLElement;

    card.classList.add("new-button");
    container.appendChild(card);

    card = createButton("Create User") as HTMLElement;

    card.classList.add("new-button");
    container.appendChild(card);

    card = createButton("Your Watchlist") as HTMLElement;

    card.classList.add("new-button");
    container.appendChild(card);

    card = createButton("Change Password") as HTMLElement;

    card.classList.add("new-button");
    container.appendChild(card);

    card = createButton("Delete Account") as HTMLElement;

    card.classList.add("new-button");
    container.appendChild(card);
    mainElement1.appendChild(container);
}
