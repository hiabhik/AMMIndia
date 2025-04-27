document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }

    // Enhanced 3D parallax effect for background elements
    const handleMouseMove = (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        // Move floating elements with 3D transform
        document.querySelectorAll('.floating-element').forEach((element, index) => {
            const speed = parseFloat(element.getAttribute('data-speed') || 0.05);
            const xOffset = (x - 0.5) * 100 * speed;
            const yOffset = (y - 0.5) * 100 * speed;
            const zOffset = (x - 0.5) * (y - 0.5) * 80;
            const rotateX = (y - 0.5) * 10;
            const rotateY = (x - 0.5) * -10;

            // Different transform for each element type
            if (element.classList.contains('element-1')) {
                element.style.transform = `translate3d(${xOffset}px, ${yOffset}px, ${zOffset}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            } else if (element.classList.contains('element-2')) {
                element.style.transform = `translate3d(${xOffset}px, ${yOffset}px, ${zOffset}px) rotate(${45 + (x - 0.5) * 10}deg)`;
            } else if (element.classList.contains('element-3')) {
                element.style.transform = `translate3d(${xOffset}px, ${yOffset}px, ${zOffset}px) rotateX(${rotateX * 2}deg) rotateY(${rotateY * 2}deg)`;
            } else if (element.classList.contains('element-4')) {
                element.style.transform = `translate3d(${xOffset}px, ${yOffset}px, ${zOffset}px) rotate(${30 + (y - 0.5) * 20}deg)`;
            } else {
                element.style.transform = `translate3d(${xOffset}px, ${yOffset}px, ${zOffset}px)`;
            }
        });

        // Move glow effects with enhanced 3D movement
        document.querySelectorAll('.glow-effect').forEach((element, index) => {
            const speed = parseFloat(element.getAttribute('data-speed') || 0.03);
            const xOffset = (x - 0.5) * 70 * speed;
            const yOffset = (y - 0.5) * 70 * speed;
            const zOffset = (index + 1) * 10;

            if (element.classList.contains('glow-1')) {
                element.style.transform = `translate3d(${xOffset}px, ${yOffset}px, ${zOffset}px) scale(${1 + (x - 0.5) * 0.1})`;
            } else if (element.classList.contains('glow-2')) {
                element.style.transform = `translate3d(${xOffset * 1.2}px, ${yOffset * 1.2}px, ${zOffset - 10}px) scale(${1 + (y - 0.5) * 0.1})`;
            } else if (element.classList.contains('glow-3')) {
                element.style.transform = `translate3d(${xOffset * 0.8}px, ${yOffset * 0.8}px, ${zOffset - 20}px) scale(${1 + Math.abs(x - 0.5) * 0.2})`;
            } else {
                element.style.transform = `translate3d(${xOffset}px, ${yOffset}px, ${zOffset}px)`;
            }
        });

        // Move grid overlay for enhanced depth effect
        const gridOverlay = document.querySelector('.grid-overlay');
        if (gridOverlay) {
            const xRotate = (y - 0.5) * 8;
            const yRotate = (x - 0.5) * -8;
            const zTranslate = (x - 0.5) * (y - 0.5) * 100;
            gridOverlay.style.transform = `rotateX(${60 + xRotate}deg) rotateY(${yRotate}deg) translateZ(${zTranslate}px) scale(3)`;
        }

        // Subtle movement for the entire background
        const background = document.querySelector('.futuristic-background');
        if (background) {
            const xMove = (x - 0.5) * -15;
            const yMove = (y - 0.5) * -15;
            background.style.backgroundPosition = `${xMove}px ${yMove}px`;
        }

        // Move light beam with enhanced effect
        const lightBeam = document.querySelector('.light-beam');
        if (lightBeam) {
            const yPos = 50 + (y - 0.5) * 15;
            const xRotate = 80 + (y - 0.5) * 15;
            const zTranslate = 25 + (x - 0.5) * 10;
            lightBeam.style.top = `${yPos}%`;
            lightBeam.style.transform = `translateZ(${zTranslate}px) rotateX(${xRotate}deg)`;
            lightBeam.style.opacity = 0.7 + (x - 0.5) * 0.3;

            // Also move the pseudo-element
            const style = document.createElement('style');
            style.textContent = `
                .light-beam::after {
                    top: ${100 + (y - 0.5) * 50}px;
                    opacity: ${0.5 + (y - 0.5) * 0.2};
                }
            `;
            document.head.appendChild(style);

            // Remove the style element after a short delay to prevent memory leaks
            setTimeout(() => {
                document.head.removeChild(style);
            }, 100);
        }
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Enhanced 3D card effect with depth
    const cards = document.querySelectorAll('.product-card, .hero-card, .card-content');

    cards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width;
            const y = (e.clientY - rect.top) / rect.height;

            // Calculate rotation and movement with more precision
            const rotateY = (x - 0.5) * 25;
            const rotateX = (y - 0.5) * -25;
            const translateZ = 50 + (x * y) * 20; // Dynamic depth based on mouse position

            // Apply transform with smooth transition
            this.style.transform = `
                perspective(1500px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                translateZ(${translateZ}px)
                scale3d(1.05, 1.05, 1.05)
            `;

            // Add dynamic shadow based on mouse position
            this.style.boxShadow = `
                ${-rotateY}px ${rotateX}px 40px rgba(0, 0, 0, 0.4),
                0 0 30px rgba(201, 166, 100, ${0.2 + Math.abs(x - 0.5) * 0.4})
            `;

            // Create highlight effect with enhanced gradient
            const glowX = 100 * x + '%';
            const glowY = 100 * y + '%';

            // Add or update the highlight element
            let highlight = this.querySelector('.card-highlight');
            if (!highlight) {
                highlight = document.createElement('div');
                highlight.className = 'card-highlight';
                highlight.style.position = 'absolute';
                highlight.style.top = '0';
                highlight.style.left = '0';
                highlight.style.right = '0';
                highlight.style.bottom = '0';
                highlight.style.pointerEvents = 'none';
                highlight.style.borderRadius = 'inherit';
                highlight.style.transition = 'opacity 0.3s ease, background 0.3s ease';
                highlight.style.zIndex = '1';
                this.appendChild(highlight);
            }

            // Create a more sophisticated highlight effect
            highlight.style.background = `
                radial-gradient(circle at ${glowX} ${glowY},
                rgba(201, 166, 100, 0.3) 0%,
                rgba(201, 166, 100, 0.1) 30%,
                rgba(201, 166, 100, 0) 60%)
            `;
            highlight.style.opacity = '1';

            // Add edge highlight for more depth
            let edgeHighlight = this.querySelector('.card-edge-highlight');
            if (!edgeHighlight) {
                edgeHighlight = document.createElement('div');
                edgeHighlight.className = 'card-edge-highlight';
                edgeHighlight.style.position = 'absolute';
                edgeHighlight.style.top = '0';
                edgeHighlight.style.left = '0';
                edgeHighlight.style.right = '0';
                edgeHighlight.style.bottom = '0';
                edgeHighlight.style.pointerEvents = 'none';
                edgeHighlight.style.borderRadius = 'inherit';
                edgeHighlight.style.transition = 'opacity 0.3s ease';
                edgeHighlight.style.zIndex = '0';
                this.appendChild(edgeHighlight);
            }

            // Create a border glow effect
            const borderX = x > 0.5 ? '100%' : '0%';
            const borderY = y > 0.5 ? '100%' : '0%';
            edgeHighlight.style.boxShadow = `
                inset 0 0 20px rgba(201, 166, 100, ${0.1 + Math.abs(x - 0.5) * 0.3}),
                0 0 15px rgba(201, 166, 100, ${0.1 + Math.abs(y - 0.5) * 0.3})
            `;
            edgeHighlight.style.border = '1px solid rgba(201, 166, 100, 0.3)';
            edgeHighlight.style.opacity = '1';

            // Add subtle color shift based on angle
            this.style.filter = `hue-rotate(${(x - 0.5) * 5}deg) saturate(${1 + Math.abs(y - 0.5) * 0.2})`;

            // Move child elements for parallax effect
            const childElements = this.querySelectorAll('.card-header, .feature-list, .card-footer');
            childElements.forEach((el, index) => {
                const depth = (index + 1) * 5;
                el.style.transform = `translateZ(${depth}px) translateX(${(x - 0.5) * -10}px) translateY(${(y - 0.5) * -10}px)`;
            });
        });

        card.addEventListener('mouseleave', function() {
            // Reset transform with original values if they exist
            const originalTransform = this.getAttribute('data-original-transform') || '';
            this.style.transform = originalTransform;
            this.style.boxShadow = '';
            this.style.filter = '';

            // Fade out highlights
            const highlight = this.querySelector('.card-highlight');
            const edgeHighlight = this.querySelector('.card-edge-highlight');

            if (highlight) {
                highlight.style.opacity = '0';
            }

            if (edgeHighlight) {
                edgeHighlight.style.opacity = '0';
            }

            // Reset child elements
            const childElements = this.querySelectorAll('.card-header, .feature-list, .card-footer');
            childElements.forEach(el => {
                el.style.transform = '';
            });
        });

        // Store original transform if it exists
        const computedStyle = window.getComputedStyle(card);
        if (computedStyle.transform !== 'none') {
            card.setAttribute('data-original-transform', computedStyle.transform);
        }
    });

    // Create enhanced dynamic particles with 3D effect
    const createParticles = () => {
        const particles = document.querySelector('.particles');
        if (!particles) return;

        for (let i = 0; i < 30; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';

            // Random properties
            const size = Math.random() * 4 + 1;
            const posX = Math.random() * 100;
            const posY = Math.random() * 100;
            const posZ = Math.random() * 100 - 50;
            const delay = Math.random() * 5;
            const duration = Math.random() * 15 + 15;
            const color = Math.random() > 0.7
                ? 'rgba(15, 52, 96, 0.8)'
                : 'rgba(226, 201, 146, 0.8)';

            // Apply styles
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${posX}%`;
            particle.style.top = `${posY}%`;
            particle.style.opacity = Math.random() * 0.5 + 0.2;
            particle.style.background = color;
            particle.style.boxShadow = `0 0 ${size * 3}px ${color}`;
            particle.style.animationDelay = `${delay}s`;
            particle.style.animationDuration = `${duration}s`;
            particle.style.transform = `translateZ(${posZ}px)`;

            particles.appendChild(particle);
        }
    };

    // Add enhanced CSS for particles with 3D movement
    const addParticleStyles = () => {
        const style = document.createElement('style');
        style.textContent = `
            .particle {
                position: absolute;
                border-radius: 50%;
                pointer-events: none;
                animation: float3D 20s infinite linear;
                transform-style: preserve-3d;
            }

            @keyframes float3D {
                0% {
                    transform: translate3d(0, 0, 0);
                }
                25% {
                    transform: translate3d(100px, -50px, 50px);
                }
                50% {
                    transform: translate3d(200px, 0, 0);
                }
                75% {
                    transform: translate3d(100px, 50px, -50px);
                }
                100% {
                    transform: translate3d(0, 0, 0);
                }
            }
        `;
        document.head.appendChild(style);
    };

    addParticleStyles();
    createParticles();

    // Enhanced Intersection Observer for scroll animations with 3D effects
    const observeElements = () => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');

                    // Add 3D animation for sections
                    if (entry.target.tagName.toLowerCase() === 'section') {
                        entry.target.style.transform = 'translateZ(0)';
                    }
                }
            });
        }, { threshold: 0.1 });

        // Observe all sections
        document.querySelectorAll('section').forEach(section => {
            observer.observe(section);
        });

        // Observe product cards
        document.querySelectorAll('.product-card').forEach(card => {
            observer.observe(card);
        });

        // Observe footer columns for staggered animation
        document.querySelectorAll('.footer-column').forEach((column, index) => {
            column.style.transitionDelay = `${index * 0.1}s`;
            observer.observe(column);
        });
    };

    // Add enhanced CSS for scroll animations with 3D effects
    const addScrollAnimationStyles = () => {
        const style = document.createElement('style');
        style.textContent = `
            section {
                opacity: 0;
                transform: translateY(50px) translateZ(-20px);
                transition: opacity 1s ease, transform 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                transform-style: preserve-3d;
            }

            section.animate {
                opacity: 1;
                transform: translateY(0) translateZ(0);
            }

            .product-card {
                opacity: 0;
                transform: translateY(50px) translateZ(-20px);
                transition: opacity 1s ease, transform 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                transform-style: preserve-3d;
            }

            .product-card.animate {
                opacity: 1;
                transform: translateY(0) translateZ(0);
            }

            .footer-column {
                opacity: 0;
                transform: translateY(30px) translateZ(-10px);
                transition: opacity 0.8s ease, transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            }

            .footer-column.animate {
                opacity: 1;
                transform: translateY(0) translateZ(0);
            }
        `;
        document.head.appendChild(style);
    };

    addScrollAnimationStyles();
    observeElements();

    // Initialize floating elements with random speeds for more natural movement
    document.querySelectorAll('.floating-element').forEach((element, index) => {
        const baseSpeed = 0.03 + (index * 0.01);
        element.setAttribute('data-speed', (baseSpeed + Math.random() * 0.03).toString());
    });

    document.querySelectorAll('.glow-effect').forEach((element, index) => {
        const baseSpeed = 0.02 + (index * 0.005);
        element.setAttribute('data-speed', (baseSpeed + Math.random() * 0.02).toString());
    });

    // Add subtle hover effects to all interactive elements
    document.querySelectorAll('a, button, .btn').forEach(element => {
        if (!element.classList.contains('enhanced')) {
            element.classList.add('enhanced');

            element.addEventListener('mouseenter', function() {
                this.style.transform = 'translateZ(10px) scale(1.05)';
                this.style.transition = 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            });

            element.addEventListener('mouseleave', function() {
                this.style.transform = '';
            });
        }
    });

    // Add page transition effect
    const addPageTransition = () => {
        const style = document.createElement('style');
        style.textContent = `
            body {
                animation: fadeIn 1s ease-out forwards;
            }

            @keyframes fadeIn {
                from {
                    opacity: 0;
                }
                to {
                    opacity: 1;
                }
            }
        `;
        document.head.appendChild(style);
    };

    addPageTransition();

    // Handle product card flipping
    const viewDetailsBtns = document.querySelectorAll('.view-details-btn');
    const backToFrontBtns = document.querySelectorAll('.back-to-front-btn');

    viewDetailsBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const card = this.closest('.product-card-3d');
            card.style.transform = 'rotateY(180deg)';
        });
    });

    backToFrontBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const card = this.closest('.product-card-3d');
            card.style.transform = 'rotateY(0deg)';
        });
    });

    // Add custom cursor effect
    const addCustomCursor = () => {
        const cursor = document.createElement('div');
        cursor.className = 'custom-cursor';
        document.body.appendChild(cursor);

        const cursorDot = document.createElement('div');
        cursorDot.className = 'cursor-dot';
        document.body.appendChild(cursorDot);

        const style = document.createElement('style');
        style.textContent = `
            .custom-cursor {
                position: fixed;
                width: 40px;
                height: 40px;
                border: 1px solid rgba(201, 166, 100, 0.5);
                border-radius: 50%;
                pointer-events: none;
                transform: translate(-50%, -50%);
                transition: width 0.3s, height 0.3s, border-color 0.3s;
                z-index: 9999;
                mix-blend-mode: difference;
            }

            .cursor-dot {
                position: fixed;
                width: 8px;
                height: 8px;
                background: rgba(201, 166, 100, 0.8);
                border-radius: 50%;
                pointer-events: none;
                transform: translate(-50%, -50%);
                z-index: 10000;
                transition: transform 0.1s;
            }

            a, button, .btn, .product-card-wrapper, .category-btn {
                cursor: none;
            }

            a:hover ~ .custom-cursor,
            button:hover ~ .custom-cursor,
            .btn:hover ~ .custom-cursor,
            .product-card-wrapper:hover ~ .custom-cursor,
            .category-btn:hover ~ .custom-cursor {
                width: 60px;
                height: 60px;
                border-color: rgba(201, 166, 100, 0.8);
            }

            a:hover ~ .cursor-dot,
            button:hover ~ .cursor-dot,
            .btn:hover ~ .cursor-dot,
            .product-card-wrapper:hover ~ .cursor-dot,
            .category-btn:hover ~ .cursor-dot {
                transform: translate(-50%, -50%) scale(1.5);
                background: rgba(201, 166, 100, 1);
            }

            @media (max-width: 768px) {
                .custom-cursor, .cursor-dot {
                    display: none;
                }
            }
        `;
        document.head.appendChild(style);

        document.addEventListener('mousemove', function(e) {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';

            cursorDot.style.left = e.clientX + 'px';
            cursorDot.style.top = e.clientY + 'px';
        });

        document.addEventListener('mousedown', function() {
            cursor.style.transform = 'translate(-50%, -50%) scale(0.9)';
            cursorDot.style.transform = 'translate(-50%, -50%) scale(0.9)';
        });

        document.addEventListener('mouseup', function() {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            cursorDot.style.transform = 'translate(-50%, -50%) scale(1)';
        });
    };

    addCustomCursor();
});
