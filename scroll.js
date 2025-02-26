// JavaScript Document
const heroSection = document.getElementById("heroSection");
const heroVideo = document.getElementById("heroVideo");

window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;
    const heroHeight = heroSection.offsetHeight;
    const scrollPercentage = Math.min(scrollPosition / heroHeight, 1);

    // Adjust border-radius and height for smooth transition
    heroSection.style.borderRadius = `${Math.max(20 - scrollPercentage * 20, 0)}px`;
    heroSection.style.height = `${Math.max(500 - scrollPercentage * 200, 300)}px`; // Shrinks height smoothly

    // Ensure it fully expands once scrolled past
    if (scrollPosition >= heroHeight) {
        heroSection.style.borderRadius = "0px";
        heroSection.style.height = "300px"; // Final fixed height
    }

    // Play/pause video when in/out of view
    if (scrollPosition > heroHeight / 2) {
        heroVideo.play();
    } else {
        heroVideo.pause();
    }
});
