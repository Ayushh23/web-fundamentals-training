import { getProducts, searchProducts } from "./api.js";
import { Card } from "./views/card.js";

const list = document.querySelector("#product-list");
const status = document.querySelector("#status");
const form = document.querySelector("#search-form");
const input = document.querySelector("#search-input");

async function load(query = "") {
  status.textContent = "Loading products…";
  list.innerHTML = "";

  try {
    const data = query ? await searchProducts(query) : await getProducts();

    if (!data.products.length) {
      status.textContent = "No products found";
      return;
    }

    status.textContent = "";
    list.innerHTML = data.products.map(Card).join("");
  } catch {
    status.textContent = "Could not load products.";
    const button = document.createElement("button");
    button.type = "button";
    button.className = "btn";
    button.textContent = "Try again";
    button.onclick = () => load(query);
    status.append(" ", button);
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  load(input.value.trim());
});

document.querySelector("#year").textContent = new Date().getFullYear();
load();
