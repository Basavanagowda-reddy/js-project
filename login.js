// login.js

document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission

    // Get values
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('pass').value.trim();

    // Get error display elements
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    // Reset previous error messages
    emailError.textContent = '';
    passwordError.textContent = '';

    let isValid = true;

    // Email validation
    if (email === '') {
        emailError.textContent = 'E-mail is required';
        isValid = false;
    } else if (!validateEmail(email)) {
        emailError.textContent = 'Please enter a valid email address';
        isValid = false;
    }

    // Password validation
    if (password === '') {
        passwordError.textContent = 'Password is required';
        isValid = false;
    } else if (password.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters';
        isValid = false;
    }

    if (isValid) {
        // If all validations pass
        window.location.href="home.html" ;// You can replace this with actual login logic
    }
});

// Email format validation using regular expression
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
