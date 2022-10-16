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
    // Check your console to see that the products are stored in the listOfProducts varible.
    console.log(listOfProducts);
}