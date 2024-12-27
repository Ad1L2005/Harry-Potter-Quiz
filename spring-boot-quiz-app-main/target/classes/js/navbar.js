document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        window.scrollTo({
            top: document.querySelector(event.target.getAttribute('href')).offsetTop,
            behavior: 'smooth'
        });
    });
});