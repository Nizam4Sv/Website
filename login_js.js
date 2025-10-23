document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const messageDiv = document.getElementById('message');

    // Define the valid credentials (hardcoded for a simple client-side demo)
    const validUsername = 'user';
    const validPassword = 'password123';

    // Add an event listener for form submission
    loginForm.addEventListener('submit', function(event) {
        // Prevent the form from submitting normally (and reloading the page)
        event.preventDefault();

        // Get the values from the input fields
        const usernameInput = document.getElementById('username').value.trim();
        const passwordInput = document.getElementById('password').value.trim();

        // Basic validation and logic
        if (usernameInput === validUsername && passwordInput === validPassword) {
            // Successful login
            messageDiv.textContent = 'Login Successful! Welcome.';
            messageDiv.style.color = 'green';
            // In a real application, you would redirect the user here:
            window.location.href = 'database.html'; 
            loginForm.reset(); // Clear the form
        } else {
            // Failed login
            messageDiv.textContent = 'Invalid Username or Password.';
            messageDiv.style.color = 'red';
        }
    });
});


