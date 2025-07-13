document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    const preloader = document.querySelector('.preloader');
    window.addEventListener('load', function() {
        preloader.style.opacity = '0';
        preloader.style.visibility = 'hidden';
    });

    // Typing Animation
    const typed = new Typed('.typed', {
        strings: ['Web Developer', 'UI/UX Designer', 'Freelancer'],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // Header Scroll Effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav ul');
    const navItems = document.querySelectorAll('.nav ul li a');

    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    navItems.forEach(item => {
        item.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Back to Top Button
    const backToTop = document.querySelector('.back-to-top');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTop.classList.add('active');
        } else {
            backToTop.classList.remove('active');
        }
    });

    // Current Year in Footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // Skills Progress Animation
    const progressLines = document.querySelectorAll('.progress-line');
    const skillsSection = document.querySelector('.skills');

    function animateProgressBars() {
        progressLines.forEach(line => {
            const width = line.parentElement.previousElementSibling.lastElementChild.textContent;
            line.style.width = width;
        });
    }

    // Animate progress bars when skills section is in view
    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateProgressBars();
                skillsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    skillsObserver.observe(skillsSection);

    // About Stats Counter Animation
    const statNumbers = document.querySelectorAll('.stat-number');
    const aboutSection = document.querySelector('.about');

    function animateStats() {
        statNumbers.forEach(number => {
            const target = parseInt(number.getAttribute('data-count'));
            const speed = 200;
            const count = parseInt(number.textContent);
            const increment = target / speed;

            if (count < target) {
                number.textContent = Math.ceil(count + increment);
                setTimeout(animateStats, 1);
            } else {
                number.textContent = target + '+';
            }
        });
    }

    // Animate stats when about section is in view
    const aboutObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStats();
                aboutObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    aboutObserver.observe(aboutSection);

    // Projects Filter
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');

            const filter = this.getAttribute('data-filter');

            projectItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        // Here you would typically send the form data to a server
        // For demonstration, we'll just log it and show an alert
        console.log({ name, email, subject, message });
        alert('Thank you for your message! I will get back to you soon.');
        
        // Reset form
        contactForm.reset();
    });

    // Scroll Reveal Animation
    const sr = ScrollReveal({
        origin: 'top',
        distance: '60px',
        duration: 1000,
        delay: 200,
        reset: true
    });

    sr.reveal('.section-title, .hero-content .subtitle, .hero-content .title, .hero-content .typing-text, .hero-content .hero-btns, .hero-content .social-links, .hero-image', {
        interval: 200
    });

    sr.reveal('.about-image, .about-text h3, .about-text p, .about-info, .about-stats', {
        origin: 'left',
        interval: 200
    });

    sr.reveal('.skills-text, .skills-progress', {
        origin: 'right',
        interval: 200
    });

    sr.reveal('.projects-filter, .project-item', {
        interval: 200
    });

    sr.reveal('.timeline-item', {
        interval: 200
    });

    sr.reveal('.contact-info, .contact-form', {
        interval: 200
    });
});