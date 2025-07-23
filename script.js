// function navigate(section) {
//   const sections = ['home', 'about', 'privacy', 'terms'];

//   sections.forEach(id => {
//     document.getElementById(id).style.display = (id === section) ? 'block' : 'none';
//   });
// }


// function navigate(section, event) {
//   if (event) event.preventDefault(); // Prevent URL from changing

//   const sections = ['home', 'about', 'privacy', 'terms'];

//   sections.forEach(id => {
//     document.getElementById(id).style.display = (id === section) ? 'block' : 'none';
//   });
// }


// Clean URL from index.html if present
if (window.location.pathname.endsWith("index.html")) {
  const cleanPath = window.location.pathname.replace("index.html", "");
  window.history.replaceState({}, document.title, cleanPath + window.location.hash);
}

function navigate(section, event) {
  if (event) event.preventDefault(); // Prevent URL from changing

  const sections = ['home', 'about', 'privacy', 'terms'];

  sections.forEach(id => {
    document.getElementById(id).style.display = (id === section) ? 'block' : 'none';
  });
}
