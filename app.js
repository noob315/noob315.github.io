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

function detectTouchDevice() {
    if ('ontouchstart' in window || navigator.maxTouchPoints) {
        document.body.classList.add('touch-device');
    } else {
        document.body.classList.remove('touch-device');
    }
}
detectTouchDevice();