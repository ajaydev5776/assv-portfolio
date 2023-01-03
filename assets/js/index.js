// $('.example').owlCarousel({
//     loop: true,
//     items: 9,
//     margin: 0,
//     nav: true,
//     dots: false,
//     autoplay: true,
//     center: true,
//     freeDrag: false,
//     lazyLoad: true,
//     autoplayTimeout: 2000,
//     autoplayHoverPause: true,
//     smartSpeed: 1200,
//     responsiveClass: true,
//     responsive: {
//         0: {
//             items: 3,
//             nav: false
//         },
//         500: {
//             items: 4,
//             nav: false
//         },
//         600: {
//             items: 6,
//             nav: false
//         },
//         1000: {
//             items: 7,
//             nav: true
//         },
//         1299: {
//             items: 8,
//             nav: true
//         },
//         1499: {
//             items: 9,
//             nav: true
//         }
//     },
//     navText: ["<i class='imgs img-chevron-left'></i>", "<i class='imgs img-chevron-right'></i>"]
// });


    // Example starter JavaScript for disabling form submissions if there are invalid fields
    (() => {
        'use strict'
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        const forms = document.querySelectorAll('.needs-validation')
        // Loop over them and prevent submission
        Array.from(forms).forEach(form => {
            form.addEventListener('submit', event => {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add  ('was-validated')
            }, false)
        })
    })()

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})