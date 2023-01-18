import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  const products = document.querySelector('.product');
  console.log(products)

  const Span = products.querySelector('.price');
  const price = Span.textContent;

  console.log(price)
  products.setAttribute('data-price', price);


});
