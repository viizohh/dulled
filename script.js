// Get overlay elements
const contactOverlay = document.getElementById('contact');
const insidePagesOverlay = document.getElementById('insidePages');
const purposeOverlay = document.getElementById('purpose');
const mainImage = document.querySelector('.main-image');
const imageWrapper = document.querySelector('.image-wrapper');

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
function returnToHome(event) {
    // Only return home if clicking on the image itself, not the studs
    if (isViewingInsidePage && event.target === mainImage) {
        mainImage.src = 'Copy of Untitled (1).png';
        isViewingInsidePage = false;
    }
}

// Add click handler to image wrapper
imageWrapper.addEventListener('click', returnToHome);
