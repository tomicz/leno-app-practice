window.addEventListener("DOMContentLoaded", function(){
    const toggleButton = this.document.querySelector(".navbar__mobile-menu-toggle");
    const mobileMenu = this.document.querySelector(".navbar__mobile-menu-items");

    toggleButton.addEventListener("click", function(){
        mobileMenu.classList.toggle("active");
    });
});