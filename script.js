// JavaScript for Comrade Zone website

// Header scroll behavior
let lastScroll = 0;
const header = document.querySelector('.header');
const scrollThreshold = 100; // Pixels to scroll before hiding header

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
