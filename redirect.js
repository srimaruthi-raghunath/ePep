// document.addEventListener("DOMContentLoaded", function () {
//     var path = window.location.pathname.toLowerCase();

//     if (window.location.pathname.includes("404.html")) return;

//     var routes = {
//         "/privacy": "/privacy.html",
//         "/terms": "/terms.html",
//         "/aboutus": "/aboutus.html"
//     };

//     if (routes[path]) {
//         window.location.replace(routes[path]);
//     } else {
//         if (path !== "/" && path !== "/index.html") {
//             window.location.replace("/");
//         }
//     }
// });

// redirect.js
// document.addEventListener("DOMContentLoaded", function () {
//     const path = window.location.pathname.toLowerCase();

//     const routes = {
//         "/": "home",
//         "/aboutus": "aboutus",
//         "/privacy": "privacy",
//         "/terms": "terms"
//     };

//     if (routes[path]) {
//         navigate(routes[path]);
//         history.replaceState(null, "", path); // Clean URL without hash
//     } else if (path !== "/404.html") {
//         window.location.replace("/404.html");
//     }
// });

// // This should already be in your main JS
// function navigate(section, event) {
//     if (event) event.preventDefault();

//     const sections = ['home', 'aboutus', 'privacy', 'terms'];

//     sections.forEach(id => {
//         document.getElementById(id).style.display = (id === section) ? 'block' : 'none';
//     });

//     history.pushState(null, "", "/" + section); // Updates the URL
// }

document.addEventListener("DOMContentLoaded", function () {
    const path = window.location.pathname.toLowerCase();

    const routes = {
        "/aboutus": "/aboutus.html",
        "/privacy": "/privacy.html",
        "/terms": "/terms.html"
    };

    if (routes[path]) {
        window.location.replace(routes[path]);
    }
});