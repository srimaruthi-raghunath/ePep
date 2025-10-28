// WhatsApp Floating Button Functionality
// Opens WhatsApp channel link in a new tab when clicked, except when the close button is clicked.
document.addEventListener("DOMContentLoaded", () => {
  const whatsappFloat = document.getElementById('whatsappFloat');

  if (!whatsappFloat) return; // safety check if element not loaded yet

  whatsappFloat.addEventListener('click', function(event) {
    // Only redirect when not clicking the close button
    if (!event.target.classList.contains('close-btn')) {
      window.open('https://whatsapp.com/channel/0029Vb7JMSj96H4JIfrCfy2H', '_blank');
    }
  });
});

function closeWhatsApp() {
  const float = document.getElementById('whatsappFloat');
  if (float) float.style.display = 'none';
}
