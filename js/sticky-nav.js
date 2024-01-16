window.addEventListener("scroll", function(){
    var stikHeader = document.querySelector(".header");
    stikHeader.classList.toggle("sticky", this.window.scrollY > 450);
})