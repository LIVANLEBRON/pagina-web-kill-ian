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

    // Pest Price Calculator Logic
    const roomsSlider = document.getElementById('rooms-slider');
    const roomsDisplay = document.getElementById('rooms-display');
    const calcPest = document.getElementById('calc-pest');
    const calcPriceDisplay = document.getElementById('calc-price-display');
    const sendCalcWhatsapp = document.getElementById('send-calc-whatsapp');

    if (roomsSlider && calcPest && calcPriceDisplay) {
        const updatePrice = () => {
            const rooms = parseInt(roomsSlider.value);
            const pest = calcPest.value;
            let label = rooms === 1 ? '1 Habitación / Área' : `${rooms} Habitaciones / Áreas`;
            roomsDisplay.innerText = label;

            // Price rates factors
            let baseMin = 1500;
            let baseMax = 2500;
            let multiplier = 400; // price added per extra room/area

            if (pest === 'comejen') {
                baseMin = 3000;
                baseMax = 5000;
                multiplier = 800;
            } else if (pest === 'roedores') {
                baseMin = 2000;
                baseMax = 3200;
                multiplier = 500;
            } else if (pest === 'pulgas') {
                baseMin = 1800;
                baseMax = 2800;
                multiplier = 450;
            }

            const finalMin = baseMin + (rooms - 1) * multiplier;
            const finalMax = baseMax + (rooms - 1) * multiplier;

            const priceText = `RD$ ${finalMin.toLocaleString()} - RD$ ${finalMax.toLocaleString()}`;
            calcPriceDisplay.innerText = priceText;

            // Update WhatsApp link with pre-filled message
            const pestNames = {
                'chiripas': 'Chiripas y Cucarachas',
                'comejen': 'Comején / Termitas',
                'roedores': 'Ratas y Ratones',
                'pulgas': 'Pulgas y Garrapatas'
            };
            const textMessage = encodeURIComponent(
                `Hola kill-iAn, me gustaría reservar un servicio. \n\n` +
                `Detalles de mi cotización:\n` +
                `- Propiedad: ${rooms} habitaciones/áreas\n` +
                `- Plaga: ${pestNames[pest] || pest}\n` +
                `- Rango estimado: ${priceText}\n\n` +
                `¿Cuándo tienen disponibilidad para una inspección?`
            );
            sendCalcWhatsapp.href = `https://wa.me/18294415959?text=${textMessage}`;
        };

        // Event listeners
        roomsSlider.addEventListener('input', updatePrice);
        calcPest.addEventListener('change', updatePrice);

        // Run on load
        updatePrice();
    }
});
