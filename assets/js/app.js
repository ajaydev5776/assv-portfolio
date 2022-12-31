// Active navbar on scroll
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll <= 80) {
        $("nav.navbar").removeClass("nav-active");
    } else {
        $("nav.navbar").addClass("nav-active");
    }
});


$(document).ready(function () {
    $('.preloader').addClass('active');
});




// active header for other pages
if (!$(".hero-section").length) {
    $('nav.navbar').addClass('always-nav-active');
};







// Lazy Load Images
document.addEventListener("DOMContentLoaded", function () {
    let lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
    let active = false;

    const lazyLoad = function () {
        if (active === false) {
            active = true;

            setTimeout(function () {
                lazyImages.forEach(function (lazyImage) {
                    if (
                        lazyImage.getBoundingClientRect().top <= window.innerHeight &&
                        lazyImage.getBoundingClientRect().bottom >= 0 &&
                        getComputedStyle(lazyImage).display !== "none"
                    ) {
                        lazyImage.src = lazyImage.dataset.src;
                        lazyImage.srcset = lazyImage.dataset.srcset;
                        lazyImage.classList.remove("lazy");

                        lazyImages = lazyImages.filter(function (image) {
                            return image !== lazyImage;
                        });

                        if (lazyImages.length === 0) {
                            document.removeEventListener("scroll", lazyLoad);
                            window.removeEventListener("resize", lazyLoad);
                            window.removeEventListener("orientationchange", lazyLoad);
                        }
                    }
                });

                active = false;
            }, 200);
        }
    };

    document.addEventListener("scroll", lazyLoad);
    window.addEventListener("resize", lazyLoad);
    window.addEventListener("orientationchange", lazyLoad);
});


$(document).ready(function () {
    window.scrollBy(0, 1);
});


// preloder

let loading = document.getElementById("prelodaer");
function myfunction(){
    loading.style.display = "none";
}




var swiper = new Swiper(".user_slider", {
    grabCursor: true,
    effect: "creative",
    mousewheel: true,
    loop: true,
    creativeEffect: {
        prev: {
            shadow: true,
            translate: [0, 0, -400],
        },
        next: {
            translate: ["100%", 0, 0],
        },
    },
});
var swiper = new Swiper(".user_slider1", {
    // grabCursor: true,
    // effect: "creative",
    mousewheel: true,
    loop: true,
    creativeEffect: {
        prev: {
            shadow: true,
            translate: [0, 0, -400],
        },
        next: {
            translate: ["100%", 0, 0],
        },
    },
});


var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
return new bootstrap.Tooltip(tooltipTriggerEl)
})