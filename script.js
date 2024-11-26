const books = [];

function Book(name, author, numberPages) {
    this.name = name;
    this.author = author;
    this.numberPages = numberPages;
    this.read = false;
}

const openButton = document.querySelector("#open-modal");
const closeButton = document.querySelector("#close-button");

openButton.addEventListener("click", () => modal.showModal());
closeButton.addEventListener("click", () => modal.close());