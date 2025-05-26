const navbar = document.querySelector('.navbar_item_with_ig');
const closeButton = document.querySelector('.close-btn a');
const toggleButton = document.querySelector('.toggle a');
const dropdownParents = document.querySelectorAll('.navbar_item li'); // Parent items with dropdowns

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

// Handle dropdown visibility on touch devices
dropdownParents.forEach(parent => {
    parent.addEventListener('click', function (e) {
        // Prevent default behavior
        e.stopPropagation();

        // Close all other dropdowns
        dropdownParents.forEach(item => {
            if (item !== parent) {
                const dropdown = item.querySelector('.dropdown');
                if (dropdown) {
                    dropdown.style.visibility = 'hidden';
                    dropdown.style.opacity = '0';
                    dropdown.style.transform = 'translateY(-10px)';
                }
            }
        });

        // Toggle the clicked dropdown
        const dropdown = parent.querySelector('.dropdown');
        if (dropdown) {
            const isVisible = dropdown.style.visibility === 'visible';
            dropdown.style.visibility = isVisible ? 'hidden' : 'visible';
            dropdown.style.opacity = isVisible ? '0' : '1';
            dropdown.style.transform = isVisible ? 'translateY(-10px)' : 'translateY(0)';
        }
    });
});

// Close dropdowns when clicking outside
document.addEventListener('click', function (e) {
    const isClickInsideNavbar = navbar.contains(e.target);
    const isClickInsideToggle = toggleButton.contains(e.target);

    if (!isClickInsideNavbar && !isClickInsideToggle) {
        dropdownParents.forEach(parent => {
            const dropdown = parent.querySelector('.dropdown');
            if (dropdown) {
                dropdown.style.visibility = 'hidden';
                dropdown.style.opacity = '0';
                dropdown.style.transform = 'translateY(-10px)';
            }
        });
    }
});

function detectTouchDevice() {
    if ('ontouchstart' in window || navigator.maxTouchPoints) {
        document.body.classList.add('touch-device');
    } else {
        document.body.classList.remove('touch-device');
    }
}
detectTouchDevice();