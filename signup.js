// signup.js

document.getElementById("signup-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form from submitting

    // Input values
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirm-password").value.trim();
    const email = document.getElementById("mail").value.trim();

    // Error elements
    const usernameError = document.getElementById("usernameError");
    const passwordError = document.getElementById("passwordError");
    const confirmPasswordError = document.getElementById("confirm-passwordError");
    const emailError = document.getElementById("mailError");

    // Clear previous errors
    usernameError.textContent = "";
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";
    emailError.textContent = "";

    let isValid = true;

    // Username validation
    if (username === "") {
        usernameError.textContent = "Username is required.";
        isValid = false;
    }

    // Password validation
    if (password === "") {
        passwordError.textContent = "Password is required.";
        isValid = false;
    } else if (password.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters.";
        isValid = false;
    }

    // Confirm password validation
    if (confirmPassword === "") {
        confirmPasswordError.textContent = "Please confirm your password.";
        isValid = false;
    } else if (password !== confirmPassword) {
        confirmPasswordError.textContent = "Passwords do not match.";
        isValid = false;
    }

    // Email validation
    if (email === "") {
        emailError.textContent = "Email is required.";
        isValid = false;
    } else if (!validateEmail(email)) {
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
    }

    // If all valid
    if (isValid) {
        alert("Sign up successful!");
        // Proceed with backend or next step
        // Example: this.submit(); or redirect
        window.location.href="login.html" ;
    }
});

// Email format checker
function validateEmail(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}
