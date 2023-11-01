document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("login-form");
    const loginButton = document.getElementById("login-btn");

    loginButton.addEventListener("click", function() {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

       
        const user = JSON.parse(localStorage.getItem(username));

        if (user && user.password === password) {
            
            localStorage.setItem('loggedInUser', JSON.stringify(user));
            sessionStorage.setItem('loggedInUser', JSON.stringify(user));

            window.location.href = "index.html";
        } else {
            
            alert("Invalid username or password. Please try again.");
        }
    });
});
