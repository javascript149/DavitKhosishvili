document.addEventListener('DOMContentLoaded', function () {
    const registerForm = document.getElementById('register-form');
    const message = document.getElementById('message');

    registerForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const firstName = document.getElementById('first-name').value;
        const lastName = document.getElementById('last-name').value;
        const email = document.getElementById('email').value;
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

       
        if (!firstName || !lastName || !email || !username || !password) {
            message.textContent = 'Please fill in all fields.';
            return;
        }

        
        if (localStorage.getItem(username)) {
            message.textContent = 'Username is already taken. Please choose a different one.';
            return;
        }

   
        const user = {
            firstName,
            lastName,
            email,
            username,
            password,
        };
        localStorage.setItem(username, JSON.stringify(user));

        message.textContent = 'Registration successful. You will be redirected to the login page.';
        
        
        setTimeout(function () {
            window.location.href = 'login.html';
        }, 2000); 
    });
});
