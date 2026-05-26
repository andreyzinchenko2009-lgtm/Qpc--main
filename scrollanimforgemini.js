document.addEventListener('DOMContentLoaded', function() {
    const scrollBtn = document.getElementById('scrollBtn');
    if (!scrollBtn) return;

    scrollBtn.dataset.direction = scrollBtn.dataset.direction || 'down';

    scrollBtn.addEventListener('click', function() {
        if (this.dataset.direction === 'up') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else {
            window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: 'smooth'
            });
        }
    });
});