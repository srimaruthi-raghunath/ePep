
// Function to toggle visibility of the homepage <h1> and <p>
function toggleHomeContent() {
  const home = document.getElementById("homeContent");
  if (!home) return;

  // Get current path (e.g. "/", "/about", "/privacy")
  const path = window.location.pathname;

  // Show only if the path is home
  if (path === "/" || path === "/index.html") {
    home.style.display = "block";
  } else {
    home.style.display = "none";
  }
}

// Run when page loads
document.addEventListener("DOMContentLoaded", toggleHomeContent);

// Run when back/forward buttons are used
window.addEventListener("popstate", toggleHomeContent);

// Optional: Make it accessible globally so you can call it after manual navigation
window.toggleHomeContent = toggleHomeContent;
