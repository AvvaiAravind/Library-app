const dialog = document.querySelector("dialog");
const addBtn = document.querySelector(".add-button");
const closeBtn = document.querySelector(".close-button");
const readStatuses = document.querySelectorAll(".read-status-container");
console.log(readStatuses);
const deleteBtns = document.querySelectorAll(".delete-button");
const includeBtn = document.querySelector(".include-button");
const form = document.querySelector("form");
const booksContainer = document.querySelector(".books-list-container");
let idCounter = 0;
let cardCounter = 0;
const myLibrary = [];

addBtn.addEventListener("click", () => {
  dialog.showModal();
});

closeBtn.addEventListener("click", () => {
  dialog.close();
});

readStatuses.forEach((readstatus) => {
  readstatus.addEventListener("click", (e) => {
    const p = readstatus.querySelector("p");
    console.log(p.textContent);
    p.textContent = p.textContent === "Read" ? "Not Read" : "Read";
  });
});

deleteBtns.forEach((deletebtn) => {
  deletebtn.addEventListener("click", () => {
    const card = deletebtn.parentElement.parentElement;
    card.remove();
  });
});

includeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  addBookToLibrary();
});

function addBookToLibrary() {
  const title = document.querySelector("#book-name").value;
  const author = document.querySelector("#author-name").value;
  const pages = document.querySelector("#pages").value;
  const readStatus = document.querySelector("#read-status").value;
  console.log(readStatus);
  if (form.checkValidity()) {
    const idCounter = new Book(title, author, pages, readStatus);
    console.log(idCounter);
    myLibrary.push(idCounter);
    createCard();
    dialog.close();
  } else {
    form.reportValidity();
  }
  console.log(myLibrary);
}

function createCard() {
  const div = document.createElement("div");
  div.className = "card";
  console.log(div);
  booksContainer.appendChild(div);
  for (let i = 0; i < 3; i++) {
    const p = document.createElement("p");
    switch (i) {
      case 0:
        p.textContent = `Book: ${myLibrary[cardCounter].title}`;
        break;
      case 1:
        p.textContent = `Author: ${myLibrary[cardCounter].author}`;
        break;
      case 2:
        p.textContent = `Pages: ${myLibrary[cardCounter].pages}`;
        break;
    }
    div.appendChild(p);
  }
  const div1 = document.createElement("div");
  div1.className = "read-status-container";
  div.appendChild(div1);
  const p = document.createElement("p");
  p.textContent = `${myLibrary[cardCounter].readStatus}`;
  div1.appendChild(p);

  cardCounter++;
}

function Book(title, author, pages, readStatus) {
  idCounter++;
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
