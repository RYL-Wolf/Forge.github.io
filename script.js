// Set the default mode to dark
document.body.classList.add('dark-mode');
document.body.classList.remove('light-mode');
document.querySelector('#input').checked = true; // Set toggle to on (dark mode)

// Toggle between dark and light modes
document.querySelector("#input").addEventListener('change', function () {
    if (this.checked) {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
        localStorage.setItem('mode', 'dark'); // Save dark mode preference
    } else {
        document.body.classList.add('light-mode');
        document.body.classList.remove('dark-mode');
        localStorage.setItem('mode', 'light'); // Save light mode preference
    }
});

// Check if there's a saved preference in localStorage and apply it
if (localStorage.getItem('mode') === 'light') {
    document.body.classList.add('light-mode');
    document.body.classList.remove('dark-mode');
    document.querySelector('#input').checked = false; // Set toggle to off (light mode)
}

// Handle hamburger menu toggle
const hamburger = document.querySelector('#Hamburgericon'); // Correct the ID reference
const menu = document.querySelector('#dropdownMenu'); // Correct the ID reference

hamburger.addEventListener('click', function () {
    menu.classList.toggle('active');
});
        document.addEventListener("contextmenu", function (e) {
            e.preventDefault();
            alert("Sorry Gotta Keep Our Code Safe <3");
        });

        // Disable F12 (DevTools)
        document.onkeydown = function(e) {
            if (e.keyCode == 123) {  // F12 key
                e.preventDefault();
                alert("Sorry Gotta Keep Our Code Safe <3");
            }
            // Disable Ctrl+Shift+I (DevTools)
            if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
                e.preventDefault();
                alert("Sorry Gotta Keep Our Code Safe <3");
            }
        };
