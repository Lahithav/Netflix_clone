function navigateToSignIn() {
    window.location.href = 'signin.html';
}

document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    navigateToSignIn();
});
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get the input values
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Simple validation check
    if (email === '' || password === '') {
        alert('Please fill in both fields.');
    } else {
        alert('Sign In successful!');
    }
});
