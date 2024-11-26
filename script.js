const books = [];

function Book(name, author, numberPages) {
    this.name = name;
    this.author = author;
    this.numberPages = numberPages;
    this.read = false;
}

const openButton = document.querySelector("#open-modal");
const closeButton = document.querySelector("#close-button");
const form = document.querySelector("form");
const modal = document.querySelector("dialog");

openButton.addEventListener("click", () => modal.showModal());
closeButton.addEventListener("click", () => modal.close());
form.addEventListener("submit", () => {
    const name = document.querySelector("#name").value;
    const author = document.querySelector("#author").value;
    const numberPages = document.querySelector("#pages").value;
    let book = new Book(name, author, numberPages);
    books.push(book);
    form.reset();
    modal.close();
});