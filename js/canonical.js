// js/canonical.js
function updateCanonical(path) {
  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }

  // ✅ Set your base domain here (non-www as per your setup)
  canonical.setAttribute('href', 'https://epep.in' + path);
}

// Optional: automatically run once on page load
document.addEventListener("DOMContentLoaded", () => {
  updateCanonical(window.location.pathname);
});