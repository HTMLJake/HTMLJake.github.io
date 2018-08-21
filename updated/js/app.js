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

    if(window.scrollY < 900) {
        $(".header").css("background-position-y", window.scrollY / 1.25);
        $("#logo").css("transform", `translateY(${-window.scrollY / 2}px)`);
        $("#header-text").css("transform", `translateY(${-window.scrollY / 2}px)`);
    }
})


$("a").on('click', function(event) {
    event.preventDefault();

    let hash = event.currentTarget.hash;

    if (hash != '' && $(hash).position()) {
        window.scrollTo({
            top: $(hash).position().top,
            behavior: "smooth"
        })

    } else {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
});