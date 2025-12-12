// document.addEventListener("DOMContentLoaded", function () {
//     function navigateTo(path) {
//         history.pushState(null, null, path);
//         route();
//     }

//     async function route() {
//         const routes = {
//             "/": "/pages/home.html",
//             "/index.html": "/pages/home.html",
//             "/aboutus": "/pages/aboutus.html",
//             "/privacy": "/pages/privacy.html",
//             "/terms": "/pages/terms.html"
//         };

//         const path = window.location.pathname;
//         const htmlPath = routes[path] || "/pages/404.html";

//         const res = await fetch(htmlPath);
//         const data = await res.text();
//         document.getElementById("content").innerHTML = data;
//     }

//     document.body.addEventListener("click", (e) => {
//         if (e.target.matches("a[data-link]")) {
//             e.preventDefault();
//             navigateTo(e.target.getAttribute("href"));
//         }
//     });

//     window.addEventListener("popstate", route);
//     route();
// });

document.addEventListener("DOMContentLoaded", function () {
    function navigateTo(path) {
        history.pushState(null, null, path);
        route();
    }

    async function route() {
        const routes = {
            "/": "/pages/home.html",
            "/index.html": "/pages/home.html",
            "/aboutus": "/pages/aboutus.html",
            "/privacy": "/pages/privacy.html",
            "/terms": "/pages/terms.html"
        };

        const path = window.location.pathname;
        const htmlPath = routes[path] || "/pages/404.html";

        const res = await fetch(htmlPath);
        let data = await res.text();
        
        // Remove header and footer tags to prevent duplication when loaded via SPA router
        // (pages have their own header/footer for direct visits, but we strip them for SPA navigation)
        data = data.replace(/<header[^>]*>[\s\S]*?<\/header>/gi, '');
        data = data.replace(/<footer[^>]*>[\s\S]*?<\/footer>/gi, '');
        
        document.getElementById("content").innerHTML = data;

        // 👇 ADD THIS LINE HERE 👇, This line will hide the index welcom content
        toggleHomeContent(); 

        // ✅ Update canonical after page content is loaded
        updateCanonical(path);
    }

    // Intercept SPA links (those with data-link) and navigate via the router.
    // However, treat some routes as standalone pages (full reload) so they are served
    // as individual pages with their own header/footer (e.g., /aboutus, /privacy, /terms).
    const standaloneRoutes = new Set(["/aboutus", "/privacy", "/terms"]);

    document.body.addEventListener("click", (e) => {
        if (!e.target.matches("a[data-link]")) return; // ignore non-SPA links

        const href = e.target.getAttribute("href");
        if (standaloneRoutes.has(href)) {
            // For standalone routes do a full page navigation (not SPA).
            return; // let the browser handle the click normally (no preventDefault)
        }

        // SPA navigation for everything else
        e.preventDefault();
        navigateTo(href);
    });

    window.addEventListener("popstate", route);
    route();
});

// Adde below like in route function after fetching content
// document.getElementById("content").innerHTML = data;

// 👇 Add this line here
// toggleHomeContent();
