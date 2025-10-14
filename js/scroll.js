function scrollToLang(id) {
  // Find the language section and scroll to center of viewport
  const section = document.getElementById(id);
  if (!section) return;

  const rect = section.getBoundingClientRect();
  const offset = window.scrollY + rect.top - (window.innerHeight / 2) + (rect.height / 2);

  window.scrollTo({
    top: offset,
    behavior: 'smooth'
  });
}