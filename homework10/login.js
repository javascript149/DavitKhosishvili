document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const loginUsername = document.getElementById("loginUsername").value;
        const loginPassword = document.getElementById("loginPassword").value;
        const userData = JSON.parse(localStorage.getItem("userData")) || [];
        const user = userData.find(user => user.username === loginUsername && user.password === loginPassword);
        if (user) {
            alert("Login successful!");
           
        } else {
            alert("Invalid username or password. Please try again.");
        }

        loginForm.reset();
    });
});
