const burger = document.querySelector('.burger');
const sidebar = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-link');

console.log(burger);

/***************************************************
**************  NAVIGATION & SIDEBAR  **************
***************************************************/

// Prevent sidebar triggering on window resizes
let resizeTimer;
window.addEventListener('resize', () => {
    document.body.classList.add('resize-animation-stopper');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove('resize-animation-stopper');
    }, 400);
});

// Trigger sidebar for mobile from burger icon
burger.addEventListener('click', () => {

    // Bring in sidebar
    sidebar.classList.toggle('sidebar-active');

    // Trigger burger animation
    burger.classList.toggle('burger-state');
})

function goTo(id) {
    let destination = document.querySelector(id);
    let yCoord = destination.offsetTop -100;
    window.scrollTo({
        top: yCoord,
        behaviour: "smooth"
    });
    sidebar.classList.remove("sidebar-active")
    burger.classList.toggle('burger-state');
}