// script.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the default form submission

        // Get form values
        const username = form.querySelector('#username').value;
        const password = form.querySelector('#password').value;

        // Simple validation
        if (username === '' || password === '') {
            alert('Please fill out all fields.');
            return;
            
        }

        // If validation passes, show a success message (or handle form submission)
        alert('Form submitted successfully!');
        
        // Example: Here you can add code to actually send the form data to a server.
        // For example, using fetch() to send data to a server endpoint
        // fetch('/login', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({ username, password })
        // }).then(response => response.json())
        //   .then(data => console.log(data))
        //   .catch(error => console.error('Error:', error));
    });
});