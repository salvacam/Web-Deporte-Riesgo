window.addEventListener("load", function () {
    var num = parseInt(window.innerHeight);
    $(".imagen").on('mouseenter', function (e) {
        if (num > 719 && parseInt(window.innerWidth) > 1024) {
            $(this).find(".texto").slideDown();
        }
    });

    $(".imagen").on('mouseleave', function (e) {
        if (num > 719 && parseInt(window.innerWidth) > 1024) {
            $(this).find(".texto").slideUp();
        }
    });

    $(pull).on('click', function (e) {
        e.preventDefault();
        $('#menu-nav').slideToggle();
    });

    if (parseInt(window.innerWidth) > 700) {
        $(".imagen").on('click', function () {
            var id = $(this).data("modal");
            $("#" + id).slideToggle();
            $("#container").slideToggle();
            window.location = "#cajaLogo";
        });

        $(".cerrar").on('click', function (e) {
            var id = $(this).data("modal");
            $(this).closest(".oculto").slideToggle();
            $("#container").slideToggle();
            $(".video").each(function (e) {
                $(this)[0].pause();
                $(this).parent().toggleClass("pla");
                $(this).next().removeClass("hidden");
            })
        });
    }

    $(".video").on("click", function (e) {
        if ($(this)[0].paused != false) {
            $(this)[0].play();
            $(this).parent().toggleClass("pla");
            $(this).next().addClass("hidden");
        } else {
            $(this)[0].pause();
            $(this).parent().toggleClass("pla");
            $(this).next().removeClass("hidden");
        }
    });
    $(".play").on("click", function (e) {
        if ($(this).prev()[0].paused != false) {
            $(this).prev()[0].play();
            $(this).parent().toggleClass("pla");
            $(this).addClass("hidden");
        } else {
            $(this).prev()[0].pause();
            $(this).parent().toggleClass("pla");
            $(this).removeClass("hidden");
        }
    });
});