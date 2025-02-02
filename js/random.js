// // Function to generate a random string
// function generateRandomText() {
//     return Math.random().toString(36).substring(2, 8);  // Generates a random string
// }

// // Function to change the URL dynamically
// function changeUrl() {
//     const randomText = generateRandomText();
//     const newUrl = '/page/' + randomText;  // Define the structure of the random URL
//     window.history.pushState({}, '', newUrl);  // This changes the URL without reloading the page

//     // Load content dynamically based on the new URL (optional)
//     loadContent(newUrl);
// }

// // Function to load content based on the new URL (optional)
// function loadContent(url) {
//     const contentDiv = document.getElementById('content');

//     // Example of dynamically loading content based on the URL
//     if (url.includes('random-text')) {
//         contentDiv.innerHTML = '<h2>This is a new random page!</h2>';
//     } else {
//         contentDiv.innerHTML = '<h2>Welcome to my homepage!</h2>';
//     }
// }

// // Automatically change the URL when the page loads
// window.onload = function() {
//     changeUrl();
// };
