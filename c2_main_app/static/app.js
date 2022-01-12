const burger = document.querySelector('.burger');
const sidebar = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-link');
const socialIcons = document.querySelector('.social');

console.log(burger);
console.log(sidebar);





/***************************************************
**************  NAVIGATION & SIDEBAR  **************
***************************************************/

// Trigger sidebar for mobile from burger icon
burger.addEventListener('click', () => {

    if (socialIcons.style.display === 'none') {
        socialIcons.style.display = 'display';
    }
    else {
        socialIcons.style.display = 'flex';
    }

    console.log(socialIcons);


    // Bring in sidebar
    sidebar.classList.toggle('open');
    navLinks.forEach(link => {
        link.classList.toggle('fade');
    });

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