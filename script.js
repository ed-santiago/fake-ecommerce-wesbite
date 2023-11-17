fetch('https://fakestoreapi.com/products/')
  .then(res=>res.json())
  .then(json=>console.log(json))

const form = document.querySelector("input.input-field")
console.log(form)