const books = [];
const form = document.querySelector("#book-form");

form.addEventListener("submit", (e) => {
  //prevent default behavior
  e.preventDefault();

  //   get value from field
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const isbn = document.querySelector("#isbn").value;

  const book = {
    title,
    author,
    isbn,
  };
  addToBookList(book);
});

function addToBookList(book) {
  if (book.title == "" || book.author == "" || book.isbn == "") {
    alert("Field is empty");
    return;
  }

  displayList(book);
}
function displayList(book) {
  const list = document.querySelector("#book-list");
  const row = document.createElement("tr");
  row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td></td>
        `;
  list.appendChild(row);
}
