// script.js
const logoTrack = document.getElementById('logoTrack');
const randomText = document.getElementById('randomText');

// Duplicate the logos dynamically
function duplicateLogos() {
  const logos = Array.from(logoTrack.children); // Get all existing logos
  logos.forEach(logo => {
    const clonedLogo = logo.cloneNode(true); // Clone each logo
    logoTrack.appendChild(clonedLogo); // Append the cloned logo to the container
  });
}

duplicateLogos();
generateRandomText();
