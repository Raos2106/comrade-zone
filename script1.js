const header = document.querySelector('.header');
let lastScrollTop = 0;

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scrolling down
        header.style.top = '-100px'; // Adjust this value based on header height
    } else {
        // Scrolling up
        header.style.top = '0';
    }
    lastScrollTop = scrollTop;
});
