(function () {
    var THEMES = ['default', 'gold', 'blue', 'darkblue', 'lime', 'teal', 'orange', 'berry'];
    var DARK_TEXT_THEMES = ['default'];

    function applyTheme(theme) {
        if (THEMES.indexOf(theme) === -1) theme = 'default';
        document.documentElement.setAttribute('data-color-theme', theme);
        localStorage.setItem('colorTheme', theme);
        updateLogo(theme);
        updateSwatches(theme);
    }

    function updateLogo(theme) {
        var logo = document.querySelector('.logo img');
        if (!logo) return;
        var useDark = DARK_TEXT_THEMES.indexOf(theme) !== -1;
        logo.src = useDark
            ? 'images/logo/KW-PL-BrownGold.svg'
            : 'images/logo/KW-PL-BrownWhite.svg';
    }

    function updateSwatches(theme) {
        var swatches = document.querySelectorAll('.theme-swatch');
        for (var i = 0; i < swatches.length; i++) {
            swatches[i].classList.toggle('active', swatches[i].getAttribute('data-color-theme') === theme);
        }
    }

    // Apply theme immediately to avoid flash of wrong colour
    var saved = localStorage.getItem('colorTheme') || 'default';
    document.documentElement.setAttribute('data-color-theme', saved);

    document.addEventListener('DOMContentLoaded', function () {
        applyTheme(saved);

        var swatches = document.querySelectorAll('.theme-swatch');
        for (var i = 0; i < swatches.length; i++) {
            swatches[i].addEventListener('click', function () {
                applyTheme(this.getAttribute('data-color-theme'));
            });
        }

        // Build compact dropdown for each theme-picker
        document.querySelectorAll('.theme-picker').forEach(function (picker) {
            var swatchEls = Array.from(picker.querySelectorAll('.theme-swatch'));

            // Trigger button (palette icon)
            var trigger = document.createElement('button');
            trigger.className = 'theme-picker-trigger';
            trigger.setAttribute('aria-label', 'Choose colour theme');
            trigger.innerHTML = '<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>';

            // Dropdown panel
            var dropdown = document.createElement('div');
            dropdown.className = 'theme-dropdown';
            swatchEls.forEach(function (s) { dropdown.appendChild(s); });

            picker.appendChild(trigger);
            picker.appendChild(dropdown);
        });
    });
}());
