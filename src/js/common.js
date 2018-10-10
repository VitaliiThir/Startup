$(function () {

// Slider
    $("#owl-about_us").owlCarousel({
        nav: true,
        navSpeed: 1500,
        autoplaySpeed: 3000,
        autoplayTimeout: 5000,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            }
        },
        margin: 30,
        dots: false,
        loop: true,
        autoplay: true,
        pagination: false,
        navText: ["", ""],
        theme: "theme"
    });
    var arrowPrev = $('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="8" height="14" viewBox="0 0 8 14"><defs><path id="2vzda" d="M252 1910.16a.46.46 0 0 0-.14-.32l-.68-.7a.47.47 0 0 0-.32-.14.47.47 0 0 0-.32.14l-6.4 6.54a.49.49 0 0 0-.14.32c0 .11.05.24.14.32l6.4 6.54c.09.08.2.14.32.14.1 0 .23-.06.32-.14l.68-.7a.49.49 0 0 0 .14-.32.49.49 0 0 0-.14-.33l-5.4-5.51 5.4-5.51a.49.49 0 0 0 .14-.33z"/></defs><g><g transform="translate(-244 -1909)"><use fill="#ddd" xlink:href="#2vzda"/></g></g></svg>');
    var arrowNext = $('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="8" height="14" viewBox="0 0 8 14"><defs><path id="xzwva" d="M1347 1921.84c0 .12.05.23.14.32l.68.7c.09.08.21.14.32.14.11 0 .23-.06.32-.14l6.4-6.54a.49.49 0 0 0 .14-.32.49.49 0 0 0-.14-.32l-6.4-6.54a.47.47 0 0 0-.32-.14.47.47 0 0 0-.32.14l-.68.7a.49.49 0 0 0-.14.32c0 .12.05.24.14.33l5.4 5.51-5.4 5.51a.49.49 0 0 0-.14.33z"/></defs><g><g transform="translate(-1347 -1909)"><use fill="#ddd" xlink:href="#xzwva"/></g></g></svg>');
    $('.theme .owl-prev').append($(arrowPrev));
    $('.theme .owl-next').append($(arrowNext));

    // Latest works nav
    $('.latest-nav li').on('click', function () {
        $(this).each(function () {
            if ($('.latest-nav li').hasClass('active')) {
                $('.latest-nav li').removeClass('active').not(this);
            }
        })
    });


    // Mix It Up
    $('#mix-row').mixItUp();

    // Reviews Slider
    $("#reviews-slider").owlCarousel({
        nav: true,
        navSpeed: 1500,
        autoplaySpeed: 3000,
        autoplayTimeout: 5000,
        items: 1,
        margin: 30,
        dots: false,
        loop: true,
        autoplay: true,
        pagination: false,
        navText: ["", ""],
        theme: "theme-2"
    });

    // Lesson
    $(window).on("scroll", function () {
        let winScrollTop = $(this).scrollTop();
        if (winScrollTop > 0) {
            $('.top-header').addClass('top-header--fixed').css('position', 'fixed');
        }else {
            $('.top-header').removeClass('top-header--fixed').css('position', 'absolute');
        }
    });
    let os = new OnScreen({
        tolerance: 200,
        debounce: -200,
        container: window
    });
    os.on('enter', '.fadeShow', (element, event) => {
        element.style.opacity = '1';
    });
    os.on('leave', '.fadeShow', (element, event) => {
        element.style.opacity = '0';
    });
});


