// Zavře burger menu po kliknutí na odkaz
document.querySelectorAll('#menu a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('menu-toggle').checked = false;
    });
});

// Kliknutí na projekt kontejner přesměruje na link
document.querySelectorAll('.projContainer').forEach(container => {
    container.addEventListener('click', (e) => {
        // Pokud uživatel klikl přímo na odkaz, nech ho fungovat normálně
        if (e.target.tagName === 'A' || e.target.closest('a')) {
            return;
        }
        // Jinak přesměruj na data-link
        const link = container.getAttribute('data-link');
        if (link) {
            window.location.href = link;
        }
    });
    // Přidej cursor pointer pro celý kontejner
    container.style.cursor = 'pointer';
});