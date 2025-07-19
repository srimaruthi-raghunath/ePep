document.addEventListener("DOMContentLoaded", function () {
    var path = window.location.pathname.toLowerCase();

    // Define valid routes and their actual HTML files
    var routes = {
        "/privacy": "/privacy.html",
        "/terms": "/terms.html",
        "/aboutus": "/aboutus.html"
    };

    // Redirect if the path exists in the routes object
    if (routes[path]) {
        window.location.replace(routes[path]);
    } else {
        // Automatically redirect user to home page if route is not found
        window.location.replace("https://www.epep.in");
    }
});
