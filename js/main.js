$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 2,
        loop: true,
        stagePadding: 100,
        autoplay: true,
        autoplayTimeout: 850,
        autoplayHoverPause: true,
        mergeFit: true,
        dotsEach: true,
        center: true,
        autoWidth: true,

        responsive: {
            0: {
                items: 1,
                margin: 50,
                stagePadding: 50,
                nav: false,
            },
            768: {
                items: 1,
            },
            992: {
                items: 1,
            },
            1200: {
                items: 8,
            }
        }
    });

});

\