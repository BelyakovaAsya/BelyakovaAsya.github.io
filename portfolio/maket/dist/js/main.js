$(function() {

    $('.header__btn-menu').on('click', function() {
        $('.menu').toggleClass('menu--open');
    });

    $('.top__slider').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoplay: true
    });
    $('.contact-slider').slick({
        slidesToShow: 8,
        slidesToScroll: 8,
        dots: true,
        arrows: false,
        responsive: [{
                breakpoint: 1511,
                settings: {
                    slidesToShow: 7,
                    slidesToScroll: 7
                }
            },
            {
                breakpoint: 1201,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 6
                }
            },
            {
                breakpoint: 841,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 551,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 426,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
        ]
    });
    $('.article-slider__box').slick({
        autoplay: true,
        prevArrow: '<button type"button" class="slick-prev article-slider__arrowleft"><img src="icons/arrow-left.svg" alt="arrow-left"></button>',
        nextArrow: '<button type"button" class="slick-prev article-slider__arrowright"><img src="icons/arrow-right.svg" alt="arrow-right"></button>'
    });



    var mixer = mixitup('.gallery__inner', {
        load: {
            filter: '.living'
        }
    });

});
