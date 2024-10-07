const addBtn = document.querySelector("click", () => {});

const myLibrary = [];

function Book(title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
}

Book.prototype.info = function () {
  let readMessage =
    this.readStatus === "Read" ? "already read" : "not read yet";
  return `${this.title} by ${this.author}, ${this.pages}, ${readMessage}`;
};

const Hobbit = new Book("The Hobbit", "Tolkein", 300, "Read");
