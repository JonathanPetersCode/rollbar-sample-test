let addToCartButton = document.querySelector("#add-to-cart-btn");
let reviewProductButton = document.querySelector("#review-product-btn");

function alertUserOfAddToCart(){
    alert("You added an item to cart!");
}

function alertUserOfReviewProduct() {
    alert("You have left a review!");
}

addToCartButton.addEventListener("click", alertUserOfAddToCart)

// Reference Error - Triggers Rollbar Event
reviewProductButton.addEventListener("click", alertUserOfReviewProduct)