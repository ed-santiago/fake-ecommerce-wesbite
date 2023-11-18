const products = fetch('http://localhost:3000/products')

function getProducts() {
  fetch(products)
    .then(res => res.json())
    .then(data => console.log(data))
}

console.log(getProducts())