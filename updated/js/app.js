$(".nav-item a").click(e => {
    $(".active").toggleClass("active");
    e.currentTarget.classList.toggle("active");
})

window.addEventListener("scroll", e => {
    if(window.scrollY > 100) {
        $("nav").addClass("background");
    } else {
        $("nav").removeClass("background");
    }
})