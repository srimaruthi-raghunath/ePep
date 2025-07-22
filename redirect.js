document.addEventListener("DOMContentLoaded", function () {
    var path = window.location.pathname.toLowerCase();

    // Avoid redirecting from the 404 page itself
    if (window.location.pathname.includes("404.html")) {
        return;
    }

    var routes = {
        "/privacy": "/privacy.html",
        "/terms": "/terms.html",
        "/aboutus": "/aboutus.html"
    };

    if (routes[path]) {
        window.location.replace(routes[path]);
    } else {
        // Only redirect to home if it's not already the homepage
        if (path !== "/" && path !== "/index.html") {
            window.location.replace("https://www.epep.in");
        }
    }
});
