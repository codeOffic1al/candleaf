import { productData } from "./data.js";

const products = document.querySelector(".products");

const productList = document.createElement("div");
// productList.className = "product-list";
productList.classList.add("product-list");
products.insertAdjacentElement("beforeend", productList);



productData.forEach((item) => {
    // console.log(item);
    // console.log(index);
    const template = `
        <div class="product-item">
            <img class="product-img" src="${item.productImg}" alt="">
            <div class="product-content">
                <h3 class="product-title">${item.productName}</h3>
                <p class="product-desc">${item.productDesc}</p>
                <div class="product-info">
                    <div class="product-price">${item.productPrice}$</div>
                    <div class="product-sold">Sold 2k</div>
                </div>
                <button class="product-btn">+ Add to cart</button>
            </div>
        </div>
    `;
    productList.insertAdjacentHTML("beforeend", template);
});

let count = 0;
const productBtn = document.querySelectorAll(".product-btn");
console.log(productBtn);
productBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        const headerQuantity = document.querySelector(".header-quantity");
        count++;
        if(count > 0){
            headerQuantity.style.display = "flex";
            if(count < 100) headerQuantity.textContent = count;
            else headerQuantity.textContent = "99+";
        }
    });
});