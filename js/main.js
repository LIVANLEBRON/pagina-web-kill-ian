document.addEventListener('DOMContentLoaded', () => {
    // Mobile navigation toggle
    const menuToggle = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            
            // Toggle hamburger icon animation
            const spans = menuToggle.querySelectorAll('span');
            spans[0].style.transform = navMenu.classList.contains('active') 
                ? 'rotate(45deg) translate(6px, 6px)' 
                : 'none';
            spans[1].style.opacity = navMenu.classList.contains('active') ? '0' : '1';
            spans[2].style.transform = navMenu.classList.contains('active') 
                ? 'rotate(-45deg) translate(6px, -6px)' 
                : 'none';
        });
    }

    // Sticky Call Button behavior (show on scroll)
    const stickyCall = document.getElementById('sticky-call');
    
    if (stickyCall) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                stickyCall.style.display = 'flex';
            } else {
                stickyCall.style.display = 'none';
            }
        });
    }

    // Form Submission (simple simulation with modern notification)
    const contactForm = document.getElementById('pest-quote-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerText;
            submitBtn.disabled = true;
            submitBtn.innerText = 'Enviando solicitud...';

            // Simulate server request
            setTimeout(() => {
                submitBtn.style.backgroundColor = '#10b981';
                submitBtn.innerText = '¡Solicitud Enviada con Éxito!';
                contactForm.reset();

                setTimeout(() => {
                    submitBtn.disabled = false;
                    submitBtn.style.backgroundColor = '';
                    submitBtn.innerText = originalText;
                }, 3000);
            }, 1500);
        });
    }

    // FAQ Accordion Logic
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            
            // Close other open items
            document.querySelectorAll('.accordion-item').forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle active class on clicked item
            item.classList.toggle('active');
        });
    });

});
