$(".nav-item a").click(e => {
    $(".active").toggleClass("active");
    e.currentTarget.classList.toggle("active");
})

window.addEventListener("scroll", e => {
    if (window.scrollY > 100) {
        $("nav").addClass("background");
    } else {
        $("nav").removeClass("background");
    }

    if (window.scrollY < 900) {
        $(".header").css("background-position-y", window.scrollY / 1.25);
        $("#logo").css("transform", `translateY(${-window.scrollY / 2}px)`);
        $("#header-text").css("transform", `translateY(${-window.scrollY / 2}px)`);
    }
})

/* Smooth Srolling Code from Julia Hide on Codepen */

$('.nav-link').click(function (e) {
    e.preventDefault();
    var target = $($(this).attr('href'));
    if (target.length) {
        var scrollTo = target.offset().top;
        $('html, body').animate({
            scrollTop: (scrollTo - 50) + 'px'
        }, 1250);
    }
});