

//let productsInCart = [];


// let productList = [
//   {name: "desktop0", price: 499.99},
//   {name: "desktop1", price: 649.99},
//   {name: "desktop2", price: 599.99},
//   {name: "laptop0", price: 999.99},
//   {name: "laptop1", price: 399.99},
//   {name: "laptop2", price: 299.99},
//   {name: "tablet0", price: 199.99},
//   {name: "tablet1", price: 249.99},
//   {name: "tablet2", price: 299.99},
// ];

let row1 = document.createElement("div");
let productName = document.createElement("h2");
let box1 = document.createElement("div");
let price = document.createElement("p");
let img1 = new Image();

let cartList = document.getElementById("cart-list");

row1.classList.add("row");
productName.classList.add("header");
img1.classList.add("img");

productName.textContent = "acer intel i3";
price.textContent = "499.99";

img1.src = "desktop-0.png";
row1.append(img1);
cartList.append(row1);
row1.append(box1);
box1.append(productName);
box1.append(price);