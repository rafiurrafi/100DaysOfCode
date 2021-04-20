const movies = [
  { _id: 2, name: "Puspa", rating: 7.6 },
  { _id: 1, name: "Ek tha tiger", rating: 5.6 },
  { _id: 4, name: "Lucky the racer", rating: 8.0 },
  { _id: 5, name: "96", rating: 8.7 },
  { _id: 10, name: "Chennai express", rating: 8.7 },
  { _id: 7, name: "Kal ho na ho", rating: 9.1 },
  { _id: 3, name: "RRR", rating: 6.6 },
  { _id: 6, name: "Dangerous khiladi", rating: 8.61 },
  { _id: 9, name: "Housefull iv", rating: 6.1 },
  { _id: 8, name: "Good news", rating: 7.4 },
];

function displayMovie() {
  const list = document.querySelector("#list");
  movies.map((movie) => {
    const listItem = document.createElement("tr");
    listItem.innerHTML = `
      <td>${movie._id}</td>
      <td>${movie.name}</td>
      <td>${movie.rating}</td>
      <td><a href ="javascript:void(0)" onclick = 'deleteMovie(${movie._id})' class ="delete close">X</a></td>
    `;
    list.appendChild(listItem);
  });
}

function compare(key, order = "asc") {
  return function (a, b) {
    var valueA, valueB, comparison;
    valueA = typeof a[key] === "string" ? a[key].toUpperCase() : a[key];
    valueB = typeof b[key] === "string" ? b[key].toUpperCase() : b[key];

    if (valueA > valueB) comparison = 1;
    else if (valueA < valueB) comparison = -1;
    else comparison = 0;

    return order === "desc" ? comparison * -1 : comparison;
  };
}
function sortMovie(e) {
  movies.sort(compare(e.target.id));
  const list = document.querySelector("#list");
  list.innerHTML = "";
  displayMovie();
}

document.addEventListener("click", sortMovie);

document.addEventListener("DOMContentLoaded", displayMovie);
