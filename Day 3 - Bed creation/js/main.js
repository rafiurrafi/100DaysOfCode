const bedFeatureHeader = document.querySelectorAll(".bed-feature__header");

for (let i = 0; i < bedFeatureHeader.length; i++) {
  bedFeatureHeader[i].addEventListener("click", function (e) {
    this.classList.toggle("active");
    this.lastElementChild.classList.toggle("active");

    const panel = this.nextElementSibling;
    if (panel.style.display == "block") {
      panel.style.display = "none";
    } else panel.style.display = "block";
  });
}
const selection = {
  size: 10,
  color: 70,
  headboard: 130,
  base_depth: 190,
  storage_option: 240,
};
let oldPrice = 0;
let newPrice;
window.addEventListener("DOMContentLoaded", function () {
  console.log("ready");

  newPrice = calculatePrice();
  showMessages("price", newPrice);
});
function createBed(evt, category, value) {
  const categories = document.querySelectorAll("." + category);
  for (let i = 0; i < categories.length; i++) {
    categories[i].className = categories[i].className.replace("active", "");
  }
  evt.currentTarget.className += " active";
  selection[category] = value;
  oldPrice = newPrice;
  newPrice = calculatePrice();
  showMessages("oldPrice", oldPrice);
  showMessages("price", newPrice);
}
function calculatePrice() {
  total = 0;
  for (let key in selection) {
    total += selection[key];
  }
  return total;
}

function showMessages(idName, getPrice) {
  const element = document.querySelector("#" + idName);
  element.innerText = getPrice;
}
function showOptions() {
  const options = [
    "size",
    "colour",
    "headboard",
    "base_depth",
    "storage_option",
  ];
  options.map((option) => {
    const element = document.querySelectorAll("." + option).length;
    showMessages(option, element);
  });
}
showOptions();
