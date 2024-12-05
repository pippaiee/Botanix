fetch('/logger/entries', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
           }
})
.then(response => response.json())
.then(data => {
    const logbookContainer = document.getElementById('logbook-container');
    data.forEach(entry => {
        const entryElement = document.createElement('div');
        entryElement.classList.add('logbook-entry');
        entryElement.innerHTML = `
            <h3>${entry.username}</h3>
            <p>Date: ${entry.date}</p>
            <p>Activity: ${entry.activity}</p>
            <p>Weather: ${entry.weather}</p>
            <p>Problems: ${entry.problems}</p>
            <p>Notes: ${entry.notes}</p>
        `;
        logbookContainer.appendChild(entryElement);
    });
})
.catch(error => console.error('Error:', error));
