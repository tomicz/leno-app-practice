window.addEventListener("DOMContentLoaded", function(){
    const toggleButton = this.document.querySelector(".navbar__mobile-menu-toggle");
    const mobileMenu = this.document.querySelector(".navbar__mobile-menu-items");

    toggleButton.addEventListener("click", function(){
        mobileMenu.classList.toggle("active");
    });
});

window.addEventListener("scroll", function(){
    const scrollY = window.scrollY; 
    const navbar = this.document.querySelector(".navbar");
    
    if(scrollY > 0){
        navbar.classList.add("navbar--scroll");
    }
    else{
        navbar.classList.remove("navbar--scroll");
    }

    console.log(navbar);
});
