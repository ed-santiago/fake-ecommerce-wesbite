const h2 = document.createElement("h2");
h2.textContent = "This content added by JavaScript";
document.querySelector("body").appendChild(h2);

fetch('https://fakestoreapi.com/products/')
  .then(res=>res.json())
  .then(json=>console.log(json))

