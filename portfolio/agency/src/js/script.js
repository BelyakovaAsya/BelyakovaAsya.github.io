window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
        menuItem = document.querySelectorAll('.menu_item'),
        hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active', );
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active', 'body');
            menu.classList.toggle('menu_active');
        });
    });
});

$(function() {

    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
            $('#scroll_top').fadeIn();
        } else {
            $('#scroll_top').fadeOut();
        }
    });
    $('#scroll_top').click(function() {
        $('body,html').animate({ scrollTop: 0 }, 400);
        return false;
    });

});