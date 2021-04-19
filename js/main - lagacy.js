const selection = {};

function makeSelection(evt, category, value) {
  const categories = document.querySelectorAll("." + category);
  console.log(categories);
  for (let i = 0; i < categories.length; i++) {
    categories[i].className = categories[i].className.replace("active", "");
  }
  evt.currentTarget.className += " active";
  selection[category] = value;
  const getPrice = calculatePrice();
  showPrice(getPrice);
}
function calculatePrice() {
  total = 0;
  for (let key in selection) {
    total += selection[key];
  }
  return total;
}

function showPrice(getPrice) {
  const price = document.querySelector("#price");
  price.innerText = getPrice;
}
