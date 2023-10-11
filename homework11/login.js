document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    const message = document.getElementById('message');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const loginUsername = document.getElementById('login-username').value;
        const loginPassword = document.getElementById('login-password').value;

        const storedUserData = localStorage.getItem(loginUsername);
        if (storedUserData) {
            const user = JSON.parse(storedUserData);
            if (user.password === loginPassword) {
                message.textContent = 'Login successful. Welcome, ' + user.firstName + '!';
            } else {
                message.textContent = 'Incorrect password.';
            }
        } else {
            message.textContent = 'User not found. Please register first.';
        }
    });
});
