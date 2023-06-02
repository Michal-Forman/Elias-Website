// Get the form, password input field, and the additional content div
const passwordForm = document.getElementById('passwordForm');
const passwordInput = document.getElementById('passwordInput');
const additionalContent = document.getElementById('additionalContent');

// Define the correct password and the redirect URL
const correctPassword = "IzraelJeNej"; // Replace with your desired password
const redirectURL = "secret-content-revealed.html"; // Replace with the URL of the secret page

// Add an event listener to the form submission
passwordForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const enteredPassword = passwordInput.value;

    if (enteredPassword === correctPassword) {
        // Store the information about password entry in sessionStorage
        sessionStorage.setItem('passwordEntered', 'true');
        
        // Redirect to the secret page if the correct password is entered
        window.location.href = redirectURL;
    } else {
        // Hide the additional content if an incorrect password is entered
        additionalContent.style.display = 'none';
    }

    // Reset the password input field
    passwordInput.value = '';
});
