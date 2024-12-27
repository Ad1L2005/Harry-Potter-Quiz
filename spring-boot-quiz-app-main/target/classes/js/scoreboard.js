document.addEventListener('DOMContentLoaded', () => {
    
    const tableBody = document.querySelector('table tbody');
    if (!tableBody) {
        console.error("Table body not found!");
        return;
    }

    
    fetch('/api/score')
        .then(response => {
            if (!response.ok) throw new Error("Failed to fetch scores");
            return response.json();
        })
        .then(scores => {
            tableBody.innerHTML = ''; 
            scores.forEach(score => {
                const row = document.createElement('tr');
                row.innerHTML = `<td>${score.username}</td><td>${score.totalCorrect}</td>`;
                tableBody.appendChild(row);
            });
        })
    .catch(err => console.error('Error loading scores:', err));

    
});
