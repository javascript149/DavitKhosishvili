document.addEventListener("DOMContentLoaded", function() {
    const userLoggedIn = sessionStorage.getItem('loggedInUser');
    const cartItems = [];

   
    function addToCart(event) {
        if (userLoggedIn) {
            const product = event.target.getAttribute('data-product');
            const price = parseFloat(event.target.getAttribute('data-price'));
            cartItems.push({ product, price });
            updateCart();
        } else {
            window.location.href = "login.html";
        }
    }

    
    function updateCart() {
        const cartList = document.getElementById('cart-items');
        const cartTotal = document.getElementById('cart-total');
        let total = 0;

        cartList.innerHTML = '';

        cartItems.forEach((item, index) => {
            const listItem = document.createElement('li');
            listItem.textContent = `${item.product} - $${item.price.toFixed(2)}`;

            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.addEventListener('click', () => {
                removeItem(index);
            });

            listItem.appendChild(removeButton);

            cartList.appendChild(listItem);
            total += item.price;
        });

        cartTotal.textContent = total.toFixed(2);
    }

    
    function removeItem(index) {
        cartItems.splice(index, 1);
        updateCart();
    }

    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });

    const checkoutButton = document.getElementById('checkout-button');
    checkoutButton.addEventListener('click', checkout);

    function checkout() {
       

        cartItems.length = 0;
        updateCart();
    }
});
