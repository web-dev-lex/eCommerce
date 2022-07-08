

let img = document.getElementById("img");
let name = document.getElementById("name");
let price = document.getElementById("price");
let quantity = document.getElementById("quantity");
let removeBtn = document.getElementById("remove-btn");

removeBtn.addEventListener("click", function(event) {
  let buttonClicked = event.target;
  buttonClicked.parentElement.parentElement.remove();
})




