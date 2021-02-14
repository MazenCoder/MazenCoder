$(document).ready(function () {

    'use strict';

    // ---------------------
    // :: Navbar Link On Hover
    // ---------------------

    var linkArray = $(".js-dropdown-links .dropdown-link")
    if (linkArray.length >= 1) {
        linkArray.each(function (i) {
            $(linkArray[i]).hover(function () {
                var linkPosition = $(linkArray[i]).position();
                var linkHeight = $(linkArray[i]).outerHeight();
                var hoverState = $('.js-hover-state');

                hoverState.css({
                    'opacity': 1,
                    'top': linkPosition.top + 'px',
                    'height': linkHeight + 'px'
                })
            })

            $(linkArray[i]).mouseleave(function () {
                var hoverState = $('.js-hover-state');

                hoverState.css({
                    'opacity': 0,
                    'top': 0
                })
            })
        })
    }

    $('.dropdown-toggle').on('mouseover mouseleave', function () {
        $('.dropdown-menu').toggleClass('in');

        if ($('.dropdown-menu').hasClass('in')) {
            $(this).parent().addClass('dropdown-in')
        } else {
            $(this).parent().removeClass('dropdown-in')
        }
    });

    $('.dropdown-menu').on('mouseenter mouseleave', function () {
        $('.dropdown-menu').toggleClass('in');

        if ($('.dropdown-menu').hasClass('in')) {
            $(this).parent().addClass('dropdown-in')
        } else {
            $(this).parent().removeClass('dropdown-in')
        }
    });

    // ---------------------
    // :: Add Class On Window Scroll
    // ---------------------

    $(window).on('scroll', function () {
        if ($(".navbar").offset().top > 50) {
            $(".navbar").addClass("nav-scroll");
        } else {
            $(".navbar").removeClass("nav-scroll");
        }
    });


    // ---------------------
    // :: Smoothscroll Link
    // ---------------------

    $('#home a').on('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 50);
        event.preventDefault();
    });

    /* ========================================================================= */
    /*  Change Photo On Mobile Services
    /* ========================================================================= */

    $('.phone-slide').owlCarousel({
        loop: true,
        margin: 0,
        dots: false,
        rtl: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    /* Change Button */

    var b = $(".phone-slide"),
        k = $(".nav-catch li");
    b.on('changed.owl.carousel', function (event) {
        var n = (event.item.index + 1) - event.relatedTarget._clones.length / 2;
        var o = event.item.count;
        if (n > o || n == 0) {
            n = o - (n % o);
        }

        (n > o || 0 == n) && (n = o - n % o), n--;
        var t = $(".nav-catch li:nth(" + n + ")");
        a(t)

    }), k.on("click", function () {
        var e = $(this).data("owl-item");
        b.trigger("to.owl.carousel", e), a($(this));
    });

    function a(e) {
        k.removeClass("active-icon");
        e.addClass("active-icon");
    }

    /* Change Text */
    var b = $(".phone-slide"),
        i = $(".mobile-pane");
    b.on('changed.owl.carousel', function (event) {
        var h = (event.item.index + 1) - event.relatedTarget._clones.length / 2;
        var v = event.item.count;
        if (h > v || h == 0) {
            h = v - (h % v);
        }

        (h > v || 0 == h) && (h = v - h % v), h--;
        var w = $(".mobile-pane:nth(" + h + ")");
        c(w)

    }), $(".nav-catch li").on("click", function () {
        return false;
        var y = $(this).data("owl-item");
        b.trigger("to.owl.carousel", y), c($(".mobile-pane"));
    });

    function c(y) {
        i.removeClass("active");
        y.addClass("active");
    }

    // ---------------------
    // :: Statistics Counter
    // ---------------------

    $('.counter-value').each(function () {
        $(this).appear(function () {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 4000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        }, {
            accX: 0,
            accY: 0
        });
    });

    $('.followers-number').each(function () {
        $(this).appear(function () {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 2000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        }, {
            accX: 0,
            accY: 0
        });
    });

    // ---------------------
    // :: Testimonials
    // ---------------------

    if ($(".persons-box").length) {
        var closeCon = $(".persons-box");
        var iconsPlace = closeCon.children();
        iconsPlace.each(function () {
            var iconOne = $(this);
            var iconSize = iconOne.attr("data-iconSize");
            iconOne.css({
                'width': 10 * iconSize + "px",
                'height': 10 * iconSize + "px",
            });
        });
    }

    // ---------------------
    // :: Change Text in Testimonials
    // ---------------------
    $('.testimonial-slider').owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        rtl: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        mouseDrag: false,
        dots: false,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    /* Change Button */

    var s = $(".testimonial-slider"),
        q = $(".callimg");
    s.on('changed.owl.carousel', function (event) {
        var m = (event.item.index + 1) - event.relatedTarget._clones.length / 2;
        var p = event.item.count;
        if (m > p || m == 0) {
            m = p - (m % p);
        }

        (m > p || 0 == m) && (m = p - m % p), m--;
        var w = $(".callimg:nth(" + m + ")");
        x(w)

    }), q.on("click", function () {
        var f = $(this).data("owl-item");
        s.trigger("to.owl.carousel", f), x($(this));
    });

    function x(f) {
        q.removeClass("active-person");
        f.addClass("active-person");
    }

    // ---------------------
    // :: Screenshots
    // ---------------------
    var swiper = new Swiper('.swiper-screenshots', {
        loop: true,
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        autoplay: true,
        slidesPerView: 'auto',
        spaceBetween: 70,
        disableOnInteraction: false,
        coverflowEffect: {
            rotate: 20,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
        }
    });

    // ---------------------
    // :: Header Phone Slider
    // ---------------------
    $('.header-phone-slider').owlCarousel({
        loop: true,
        margin: 0,
        rtl: true,
        autoplay: true,
        dots: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    // ---------------------
    // :: Header Parallax
    // ---------------------

    var $layerParallax = $('.layer-parallax');
    if (!Modernizr.touch) {
        if ($layerParallax.length > 0) {
            $layerParallax.parallax();
        }
    }

    // ---------------------
    // :: Back To Top Button
    // ---------------------

    $(window).on('scroll', function () {
        if ($(this).scrollTop() >= 800) {
            $("#scroll-top").addClass("show");
        } else {
            $("#scroll-top").removeClass("show");
        }
    });
    $("#scroll-top").on('click', function () {
        $("html, body").animate({
            scrollTop: 0
        }, 50);
    });

    // End
});

// ---------------------
// :: Preloader & VanillaTilt
// ---------------------

$(window).on("load", function () {
    $('body').css('overflow-y', 'visible');
    $(".loader").fadeOut(function () {
        $("#loading-mask").fadeOut("slow");
    });
    if ($(window).width() > 991) {
        VanillaTilt.init(document.querySelectorAll(".about-box"), {
            max: 25,
            speed: 400
        });
        VanillaTilt.init(document.querySelectorAll(".post-img"), {
            max: 25,
            speed: 400
        });
    }
});