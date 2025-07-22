document.addEventListener("DOMContentLoaded", function () {
    var path = window.location.pathname.toLowerCase();
    var routes = {
        "/privacy": "/privacy.html",
        "/terms": "/terms.html",
        "/aboutus": "/aboutus.html"
    };

    if (routes[path]) {
        window.location.replace(routes[path]);
    } else {
        // Optionally show a custom 404 message
        document.body.innerHTML = "<h1>404 - Page Not Found</h1>";
    }
});
