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
    });
}());
