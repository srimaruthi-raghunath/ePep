// document.addEventListener("DOMContentLoaded", function () {
//     const path = window.location.pathname.toLowerCase();

//     const routes = {
//         "/aboutus": "/aboutus.html",
//         "/privacy": "/privacy.html",
//         "/terms": "/terms.html"
//     };

//     if (routes[path]) {
//         window.location.replace(routes[path]);
//     }
// });


document.addEventListener("DOMContentLoaded", function () {
    function navigateTo(path) {
        history.pushState(null, null, path);
        route();
    }

    async function route() {
        const routes = {
            "/": "/pages/home.html",
            "/index.html": "/pages/home.html", // Add this line
            "/aboutus": "/pages/aboutus.html",
            "/privacy": "/pages/privacy.html",
            "/terms": "/pages/terms.html"
        };

        const path = window.location.pathname;
        const htmlPath = routes[path] || "/pages/404.html";

        const res = await fetch(htmlPath);
        const data = await res.text();
        document.getElementById("content").innerHTML = data;
    }

    document.body.addEventListener("click", (e) => {
        if (e.target.matches("a[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.getAttribute("href"));
        }
    });

    window.addEventListener("popstate", route);
    route();
});