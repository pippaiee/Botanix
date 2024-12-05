document.getElementById('LogbookForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const username = document.getElementById('username').value;
    const date = document.getElementById('date').value;
    const activity = document.getElementById('activity').value;
    const weather = document.getElementById('weather').value;
    const problems = document.getElementById('problems').value;
    const notes = document.getElementById('notes').value;

  
    fetch('/logger/new', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, date, activity, weather, problems, notes }) 
    })
    .then(response => { if (!response.ok) { 
        throw new Error('Failed to submit new entry'); 
    } return response.json(); }) 
    .then(data => { alert('New entry submitted!'); 
        document.getElementById('response').innerText = 'New entry submitted successfully!'; 
        document.getElementById('protected-content').style.display = 'block'; }) 
        .catch(error => { console.error('Error:', error); 
        document.getElementById('response').innerText = 'An error occurred. Please try again.'; 
    });
});



