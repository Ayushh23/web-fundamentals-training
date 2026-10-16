const BASE_URL = "https://dummyjson.com";

async function getJSON(path) {
  const response = await fetch(`${BASE_URL}${path}`);
  if (!response.ok) {
    throw new Error("Could not load data");
  }
  return response.json();
}

export function getProducts(limit = 12) {
  return getJSON(`/products?limit=${limit}`);
}

export function searchProducts(query) {
  return getJSON(`/products/search?q=${encodeURIComponent(query)}`);
}
