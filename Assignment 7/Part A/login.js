$(document).ready(function() {
    const validateForm = () => {
        console.log('validate');
        let isValid = true;
        $('.error').text(''); // Clear all error messages

        // Email validation
        const email = $('#email').val();
        if (!email) {
            $('#emailError').text('Email is required.');
            isValid = false;
        } else if (!/^[a-zA-Z0-9._%+-]+@northeastern\.edu$/.test(email)) {
            $('#emailError').text('Email must be a valid northeastern.edu address.');
            isValid = false;
        }

        // Username validation
        const username = $('#username').val();
        if (!username) {
            $('#usernameError').text('Username is required.');
            isValid = false;
        } else if (username.length < 4 || username.length > 20) {
            $('#usernameError').text('Username must be between 4 and 20 characters.');
            isValid = false;
        } else if (/[^a-zA-Z0-9_]/.test(username)) {
            $('#usernameError').text('Username must contain only letters, numbers, and underscores.');
            isValid = false;
        }

        // Password validation
        const password = $('#password').val();
        if (!password) {
            $('#passwordError').text('Password is required.');
            isValid = false;
        } else if (password.length < 6 || password.length > 20) {
            $('#passwordError').text('Password must be between 6 and 20 characters.');
            isValid = false;
        }

        // Confirm Password validation
        const confirmPassword = $('#confirmPassword').val();
        if (password !== confirmPassword) {
            $('#confirmPasswordError').text('Passwords do not match.');
            isValid = false;
        }

        $('#loginBtn').prop('disabled', !isValid);
    };

    $('input').on('keyup change', validateForm);

    $('#loginForm').submit(function(e) {
        e.preventDefault();
        // If the form is valid, redirect to the calculator page with the username
        if (!$('#loginBtn').prop('disabled')) {
            const username = $('#username').val();
            window.location.href = `calculator.html?username=${encodeURIComponent(username)}`;
        }
    });
});
