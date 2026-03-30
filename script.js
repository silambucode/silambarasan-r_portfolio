// Initialize AOS (Animate On Scroll)
if (typeof AOS !== 'undefined') {
    AOS.init({
        duration: 800,
        offset: 100,
        once: true
    });
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Add scroll effect to navigation
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.boxShadow = '0 4px 20px rgba(0, 102, 204, 0.2)';
    } else {
        nav.style.boxShadow = '0 2px 20px rgba(0, 102, 204, 0.1)';
    }
});

// Dynamic year in footer
document.addEventListener('DOMContentLoaded', function() {
    const year = new Date().getFullYear();
    const footerYear = document.querySelector('.footer-year');
    if (footerYear) {
        footerYear.textContent = year;
    }

    // PDF Modal functionality
    const pdfGalleryBtn = document.getElementById('pdf-gallery-btn');
    const pdfModal = document.getElementById('pdf-modal');
    const modalClose = document.querySelector('.modal-close');

    if (pdfGalleryBtn && pdfModal) {
        // Open PDF modal when clicking gallery button
        pdfGalleryBtn.addEventListener('click', function() {
            pdfModal.classList.add('show');
        });

        // Close PDF modal when clicking X button
        if (modalClose) {
            modalClose.addEventListener('click', function() {
                pdfModal.classList.remove('show');
            });
        }

        // Close PDF modal when clicking outside the content
        window.addEventListener('click', function(event) {
            if (event.target === pdfModal) {
                pdfModal.classList.remove('show');
            }
        });

        // Close modal with Escape key
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape' && pdfModal.classList.contains('show')) {
                pdfModal.classList.remove('show');
            }
        });
    }
});

// Add active class to navigation links based on scroll position
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});
