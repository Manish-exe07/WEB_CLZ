// 1. Select the HTML elements we need to interact with
const addToCartBtn = document.getElementById('add-to-cart-btn');
const cartCountElement = document.getElementById('cart-count');
const cartIconElement = document.getElementById('cart-icon');

// 2. Set up our Application State
let cartCount = 0; // Starts at zero

// 3. Listen for User Interaction
addToCartBtn.addEventListener('click', function() {
    
    // Step A: Update the state
    cartCount++;
    
    // Step B: Update the DOM (HTML) to show the new count
    cartCountElement.innerText = cartCount;

    // Step C: Change the button text temporarily to show success
    addToCartBtn.innerText = "Added!";
    addToCartBtn.style.backgroundColor = "#e63946"; // Turn it red

    // Step D: Trigger the CSS bounce animation on the cart
    cartIconElement.classList.add('bounce');

    // Step E: Reset the button and remove the animation class after 1 second
    setTimeout(function() {
        addToCartBtn.innerText = "Add to Cart";
        addToCartBtn.style.backgroundColor = "#1a1a1a";
        
        // We remove the class so the animation can be triggered again next click
        cartIconElement.classList.remove('bounce'); 
    }, 1000); 

});