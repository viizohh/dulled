// Get overlay elements
const contactOverlay = document.getElementById('contact');
const insidePagesOverlay = document.getElementById('insidePages');
const purposeOverlay = document.getElementById('purpose');
const mainImage = document.querySelector('.main-image');
const mainContainer = document.querySelector('.main-container');

// Track state
let isViewingInsidePage = false;

// Hide all overlays
function hideAllOverlays() {
    contactOverlay.classList.remove('visible');
    purposeOverlay.classList.remove('visible');
}

// Show contact
function showContact(event) {
    event.stopPropagation();
    // Hide all other overlays first
    purposeOverlay.classList.remove('visible');

    // Toggle contact
    contactOverlay.classList.toggle('visible');
}

// Show inside pages
function showInsidePages(event) {
    event.stopPropagation();
    // Hide all overlays
    hideAllOverlays();

    // Change background to inside page
    mainImage.src = 'insidepage.png';
    isViewingInsidePage = true;
}

// Show purpose
function showPurpose(event) {
    event.stopPropagation();
    // Hide all other overlays first
    contactOverlay.classList.remove('visible');

    // Toggle purpose
    purposeOverlay.classList.toggle('visible');
}

// Return to home screen
function returnToHome() {
    if (isViewingInsidePage) {
        mainImage.src = 'Copy of Untitled (1).png';
        isViewingInsidePage = false;
    }
}

// Add click handler to entire page
mainContainer.addEventListener('click', returnToHome);
