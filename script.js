// JavaScript for Comrade Zone website

// Confession Handling
const CONFESSIONS_KEY = 'comrade_confessions';

function saveConfession(confession) {
    const confessions = getConfessions();
    confessions.push({
        text: confession,
        timestamp: new Date().toLocaleString()
    });
    localStorage.setItem(CONFESSIONS_KEY, JSON.stringify(confessions));
}

function getConfessions() {
    return JSON.parse(localStorage.getItem(CONFESSIONS_KEY)) || [];
}

function displayConfessions() {
    const confessionsList = document.querySelector('.confessions-list');
    if (confessionsList) {
        confessionsList.innerHTML = getConfessions()
            .map(conf => `<div class="confession-item">${conf.text}<br><small>${conf.timestamp}</small></div>`)
            .join('');
    }
}

// Handle confession form submission
const confessionForm = document.getElementById('confessionForm');
if (confessionForm) {
    confessionForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const confessionText = document.getElementById('confessionText').value.trim();
        if (confessionText) {
            saveConfession(confessionText);
            // Force reload to ensure confessions are displayed
            window.location.href = 'conf.html';
            window.location.reload();
        } else {
            alert('Please write a confession before submitting!');
        }
    });
}

// Header scroll behavior
let lastScroll = 0;
const header = document.querySelector('.header');
const scrollThreshold = 100; // Pixels to scroll before hiding header

// Display confessions when page loads
document.addEventListener('DOMContentLoaded', function() {
    displayConfessions();
});

window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        // At top of page, show header
        header.classList.remove('header-hidden');
        return;
    }

    if (currentScroll > lastScroll && !header.classList.contains('header-hidden')) {
        // Scrolling down
        if (currentScroll > scrollThreshold) {
            header.classList.add('header-hidden');
        }
    } else if (currentScroll < lastScroll && header.classList.contains('header-hidden')) {
        // Scrolling up
        header.classList.remove('header-hidden');
    }
    
    lastScroll = currentScroll;
});
