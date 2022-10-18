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


// Checks if there is a cart key in local storage and if so it adds them to the shopping cart page, otherwise if not then nothing really happens
function addLocalStorageCartProductsToCartPage() {

    if (localStorage.getItem("cart")) {
        const cartListOfProducts = JSON.parse(localStorage.getItem("cart"));
        console.log(cartListOfProducts);
        for (const cartProduct of cartListOfProducts) {
            
            // CART PRODUCT ELEMENTS
            const cartContainer = document.createElement("div");
            const cartProductContainer = document.createElement("div");
            const cartProductImage = document.createElement("img");
            const cartProductTitle = document.createElement("h1");
            const cartProductPrice = document.createElement("h2");
            const cartProductRemoveFromCartBtn = document.createElement("button");
            const cartProductRemoveFromCartIcon = document.createElement("i");
            const cartProductRemoveFromCartText = document.createElement("p");

            // TOTAL PRICE & COMPLETE PURCHASE
            const cartTotalPrice = document.createElement("h2");
            const cartCompletePurchaseBtn = document.createElement("button");
            const cartCompletePurchaseIcon = document.createElement("i");
            const cartCompletePurchaseText = document.createElement("p");




            // CLASSES
            cartContainer.classList = ("cartContainer");
            cartProductContainer.classList = ("cartProductContainer");
            cartProductImage.classList = ("cartProductImage");
            cartProductTitle.classList = ("cartProductTitle");
            cartProductPrice.classList = ("cartProductPrice");
            cartProductRemoveFromCartBtn.classList = ("cartProductRemoveFromCartBtn");
            cartProductRemoveFromCartIcon.classList = ("fa-regular fa-trash-can cartProductRemoveFromCartIcon");
            cartProductRemoveFromCartText.classList = ("cartProductRemoveFromCartText");




            // LOCALSTORAGE PRODUCT IMAGE
            const productImageURL = "./assets/" + cartProduct.image;
            cartProductImage.setAttribute("src", productImageURL);
            cartProductImage.setAttribute("alt", `Picture of a ${cartProduct.title}`);

            // LOCALSTORAGE PRODUCT TITLE
            cartProductTitle.innerText = cartProduct.title;

            // // LOCALSTORAGE PRODUCT PRICE
            cartProductPrice.innerText = `${cartProduct.price} kr`;

            // // LOCALSTORAGE REMOVE FROM SHOPPING CART
            cartProductRemoveFromCartText.innerText = "Ta bort";
            



            document.querySelector("main").appendChild(cartContainer);
            cartContainer.appendChild(cartProductContainer);
            cartProductContainer.appendChild(cartProductImage);
            cartProductContainer.appendChild(cartProductTitle);
            cartProductContainer.appendChild(cartProductPrice);
            cartProductContainer.appendChild(cartProductRemoveFromCartBtn);
            cartProductRemoveFromCartBtn.appendChild(cartProductRemoveFromCartIcon);
            cartProductRemoveFromCartBtn.appendChild(cartProductRemoveFromCartText);
        }
    }else {
        console.log("Kungvagnen är tom!");
        return;
    }
};