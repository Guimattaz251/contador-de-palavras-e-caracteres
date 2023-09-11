const input = document.querySelector("#input");
const counter = document.querySelector(".counter");
const toogleButton = document.querySelector("#toogle");

let mode = "characters";

toogleButton.addEventListener("click", () => {
    if(mode === "characters") {
        mode = "words";
        toogleButton.textContent = "contar caracteres";
    } else {
        mode = "characters";
        toogleButton.textContent = "contar palavras";
    }

    input.dispatchEvent(new Event("input"));
});

input.addEventListener("input", () => {

    let count = 0;

    if(mode === "characters") {
         count = input.value.length;

        counter.textContent = `${count} caractere(s)`;
    } else {
        const words = input.value.trim().split(/\s+/);
        count =  input.value.trim() === "" ? 0 : words.length;
        counter.textContent = `${count} palavra(s)`;
    }
});