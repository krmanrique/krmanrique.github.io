// Add smooth scrolling and additional interactivity
document.addEventListener('DOMContentLoaded', function () {
    // Add random movement to bubbles
    const bubbles = document.querySelectorAll('.bubble');

    bubbles.forEach((bubble, index) => {
        const randomX = (Math.random() - 0.5) * 200;
        bubble.style.setProperty('--random', randomX / 100);

        // Random animation delay variation
        const delay = Math.random() * 5;
        bubble.style.animationDelay = `${delay}s`;
    });

    // Add hover effect sound or additional effects (optional)
    // Modificado: cambiado de '.link-button' a '.btn' según sugerencia de GPT
    const linkButtons = document.querySelectorAll('.btn');

    linkButtons.forEach(button => {
        button.addEventListener('mouseenter', function () {
            // Modificado: cambiado de '1.02' a '1.05' según sugerencia de GPT
            this.style.setProperty('--hover-scale', '1.05');
        });

        button.addEventListener('mouseleave', function () {
            this.style.setProperty('--hover-scale', '1');
        });
    });

    // Parallax effect for bubbles on mouse move (optional enhancement)
    document.addEventListener('mousemove', function (e) {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;

        bubbles.forEach((bubble, index) => {
            const speed = (index + 1) * 0.5;
            const x = (mouseX - 0.5) * speed * 10;
            const y = (mouseY - 0.5) * speed * 10;

            bubble.style.transform = `translate(${x}px, ${y}px)`;
        });
    });

    // Add loading animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease-in';
        document.body.style.opacity = '1';
    }, 100);

    // Modal functionality
    const modal = document.getElementById('certificatesModal');
    const openButton = document.getElementById('openCertificates');
    const closeButton = document.getElementById('closeModal');

    // Open modal
    openButton.addEventListener('click', function (e) {
        e.preventDefault();
        modal.classList.add('show');
        document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    });

    // Close modal when clicking the close button
    closeButton.addEventListener('click', function () {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto';
    });

    // Close modal when clicking outside the modal content
    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            modal.classList.remove('show');
            document.body.style.overflow = 'auto';
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            modal.classList.remove('show');
            document.body.style.overflow = 'auto';
        }
    });
});

// Easter egg: Console message (se mantiene igual)
console.log('%c¡Hola! 👋', 'color: #9f7aea; font-size: 24px; font-weight: bold;');
console.log('%c¿Curioseando el código? Me gusta tu estilo 😎', 'color: #d6bcfa; font-size: 14px;');
console.log('%cSi estás buscando a alguien apasionado por la tecnología, ¡hablemos!', 'color: #b794f6; font-size: 12px;');