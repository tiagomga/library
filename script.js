const books = [];

function Book(name, author, numberPages) {
    this.name = name;
    this.author = author;
    this.numberPages = numberPages;
    this.read = false;
}