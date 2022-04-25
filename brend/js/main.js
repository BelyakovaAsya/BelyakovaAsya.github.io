$(function() {

    $('.header__btn').on('click', function() {
        $('.rightside-menu').removeClass('rightside-menu--close');
    });
    $('.rightside-menu__close').on('click', function() {
        $('.rightside-menu').addClass('rightside-menu--close');
    });
    $('.top__slider').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoplay: true
    });
    $('.contact-slider').slick({
        slidesToShow: 10,
        slidesToScroll: 10,
        dots: true,
        arrows: false,
    });
    $('.article-slider__box').slick({
        prevArrow: '<button type"button" class="slick-prev article-slider__arrowleft"><img src="img/arrow-left.svg" alt="arrow-left"></button>',
        nextArrow: '<button type"button" class="slick-prev article-slider__arrowright"><img src="img/arrow-right.svg" alt="arrow-right"></button>'
    });


    var mixer = mixitup('.gallery__inner', {
        load: {
            filter: '.living'
        }
    });

});