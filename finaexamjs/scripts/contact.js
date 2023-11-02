document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");
    const emailField = document.getElementById("email");

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const emailValue = emailField.value;

        if (!isValidEmail(emailValue)) {
            alert("Please enter a valid email address.");
            return;
        }

      
        alert("Message sent successfully!");

       
        contactForm.reset();
    });

    function isValidEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
    }
});
