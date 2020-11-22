 $(document).ready(function() {
            var autoCloseCall;
            function showWindow() {
                $('#main').show();
                $('html body').css('overflow', 'hidden');
            }
            function hideWindow() {
                $('#main').hide();
            }
            // after 2s window will show automatically
            setTimeout(showWindow, 6000);

            $("#green-btn").click(function() {
                hideWindow();
                clearTimeout(autoCloseCall);
            });
     $("#red-btn").click(function() {
                hideWindow();
                clearTimeout(autoCloseCall);
          setTimeout(showWindow, 3000);
            });
            
        });
        $(function () {
            $(window).scroll(function () {
                if ($(this).scrollTop() > 200) {
                    $("#scroolUp").fadeIn();
                }
                else {
                    $("#scroolUp").fadeOut();
                }
            })
            $("#scroolUp").click(function () {
                $("html").animate({
                    scrollTop: 0
                }, 800)
            })
        })
$(document).ready(function (e) {
    $(".header__scroll--link").click(function () {
        var e = $(this.hash);
        $("html, body").animate({
            scrollTop: e.offset().top
        }, 1e3)
    }), $(".slider__main").slick({
        dots: !0,
        infinite: !0,
        arrows: !1,
        slidesToShow: 2,
        slidesToScroll: 2
    });
    var o = $(".portfolio__pictures").isotope({
        itemSelector: ".pictures__elem",
        masonry: {
            gutter: 20
        }
    });
    $(".portfolio__info--menuFilter").on("click", "a", function (e) {
        e.preventDefault();
        var i = $(this).attr("data-filter");
        o.isotope({
            filter: i
        })
    }), $("#burger").click(function (e) {
        e.stopPropagation(), $(".header__menu").slideToggle("fast", function () {
            "block" === $(this).css("display") ? ($(".header__burger").css("position", "fixed"), $(".header__burger").css("right", "9.3%")) : $(".header__burger").css("position", "unset")
        })
    })
});
