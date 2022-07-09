
//variables from table in cart file
let imgBox = document.getElementById("img");
let name = document.getElementById("name");
let price = document.getElementById("price");
let quantity = document.getElementById("quantity");
let removeBtn = document.getElementById("remove-btn");


// create and add images / work on this next
let img1 = document.createElement("img");
img1.src = "desktop-0.png";
img1.classList.add("img");


let img2 = "desktop-1.jfif";
let img3 = "desktop-2.jfif";
let img4 = "laptop-0.png";
let img5 = "laptop-1.jpeg";

imgBox.append(img1);

// button variables for "add to cart"
let btn1 = document.getElementById("btn-1");
let btn2 = document.getElementById("btn-2");
let btn3 = document.getElementById("btn-3");
let btn4 = document.getElementById("btn-4");
let btn5 = document.getElementById("btn-5");
let btn6 = document.getElementById("btn-6");
let btn7 = document.getElementById("btn-7");
let btn8 = document.getElementById("btn-8");
let btn9 = document.getElementById("btn-9");

// function to remove item from cart
removeBtn.addEventListener("click", function(event) {
  let buttonClicked = event.target;
  buttonClicked.parentElement.parentElement.remove();
  updateCartTotal();
})

//still working on this
function updateCartTotal() {
  let cartItemContainer = document.getElementsByClassName("cart-table")[0];
  let cartRows = cartItemContainer.getElementsByClassName("cart-row-data");
}

// still working on this
function addToCart() {
  
}