window.addEventListener("DOMContentLoaded", function(){
    // Mobile menu
    const toggleButton = this.document.querySelector(".navbar__mobile-menu-toggle");
    const mobileMenu = this.document.querySelector(".navbar__mobile-menu-items");

    toggleButton.addEventListener("click", function(){
        mobileMenu.classList.toggle("active");
    });

    // Video modal

    const modal = this.document.getElementById("videoModal");
    const videoButton = this.document.querySelector(".preview__video-button");
    const closeButton = this.document.querySelector(".modal__close-button");
    const videoPlayer = this.document.getElementById("videoPlayer")

    // Open modal when clicked
    videoButton.addEventListener("click", function(){
        // Show modal
        modal.style.display = block;

        // Replace src attribute with video url
        videoPlayer.src = "https://www.youtube.com/embed/8sXRyHI3bLw"

        // Close modal
        closeButton.addEventListener("click", function(){
            modal.style.display = "none";
            videoPlayer.src = "";
        });
    });


});

// Navigation background on scroll
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
