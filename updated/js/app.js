let sidebarDelay = 200;


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

    if (window.innerWidth > 825) {
        sidebarDelay = 0;
    } else {
        closeSidebar();
        sidebarDelay = 200;
    }

    setTimeout(() => {
        var target = $($(this).attr('href'));
        if (target.length) {
            var scrollTo = target.offset().top;
            $('html, body').animate({
                scrollTop: scrollTo + 'px'
            }, 1250);
        }
    }, sidebarDelay)


});

function toggleSidebar(hamburger) {
    var sidebarElem = window.document.getElementById("sidebar");
    sidebarElem.classList.toggle("open");
    hamburger.classList.toggle("open");
}

function closeSidebar() {
    var sidebarElem = window.document.getElementById("sidebar");
    var hamburger = window.document.getElementById("hamburger");
    sidebarElem.classList.remove("open");
    hamburger.classList.remove("open");
}