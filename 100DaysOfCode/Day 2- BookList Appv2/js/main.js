//Book class - Initiate book

class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}
//UI Class - Handle all method related to Interface
class UI {
  static displayBooks() {
    const books = [
      { _id: 1, title: "Star ship", author: "Hamja", isbn: 1231231 },
      { _id: 2, title: "Danish", author: "Abu Ubaida", isbn: 3231231 },
    ];
    books.forEach((book) => {
      UI.addToBookList(book);
    });
  }
  static addToBookList(book) {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href = "javascript:void(0)" class = "delete btn btn-sm">X</a></td>
    `;
    const list = document.querySelector("#book-list");
    list.appendChild(row);
  }
  static removeBook(element) {
    if (element.classList.contains("delete"))
      element.parentElement.parentElement.remove();
  }
  static clearField() {
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#isbn").value = "";
  }
}
//event - Load table data
window.addEventListener("DOMContentLoaded", function (e) {
  UI.displayBooks();
});
//event add book to list
const form = document.querySelector("#book-form");
form.addEventListener("submit", function (e) {
  //prevent default behavior
  e.preventDefault();
  //get value from field
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const isbn = document.querySelector("#isbn").value;

  if (title == "" || author == "" || isbn == "") {
    alert("Field cannot be empty");
    return;
  }

  const book = {
    title,
    author,
    isbn,
  };
  UI.addToBookList(book);
  UI.clearField();
});
//event handle delete book
const list = document.querySelector("#book-list");
list.addEventListener("click", function (e) {
  UI.removeBook(e.target);
});
