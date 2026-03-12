// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    
    // ================================
    // Create Mobile Navigation
    // ================================
    if (menuToggle && !document.querySelector('.mobile-nav')) {
        createMobileNav();
    }
    
    // Toggle mobile menu
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            toggleMobileMenu();
        });
    }
    
    function createMobileNav() {
        // Create mobile nav overlay
        const mobileNav = document.createElement('div');
        mobileNav.className = 'mobile-nav';
        
        // Create nav content
        const navContent = document.createElement('nav');
        navContent.className = 'mobile-nav-content';
        
        // Create close button
        const closeBtn = document.createElement('button');
        closeBtn.className = 'mobile-nav-close';
        closeBtn.innerHTML = '×';
        closeBtn.setAttribute('aria-label', 'Close menu');
        
        // Create nav links
        const navLinks = document.createElement('ul');
        navLinks.className = 'mobile-nav-links';
        
        // Add links
        const links = [
            { text: 'Works', href: 'index.html' },
            { text: 'About', href: 'about.html' },
            { text: 'Contact', href: 'contact.html' },
            { text: 'Resume', href: 'files/KailaWongResume.pdf', target: '_blank' }
        ];
        
        links.forEach(link => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.textContent = link.text;
            a.href = link.href;
            if (link.target) {
                a.target = link.target;
            }
            a.addEventListener('click', function() {
                closeMobileMenu();
            });
            li.appendChild(a);
            navLinks.appendChild(li);
        });
        
        // Assemble the mobile nav
        navContent.appendChild(closeBtn);
        navContent.appendChild(navLinks);
        mobileNav.appendChild(navContent);
        document.body.appendChild(mobileNav);
        
        // Close button functionality
        closeBtn.addEventListener('click', function() {
            closeMobileMenu();
        });
        
        // Close when clicking outside
        mobileNav.addEventListener('click', function(e) {
            if (e.target === mobileNav) {
                closeMobileMenu();
            }
        });
    }
    
    function toggleMobileMenu() {
        const mobileNav = document.querySelector('.mobile-nav');
        const menuToggle = document.querySelector('.menu-toggle');
        
        if (mobileNav.classList.contains('active')) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    }
    
    function openMobileMenu() {
        const mobileNav = document.querySelector('.mobile-nav');
        const menuToggle = document.querySelector('.menu-toggle');
        
        mobileNav.classList.add('active');
        menuToggle.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    function closeMobileMenu() {
        const mobileNav = document.querySelector('.mobile-nav');
        const menuToggle = document.querySelector('.menu-toggle');
        
        mobileNav.classList.remove('active');
        menuToggle.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                const target = document.querySelector(href);
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // ================================
    // Skills Box Toggle (Homepage)
    // ================================
    const skillsBox = document.querySelector('.skills-box');
    
    if (skillsBox) {
        skillsBox.addEventListener('click', function() {
            this.classList.toggle('expanded');
        });
    }
    
    // ================================
    // Clickable Items - Lightbox Functionality
    // ================================
    const clickableItems = document.querySelectorAll('.clickable-item, .thumbnail-item');
    
    clickableItems.forEach(item => {
        item.addEventListener('click', function() {
            const img = this.querySelector('img');
            if (img) {
                createLightbox(img.src, img.alt);
            }
        });
    });
    
    // ================================
    // Lightbox Modal Creation
    // ================================
    function createLightbox(imageSrc, imageAlt) {
        let lightbox = document.getElementById('lightbox');
        
        if (!lightbox) {
            // Create lightbox
            lightbox = document.createElement('div');
            lightbox.id = 'lightbox';
            lightbox.className = 'lightbox';
            
            const lightboxContent = document.createElement('div');
            lightboxContent.className = 'lightbox-content';
            
            const closeBtn = document.createElement('span');
            closeBtn.className = 'lightbox-close';
            closeBtn.innerHTML = '×';
            closeBtn.onclick = function() {
                lightbox.classList.remove('active');
                setTimeout(() => {
                    lightbox.style.display = 'none';
                }, 300);
            };
            
            const img = document.createElement('img');
            img.className = 'lightbox-image';
            
            lightboxContent.appendChild(closeBtn);
            lightboxContent.appendChild(img);
            lightbox.appendChild(lightboxContent);
            document.body.appendChild(lightbox);
            
            // Close on background click
            lightbox.addEventListener('click', function(e) {
                if (e.target === lightbox) {
                    lightbox.classList.remove('active');
                    setTimeout(() => {
                        lightbox.style.display = 'none';
                    }, 300);
                }
            });
            
            // Add lightbox styles
            addLightboxStyles();
        }
        
        // Show lightbox with image
        const lightboxImage = lightbox.querySelector('.lightbox-image');
        lightboxImage.src = imageSrc;
        lightboxImage.alt = imageAlt;
        lightbox.style.display = 'flex';
        setTimeout(() => {
            lightbox.classList.add('active');
        }, 10);
    }
    
    // ================================
    // Add Lightbox Styles
    // ================================
    function addLightboxStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .lightbox {
                display: none;
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0);
                z-index: 1000;
                align-items: center;
                justify-content: center;
                transition: background-color 0.3s ease;
            }
            
            .lightbox.active {
                background-color: rgba(0, 0, 0, 0.9);
            }
            
            .lightbox-content {
                position: relative;
                max-width: 90%;
                max-height: 90vh;
                opacity: 0;
                transform: scale(0.8);
                transition: opacity 0.3s ease, transform 0.3s ease;
            }
            
            .lightbox.active .lightbox-content {
                opacity: 1;
                transform: scale(1);
            }
            
            .lightbox-image {
                max-width: 100%;
                max-height: 90vh;
                display: block;
                border-radius: 4px;
            }
            
            .lightbox-close {
                position: absolute;
                top: -40px;
                right: 0;
                color: white;
                font-size: 40px;
                font-weight: bold;
                cursor: pointer;
                transition: opacity 0.3s ease;
            }
            
            .lightbox-close:hover {
                opacity: 0.7;
            }
            
            @media (max-width: 768px) {
                .lightbox-content {
                    max-width: 95%;
                }
                
                .lightbox-close {
                    top: -35px;
                    font-size: 35px;
                }
            }
        `;
        document.head.appendChild(style);
    }
});

