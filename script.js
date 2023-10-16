const productField = document.getElementById("name-of-products");
const quantityOfProducts = document.getElementById("quantity-of-product");
const storeBtn = document.getElementById("store-btn");
const itemsContainer = document.getElementById("items-container");
storeBtn.addEventListener("click", function () {
  // get the value
  const productName = productField.value;
  const productQuantity = quantityOfProducts.value;

  //   console.log(productName, productQuantity);
  // clear the value
  itemsContainer.classList.add("display");
  console.log(itemsContainer);
  productField.value = "";
  quantityOfProducts.value = "";
  //   show the products
  const p = document.createElement("p");
  p.innerHTML = `<p>${productName}:${productQuantity}</p>`;
  //   console.log(p.innerHTML);
  itemsContainer.appendChild(p);
  setLocalStorageValue(productName, productQuantity);
});
// localStorage.setItem("name", "sakib");
// console.log(localStorage.getItem("name"));
// const user = ["sakib", "akib"];
// localStorage.setItem("user", JSON.stringify(user));
// console.log(JSON.parse(localStorage.getItem("user")));

// save products in local storage

//get value from local
// displayUILocalItems
displayFromLocal();
function displayFromLocal() {
  const cart = getValue();
  for (let productName in cart) {
    const quantity = cart[productName];
    itemsContainer.classList.add("display");
    const p = document.createElement("p");
    p.innerHTML = `<p>${productName}:${quantity}</p>`;
    //   console.log(p.innerHTML);
    itemsContainer.appendChild(p);
  }
}
displayFromLocal();
function getValue() {
  let cart = {};
  const storedCart = localStorage.getItem("cart");
  if (storedCart) {
    cart = JSON.parse(storedCart);
  }
  return cart;
}

function setLocalStorageValue(productName, productQuantity) {
  const cart = getValue(); //initially take value from local storage

  cart[productName] = productQuantity;
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringified);
}
// const nums = { n: 12 };
// console.log(nums["n"]);
