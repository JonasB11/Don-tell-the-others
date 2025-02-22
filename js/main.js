// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Navigation Toggle with Animation
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
            
            // Animate hamburger to X
            const spans = this.getElementsByTagName('span');
            if (this.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
            navToggle.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });

    // Smooth Scrolling with Offset
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = 100;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu
                navToggle.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    });

    // Optimized Parallax Effect
    let lastKnownScrollPosition = 0;
    let ticking = false;
    const hero = document.querySelector('.hero');

    if (hero) {
        window.addEventListener('scroll', function() {
            lastKnownScrollPosition = window.pageYOffset;
            if (!ticking) {
                window.requestAnimationFrame(function() {
                    if (window.innerWidth > 768) { // Only apply parallax on desktop
                        hero.style.transform = `translateY(${lastKnownScrollPosition * 0.3}px)`;
                    }
                    ticking = false;
                });
                ticking = true;
            }
        });
    }

    // Improved Intersection Observer
    const observerOptions = {
        threshold: 0.2,
        rootMargin: "0px 0px -10% 0px"
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.album, .tour-date, .section-title').forEach(el => {
        el.classList.add('fade-out'); // Initial state
        observer.observe(el);
    });

    // Enhanced Form Handling
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const button = this.querySelector('button');
            if (button && !button.disabled) {
                const originalText = button.innerHTML;
                button.disabled = true;
                button.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
                
                // Simulate form submission
                setTimeout(() => {
                    button.innerHTML = '<i class="fas fa-check"></i> Gesendet!';
                    this.reset();
                    
                    setTimeout(() => {
                        button.innerHTML = originalText;
                        button.disabled = false;
                    }, 2000);
                }, 1500);
            }
        });
    });

    // Improved Navbar Background
    const navbar = document.querySelector('.navbar');
    let scrollTimeout;

    if (navbar) {
        window.addEventListener('scroll', function() {
            if (scrollTimeout) {
                window.cancelAnimationFrame(scrollTimeout);
            }

            scrollTimeout = window.requestAnimationFrame(function() {
                if (window.scrollY > 50) {
                    navbar.style.background = 'rgba(18, 18, 18, 0.95)';
                    navbar.style.padding = '1rem';
                } else {
                    navbar.style.background = 'rgba(18, 18, 18, 0.7)';
                    navbar.style.padding = '1.5rem';
                }
            });
        });
    }
});

// Newsletter Form Submission
document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Danke für deine Anmeldung! (Demo)');
    this.reset();
}); 