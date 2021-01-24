let navbar_navbar = document.querySelector('.navbar_navbar');
let navbar_navbarContainer = document.querySelector(".navbar_navbar-container")

window.addEventListener('scroll', () => {
    if (window.scrollY > 150) {
        navbar_navbar.classList.add('navbar_fixed');
    }
    else {
        navbar_navbar.classList.remove('navbar_fixed');
    }

})

setTimeout(() => {
    navbar_navbarContainer.style.height = `${navbar_navbar.clientHeight}px`
}, 200)
