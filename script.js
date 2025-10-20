document.addEventListener('DOMContentLoaded', () => {

    // --- Smooth Scrolling for Navigation Links ---
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            let targetId = this.getAttribute('href');
            let targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // --- Fade-in and Slide-up Effect on Scroll ---
    const revealElements = document.querySelectorAll('section, footer');

    const revealOnScroll = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    };

    const sectionObserver = new IntersectionObserver(revealOnScroll, {
        root: null,
        threshold: 0.1, // A lower threshold to trigger a bit earlier
    });

    revealElements.forEach(elem => {
        // Initial state for animation
        elem.style.opacity = 0;
        elem.style.transform = 'translateY(30px)';
        elem.style.transition = 'opacity 0.6s ease-out, transform 0.8s ease-out';
        sectionObserver.observe(elem);
    });

});