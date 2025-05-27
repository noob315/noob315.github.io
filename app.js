const navbar = document.querySelector('.navbar_item_with_ig');
const closeButton = document.querySelector('.close-btn a');
const toggleButton = document.querySelector('.toggle a');

// Open the menu
toggleButton.addEventListener('click', function (e) {
    e.preventDefault();
    navbar.classList.add('active');
    navbar.classList.add('transition-enabled');
});

// Close the menu
closeButton.addEventListener('click', function (e) {
    e.preventDefault();
    navbar.classList.add('transition-enabled');
    navbar.classList.remove('active');
});

document.querySelectorAll('navbar_item a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
    });
});

function detectTouchDevice() {
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
        document.body.classList.add('touch-device');
    } else {
        document.body.classList.remove('touch-device');
    }
}

// Run the detection on page load
detectTouchDevice();

// Optional: Re-run detection if the window is resized
window.addEventListener('resize', detectTouchDevice);
