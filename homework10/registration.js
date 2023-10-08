document.addEventListener("DOMContentLoaded", function () {
    const registrationForm = document.getElementById("registration-form");
    const registerButton = document.getElementById("register-btn");

    registerButton.addEventListener("click", function (e) {
        e.preventDefault();

        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const location = document.getElementById("location").value;
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const userData = JSON.parse(localStorage.getItem("userData")) || [];
        
        userData.push({ firstName, lastName, location, username, password });

        localStorage.setItem("userData", JSON.stringify(userData));

        alert("Registration successful!");
        registrationForm.reset();
    });
});
