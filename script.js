const sections = document.querySelectorAll('.snap-section');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 2) {
        current = section.getAttribute('id');
    }
    });

    navLinks.forEach(link => {
    link.classList.remove('text-blue-600', 'underline');
    if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('text-blue-600', 'underline');
    }
    });
});

// Hiệu ứng fade-in khi scroll vào section
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
    if (entry.isIntersecting) {
        entry.target.classList.add('active');
    }
    });
}, { threshold: 0.3 });

sections.forEach(section => observer.observe(section));