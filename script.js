const books = [];

function Book(name, author, numberPages) {
    this.name = name;
    this.author = author;
    this.numberPages = numberPages;
    this.read = false;
}

function createCardItem(name, numberPages, author, read) {
    const card = document.createElement("div");
    const cardContent = document.createElement("div");
    const cardButtons = document.createElement("div");

    card.classList.add("card");
    cardContent.classList.add("card-content");
    cardButtons.classList.add("card-buttons");

    card.appendChild(cardContent);
    card.appendChild(cardButtons);

    const bookName = document.createElement("p");
    const bookPages = document.createElement("p");
    const bookAuthor = document.createElement("p");
    const readStatus = document.createElement("p");

    bookName.textContent = name;
    bookPages.textContent = numberPages + " pages";
    bookAuthor.textContent = author;
    readStatus.textContent = read ? "Read" : "Not read" ;

    bookName.classList.add("book-name");
    bookPages.classList.add("book-pages");
    bookAuthor.classList.add("book-author");
    readStatus.classList.add("read-status");

    cardContent.appendChild(bookName);
    cardContent.appendChild(bookPages);
    cardContent.appendChild(bookAuthor);
    cardContent.appendChild(readStatus);

    const markAsReadButton = document.createElement("button");
    const deleteButton = document.createElement("button");

    markAsReadButton.classList.add("mark-read");
    deleteButton.classList.add("delete");

    markAsReadButton.textContent = read ? "Mark as unread" : "Mark as read";
    deleteButton.textContent = "Remove";

    cardButtons.appendChild(markAsReadButton);
    cardButtons.appendChild(deleteButton);

    return card;
}

function updateBookCards() {
    const booksDiv = document.querySelector(".books");
    booksDiv.replaceChildren();
    for (let book of books) {
        const bookCard = createCardItem(book.name, book.numberPages, book.author, book.read);
        booksDiv.appendChild(bookCard);
    }
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
    updateBookCards();
    form.reset();
    modal.close();
});