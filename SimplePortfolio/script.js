// Smooth scrolling for navigation links
function smoothScroll(target) {
    document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
}

// Highlight skill buttons on hover
function highlightSkill(button) {
    button.style.backgroundColor = "#5a6970";
}

function removeHighlight(button) {
    button.style.backgroundColor = "#35424a";
}

// Toggle visibility of additional details
function showMoreDetails() {
    const details = document.getElementById('more-details');
    if (details.style.display === 'none') {
        details.style.display = 'block';
    } else {
        details.style.display = 'none';
    }
}
