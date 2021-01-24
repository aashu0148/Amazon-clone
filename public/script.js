let navbar_navbar = document.querySelector('.navbar_navbar');

window.addEventListener('scroll', () => {
    if(window.scrollY > 74){
        navbar_navbar.classList.add('navbar_fixed');
    }
    else{
        navbar_navbar.classList.remove('navbar_fixed');
    }

    })
    
