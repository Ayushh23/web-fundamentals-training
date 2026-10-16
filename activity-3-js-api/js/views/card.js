export function Card(product) {
  return `
    <li>
      <article class="card">
        <img src="${product.thumbnail}" alt="${product.title}" width="300" height="300" loading="lazy">
        <p class="card-category">${product.brand ?? "Unknown"}</p>
        <h3 class="card-title">${product.title}</h3>
        <p class="card-price">$${product.price}</p>
        <p class="card-rating">Rated ${product.rating} out of 5</p>
        <button type="button" class="btn">Add to cart</button>
      </article>
    </li>
  `;
}
