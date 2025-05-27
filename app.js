const navbar = document.querySelector('.navbar_item_with_ig');
const closeButton = document.querySelector('.close-btn a');
const toggleButton = document.querySelector('.toggle a');
const navLinks = document.querySelectorAll('.navbar_item a'); // Corrected selector with a dot (.)

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

// Scroll to corresponding section on navbar item click
navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor behavior
        const targetId = this.getAttribute('href').substring(1); // Get the target section ID
        const targetSection = document.getElementById(targetId); // Find the target section
        if (targetSection) {
            const navbarHeight = document.querySelector('header').offsetHeight; // Get navbar height
            const targetPosition = targetSection.offsetTop - navbarHeight; // Adjust for navbar height
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth' // Smooth scrolling
            });
        }
        navbar.classList.remove('active'); // Close the menu after clicking
    });
});



