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





