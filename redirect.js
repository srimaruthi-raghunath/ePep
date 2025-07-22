document.addEventListener("DOMContentLoaded", function () {
    var path = window.location.pathname.toLowerCase();

    if (window.location.pathname.includes("404.html")) return;

    var routes = {
        "/privacy": "/privacy.html",
        "/terms": "/terms.html",
        "/aboutus": "/aboutus.html"
    };

    if (routes[path]) {
        window.location.replace(routes[path]);
    } else {
        if (path !== "/" && path !== "/index.html") {
            window.location.replace("/");
        }
    }
});
