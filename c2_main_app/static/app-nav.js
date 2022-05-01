const burger = document.querySelector('.burger');
const sidebar = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-link');
const socialIcons = document.querySelector('.social');
const successMessage = document.getElementById('success-msg');

if (successMessage) {
    const closeMessage = document.getElementById('close');
    closeMessage.addEventListener('click', e => {
        successMessage.classList.add("fade-out");
        setTimeout(() => {successMessage.style.display = 'none'}, 1200);
    })
};


/***************************************************
**************  NAVIGATION & SIDEBAR  **************
***************************************************/

function toggleSidebar() {
    sidebar.classList.toggle('open');
    navLinks.forEach(link => {
        link.classList.toggle('fade');
    });
}

// Trigger sidebar for mobile from burger icon
burger.addEventListener('click', () => {

    if (socialIcons.style.display === 'none') {
        socialIcons.style.display = 'display';
    }
    else {
        socialIcons.style.display = 'flex';
    }

    console.log(socialIcons);

    toggleSidebar();

    // Trigger burger animation
    burger.classList.toggle('burger-state');
})

function goTo(id) {
    let destination = document.querySelector(id);
    let yCoord = destination.offsetTop -182;
    window.scrollTo({
        top: yCoord,
        behaviour: "smooth"
    });
    
    if (sidebar.classList.contains('open')) {
        toggleSidebar();
        burger.classList.toggle('burger-state');
    }
}