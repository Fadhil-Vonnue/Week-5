export function createButton(text: string, bgColor = "white", color = "black") {
    const button = document.querySelector(".detailed-buttons button");
    button!.classList.add("new-button");
    const clonedButton = button!.cloneNode(true);
    if (clonedButton instanceof HTMLElement) {
        clonedButton.style.backgroundColor = bgColor;
        clonedButton.style.color = color;
        clonedButton.textContent = text;
    }
    return clonedButton;
}
