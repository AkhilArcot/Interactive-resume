document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    for (let link of links) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            let target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // Toggle side menu visibility
    const menuButton = document.getElementById('menu-button');
    const sideMenu = document.getElementById('side-menu');
    let menuOpen = false;

    menuButton.addEventListener('click', function() {
        if (menuOpen) {
            sideMenu.style.left = '-250px';
        } else {
            sideMenu.style.left = '0';
        }
        menuOpen = !menuOpen;
    });
});
