// Motion Graphics Interactive Features
document.addEventListener('DOMContentLoaded', function() {
    // ================================
    // Video Control Enhancement
    // ================================
    const videos = document.querySelectorAll('video');

    videos.forEach(video => {
        // Ensure videos autoplay and loop
        video.setAttribute('autoplay', '');
        video.setAttribute('loop', '');
        video.setAttribute('playsinline', '');
        // Only force-mute videos that don't have a sound toggle
        if (!video.id || video.id !== 'beware-video') {
            video.setAttribute('muted', '');
        }

        // Play video on load (some browsers need this)
        video.play().catch(error => {
            console.log('Autoplay prevented:', error);
        });

        // Optional: Add click to pause/play functionality
        video.addEventListener('click', function() {
            if (this.paused) {
                this.play();
            } else {
                this.pause();
            }
        });
    });

    // ================================
    // Beware Video Mute Toggle
    // ================================
    const bewareVideo = document.getElementById('beware-video');
    const muteBtn = document.getElementById('beware-mute-btn');

    if (bewareVideo && muteBtn) {
        muteBtn.addEventListener('click', function(e) {
            e.stopPropagation(); // don't trigger the play/pause click
            bewareVideo.muted = !bewareVideo.muted;
            muteBtn.classList.toggle('is-unmuted', !bewareVideo.muted);
            muteBtn.setAttribute('aria-label', bewareVideo.muted ? 'Unmute video' : 'Mute video');
            muteBtn.setAttribute('title', bewareVideo.muted ? 'Unmute' : 'Mute');
        });
    }
    
    // ================================
    // Thumbnail Click to Expand
    // ================================
    const thumbnails = document.querySelectorAll('.thumbnail-item');
    
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            const img = this.querySelector('img');
            if (img) {
                // Create a modal/lightbox effect
                createLightbox(img.src, img.alt);
            }
        });
    });
    
    // ================================
    // Lightbox Modal for Thumbnails
    // ================================
    function createLightbox(imageSrc, imageAlt) {
        // Check if lightbox already exists
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
    // Add Lightbox Styles Dynamically
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
    
    // ================================
    // Smooth Scroll for Anchor Links
    // ================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // ================================
    // Intersection Observer for Video Playback
    // ================================
    // Pause videos when they're out of view to save performance
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const videoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const video = entry.target;
            if (entry.isIntersecting) {
                video.play().catch(error => {
                    console.log('Video play prevented:', error);
                });
            } else {
                video.pause();
            }
        });
    }, observerOptions);
    
    videos.forEach(video => {
        videoObserver.observe(video);
    });
});

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
            { text: 'Contact', href: 'contact.html' }
        ];
        
        links.forEach(link => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.textContent = link.text;
            a.href = link.href;
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
});
