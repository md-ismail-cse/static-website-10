/*=============================================
                Preloader
===============================================*/
$(window).on('load', function () {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut();
});

/*=============================================
                Wow
===============================================*/
$(function () {
    new WOW().init();
});

/*=============================================
                Home
===============================================*/
$(function () {
    $("#home-slider").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
});

/* =========================================
                About Progress Bar
============================================ */

/* Bar Progress */
$(function () {
    $("#about-progress-bar").waypoint(function () {
        $(".progress-bar").each(function () {
            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 2000);
        });
        this.destroy();
    }, {
        offset: 'bottom-in-view'
    });
});
/* Number Progress */
$(function () {
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
});

/*=============================================
                Team
===============================================*/
$(function () {
    $("#team-members").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1
            },
            // breakpoint from 480 up
            481: {
                items: 2
            },
            // breakpoint from 480 up
            767: {
                items: 3
            }
        }
    });
});

/* Team Parallax */
$(function () {
    $("#team-parallax-items").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: false,
        dots: true
    });
});

/*=============================================
                Portfolio
===============================================*/
$(window).on('load', function () {

    // Initialize Isotope
    $("#portfolio-container").isotope({});

    // filter items on button click
    $("#portfolio-filters").on('click', 'button', function () {

        // get filter value
        var filterValue = $(this).attr('data-filter');

        // filter portfolio
        $("#portfolio-container").isotope({
            filter: filterValue
        });

        // active button
        $("#portfolio-filters").find('.active').removeClass('active');
        $(this).addClass('active');
    });
});
/* Portfolio View */
$(function () {
    $('.portfolio-open').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});

/*=============================================
                Twiest
===============================================*/
$(function () {
    $("#twiest-slider").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
});

/*=============================================
                Testimonial
===============================================*/
$(function () {
    $("#testimonial-slider").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
});

/*=============================================
                Navigation
===============================================*/
// Show / Hide navigation
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() < 50) {
            $("nav").removeClass("site-top-nav");
            $("#back-to-top").fadeOut();
        } else {
            $("nav").addClass("site-top-nav");
            $("#back-to-top").fadeIn();
        }
    });
});

// Smooth scrolling
$(function () {
    $("a.smooth-scroll").click(function (event) {
        event.preventDefault();
        var section = $(this).attr("href");
        $('html, body').animate({
            scrollTop: $(section).offset().top - 60
        }, 1250);
    });
});
// Close mobile menu on click
$(function () {
    $(".navbar-collapse ul li a").on("click touch", function () {
        $(".navbar-toggle").click();
    });
});