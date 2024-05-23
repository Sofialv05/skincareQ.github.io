function render(array) {
  let render = document.getElementById("render");
  // console.log(render)
  render.innerHTML = "";

  for (let x = 0; x < array.length; x++) {
      render.innerHTML += `<div class="card">
          <div class="card h-100">
              <img 
              src="${listBelanjaan[x].image}"/>
              <div class="card-body">
                  <h5 class="card-title">${listBelanjaan[x].namaProduk}</h5>
                  <p class="card-text">${listBelanjaan[x].deskripsiProduk}</p>
              </div>
              <div class="card-footer">
                  <small class="text-body-secondary">Last updated 3 mins ago</small>
              </div>
              <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Add To Cart
        </button>
          </div>
      </div>`
  }
}

render(listBelanjaan)











let themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});

document.addEventListener("DOMContentLoaded", function () {
  var myCarousel = document.getElementById("carouselExampleSlidesOnly");
  var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 2000,
  });
});

let navbarNav = document.querySelector(".nabar-extra");
document.querySelector("hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};


// Ganti pemilihan kelas untuk membuka menu hamburger
// let navbarNav = document.querySelector(".navbar-extra");

// Perbaiki pengambilan nilai untuk deskripsi produk
let productName = document.querySelector("#product-name").innerText;
let productPrice = parseFloat(document.querySelector("#product-price").innerText);

// Perbaiki pengambilan harga dan penambahan belanjaan
let productQuantity = parseInt(document.querySelector("#product-quantity").value);
let totalPrice = productPrice * productQuantity;

// Tampilkan total belanja dengan format yang benar
document.querySelector("#total-price").innerText = totalPrice.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');



// JS Mba sofia

//deskripsi produk
const mainImg = document.getElementById("main-img");
const smallImg = document.getElementsByClassName("small-img");

for (let i = 0; i < 4; i++) {
  smallImg[i].addEventListener("click", () => {
    mainImg.src = smallImg[i].src;
  });
}

const closeButton = document.getElementById("close");
const description = document.getElementById("description");

closeButton.addEventListener("click", () => {
  description.style = "display: none";
});

// nambah belanjaan
const addButton = document.querySelector(".add-to-cart");
const cart = document.querySelector("#table-cart");
const sumPrice = document.querySelector(".sum-price");
const sumAll = document.querySelector(".sum-checkout");
//hitung total belanjaan
let totalBelanja = 0;

addButton.addEventListener("click", () => {
  // bikin row baru
  const newCartRow = document.createElement("tr");
  newCartRow.classList.add("items");
  cart.appendChild(newCartRow);

  const xMark = `<i class="fa-regular fa-circle-xmark"></i>`;
  const mainImgSrc = mainImg.src;

  const newImg = document.createElement("img");
  const productName = document.querySelector("#product-name").innerText;
  const priceString = document.querySelector("#price").innerText;
  let price = "";

  for (let i = 4; i < priceString.length; i++) {
    if (priceString[i] === ".") {
      continue;
    } else if (priceString[i] === ",") {
      break;
    } else {
      price += priceString[i];
    }
  }

  let numPrice = Number(price);
  const quantity = document.querySelector("#qty").value;
  let totalPrice = String(numPrice * quantity);

  let noZeros = "";
  for (let i = 0; i < totalPrice.length - 3; i++) {
    noZeros += totalPrice[i];
  }

  const subTotal = `Rp. ${noZeros}.000,00`;
  totalBelanja += numPrice * quantity;

  let totalCheckOut = `Rp. ${totalBelanja},00`;
  sumPrice.innerText = totalCheckOut;
  sumAll.innerText = totalCheckOut;

  const array = [
    xMark,
    mainImgSrc,
    productName,
    priceString,
    quantity,
    subTotal,
  ];

  for (let i = 0; i < 6; i++) {
    const newItems = document.createElement("td");
    newCartRow.appendChild(newItems);

    if (i === 0) {
      newItems.classList.add("remove");
      newItems.addEventListener("click", () => {
        //kurangi total belanjaan
        totalBelanja -= numPrice * quantity;
        let totalCheckOut2 = `Rp. ${totalBelanja},00`;
        sumPrice.innerText = totalCheckOut2;
        sumAll.innerText = totalCheckOut2;
        newCartRow.remove();

        if (totalBelanja === 0) {
          sumPrice.innerText = "-";
          sumAll.innerText = "-";
        }
      });
    }

    if (i === 1) {
      const imageItem = document.createElement("img");
      imageItem.src = array[1];
      newItems.appendChild(imageItem);
    } else {
      newItems.innerHTML = array[i];
    }
  }
});

// remove belanjaan
// const removeCart = document.querySelector(".remove");

// removeCart.addEventListener("click", () => {
//   removeCart.parentNode.remove();
// });


// JS Mba sofia END