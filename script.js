// Add timestamp styles
const style = document.createElement('style');
style.textContent = `
    .timestamp {
        font-size: 0.1em;
        color: #666;
        text-align: right;
        margin-top: 5px;
    }
`;
document.head.appendChild(style);

// Handle confession form submission and display
document.addEventListener('DOMContentLoaded', function() {
    // Form submission handling
    const form = document.getElementById('confessionForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const textarea = document.getElementById('confessionText');
            const confession = textarea.value.trim();
            
            if (confession) {
                // Save confession
                const confessions = JSON.parse(localStorage.getItem('confessions')) || [];
                confessions.push({
                    text: confession,
                    timestamp: new Date().toLocaleString()
                });
                localStorage.setItem('confessions', JSON.stringify(confessions));
                
                // Redirect to conf.html
                window.location.href = 'conf.html';
            } else {
                alert('Please write a confession before submitting!');
            }
        });
    }

    // Display recent confessions
    const confessionsList = document.querySelector('.confessions-list');
    if (confessionsList) {
        const confessions = JSON.parse(localStorage.getItem('confessions')) || [];
        confessionsList.innerHTML = confessions
            .slice(-100) // Show last 100 confessions
            .reverse() // Show most recent first
            .map(conf => `
                <div class="confession-item">
                    ${conf.text}
                    <div class="timestamp">${conf.timestamp}</div>
                </div>
            `)
            .join('');
    }
});
