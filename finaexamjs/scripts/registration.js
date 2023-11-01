document.addEventListener("DOMContentLoaded", function() {
    const registrationForm = document.getElementById("registration-form");
    const registerButton = document.getElementById("register-btn");

    registerButton.addEventListener("click", function() {
        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const location = document.getElementById("location").value;
        const email = document.getElementById("email").value;
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        
        const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail.com$/;
        if (!email.match(emailRegex)) {
            document.getElementById("email-message").textContent = "Invalid email format.";
            return;
        }

      
        if (password.length < 8) {
            document.getElementById("password-message").textContent = "Password must be at least 8 characters.";
            return;
        }

      
        const user = {
            firstName: firstName,
            lastName: lastName,
            location: location,
            email: email,
            username: username,
          
            password: password,
        };

        
        localStorage.setItem(username, JSON.stringify(user));

        
        window.location.href = "login.html";
    });
});
