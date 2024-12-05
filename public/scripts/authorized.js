document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // First fetch request to login and store the token
    fetch('/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password }) // Send the login credentials
    })
    .then(response => response.json())
    .then(data => {
        if (data.token) {
            localStorage.setItem('token', data.token); // Store the token
            alert('Login successful!');
            document.getElementById('response').innerText = 'Login successful!'; 
            document.getElementById('protected-content').style.display = 'block';

            // Second fetch request to access protected content
            fetch('/protected/profile', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${data.token}` // Attach the token
                }
            })
            .then(response => response.json())
            .then(data => {
                console.log(data); 
                document.getElementById('profile-info').innerText = `Hello! Good luck for today's hard work!`; 
            })
            .catch(error => console.error('Error:', error)); 
        } else { 
            alert('Login failed.'); 
            document.getElementById('response').innerText = 'Invalid username or password'; 
        } 
    })
    .catch(error => console.error('Error:', error));
});
