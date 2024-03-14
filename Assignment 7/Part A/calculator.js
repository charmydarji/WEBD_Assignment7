$(document).ready(function() {
    // Display the username from the URL query string
    const params = new URLSearchParams(window.location.search);
    var username = params.get('username');
    $('#username').text(username); // Corrected to target the span by its ID

    // Function to validate input and perform the operation
    const performOperation = (operation) => {
        const num1 = $('#num1').val();
        const num2 = $('#num2').val();
        let result = '';

        // Validate inputs
        let valid = true;
        $('.error-message').text(''); // Make sure the class matches for clearing error messages

        if (!num1 || isNaN(num1)) {
            $('#num1Error').text('Please enter a valid number');
            valid = false;
        }

        if (!num2 || isNaN(num2)) {
            $('#num2Error').text('Please enter a valid number');
            valid = false;
        }

        // Perform calculation if inputs are valid
        if (valid) {
            const n1 = parseFloat(num1);
            const n2 = parseFloat(num2);

            result = ((op, a, b) => {
                switch (op) {
                    case 'add': return a + b;
                    case 'subtract': return a - b;
                    case 'multiply': return a * b;
                    case 'divide': return b !== 0 ? a / b : 'Cannot divide by zero';
                    default: return 0;
                }
            })(operation, n1, n2);

            $('#result').val(result);
        }
    };

    // Event handlers for operation buttons based on data-operation attribute
    $('.btn').click(function() {
        const operation = $(this).data('operation');
        performOperation(operation);
    });
});
