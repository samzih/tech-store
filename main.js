var listOfProducts;

/** Get products from the json file and store it in a gobal variable */
function loadProducts() {
    fetch("./products.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(products) {
        listOfProducts = products;
        addProductsToWebpage();
    });
}


function initSite() {
    loadProducts();
    // This would also be a good place to initialize other parts of the UI
}

/* Uses the loaded products data to create a visible product list on the website */
function addProductsToWebpage() {
    for (const product of listOfProducts) {

        // PRODUCT ELEMENTS
        const productContainer = document.createElement("div");
        const productTitle = document.createElement("h1");
        const productDescription = document.createElement("p");
        const productImage = document.createElement("img");
        const productPrice = document.createElement("h2");
        const productAddToCartBtn = document.createElement("button");
        const productAddToCartIcon = document.createElement("i");
        const productAddToCartText = document.createElement("p");




        // When clicking on the add to shopping cart button the object gets stored in local storage
        productAddToCartBtn.addEventListener("click", function() {
            this.setAttribute("disabled", true);
            console.log(product);
            if (!localStorage.getItem("cart")) {
                localStorage.setItem("cart", JSON.stringify([product]));
            }else {
                const cart = JSON.parse(localStorage.getItem("cart"));
                cart.push(product);
                localStorage.setItem("cart", JSON.stringify(cart));
            }
        });




        // CLASSES
        productContainer.classList = ("productContainer");
        productTitle.classList = ("productTitle");
        productDescription.classList = ("productDescription");
        productImage.classList = ("productImage");
        productPrice.classList = ("productPrice");
        productAddToCartBtn.classList = ("productAddToCartBtn");
        productAddToCartIcon.classList = ("fa-solid fa-cart-arrow-down productAddToCartIcon");
        productAddToCartText.classList = ("productAddToCartText");




        // PRODUCT NAME & DESCRIPTION
        productTitle.innerText = product.title;
        productDescription.innerText = product.description;

        // PRODUCT IMAGE
        const productImageURL = "./assets/" + product.image;
        productImage.setAttribute("src", productImageURL);
        productImage.setAttribute("alt", `Picture of a ${product.title}`);

        // PRODUCT PRICE
        productPrice.innerText = `${product.price} kr`;

        // ADD TO SHOPPING CART TEXT
        productAddToCartText.innerText = "Lägg till i kundvagnen";




        // PRODUCT APPENDED INSIDE CONTAINER
        document.querySelector("main").appendChild(productContainer);
        productContainer.appendChild(productTitle);
        productContainer.appendChild(productDescription);
        productContainer.appendChild(productImage);
        productContainer.appendChild(productPrice);
        productContainer.appendChild(productAddToCartBtn);
        productAddToCartBtn.appendChild(productAddToCartIcon);
        productAddToCartBtn.appendChild(productAddToCartText);
    }
}


// Add a if else statement so that this only runs if there is a cart key in local storage
// Something like this: if (localStorage.getItem("cart")) {run everything in the addLocalStorageCartProductsToCartPage function}
// else {return} maybe add some element with innertext that says shopping cart is empty
function addLocalStorageCartProductsToCartPage() {
    const cartListOfProducts = JSON.parse(localStorage.getItem("cart"));
    console.log(cartListOfProducts);

    for (const cartProduct of cartListOfProducts) {
        const cartContainer = document.createElement("div");
        const productContainer = document.createElement("div");
        const productImage = document.createElement("img");
        const productTitle = document.createElement("h1");
        const productPrice = document.createElement("h2");
        const productRemoveFromCartBtn = document.createElement("button");
        const productRemoveFromCartIcon = document.createElement("i");
        const productRemoveFromCartText = document.createElement("p");




        // LOCALSTORAGE PRODUCT IMAGE
        const productImageURL = "./assets/" + cartProduct.image;
        productImage.setAttribute("src", productImageURL);
        productImage.setAttribute("alt", `Picture of a ${cartProduct.title}`);

        // LOCALSTORAGE PRODUCT TITLE
        productTitle.innerText = cartProduct.title;

        // // LOCALSTORAGE PRODUCT PRICE
        productPrice.innerText = `${cartProduct.price} kr`;

        // // LOCALSTORAGE REMOVE FROM SHOPPING CART
        productRemoveFromCartText.innerText = "Ta bort";
        



        document.querySelector("main").appendChild(cartContainer);
        cartContainer.appendChild(productContainer);
        productContainer.appendChild(productImage);
        productContainer.appendChild(productTitle);
        productContainer.appendChild(productPrice);
        productContainer.appendChild(productRemoveFromCartBtn);
        productRemoveFromCartBtn.appendChild(productRemoveFromCartIcon);
        productRemoveFromCartBtn.appendChild(productRemoveFromCartText);
    }
}