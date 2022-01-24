jQuery(document);
$(function($) {
    $('html, body').scrollTop($(document).height());

    $("#scroll-top > button").on("click", function(e) {
        var body = $("html, body");
        body.stop().animate({ scrollTop: 0 }, 500, "swing");
    });

    $('input[name=phone]').mask("+7(999) 999-99-99");

    $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('form').trigger('reset');
        });
        return false;
    });
});