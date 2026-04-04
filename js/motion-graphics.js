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
