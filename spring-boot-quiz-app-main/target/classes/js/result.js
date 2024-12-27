document.addEventListener('DOMContentLoaded', () => {
    const scoreElement = document.querySelector('.score');
    scoreElement.style.opacity = 0;
    setTimeout(() => scoreElement.style.opacity = 1, 500);
});