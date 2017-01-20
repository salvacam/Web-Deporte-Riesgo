window.addEventListener("load", function () {
    $('.bxslider').bxSlider({
        auto: true,
        controls: true,
        pager: false,
        adaptiveHeight: true
    });
    

    var flecha = document.getElementById("flechaAbajo");
    var num = parseInt(window.innerHeight);
    if (num < 800 || parseInt(window.innerWidth) < 1024) {
        flecha.setAttribute("hidden", "");
    } else {
        var numFlecha = 75;
        window.addEventListener("scroll", function () {
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

            if (scrollTop > numFlecha) {
                flecha.setAttribute("hidden", "");
            } else {
                flecha.removeAttribute("hidden");
            }
        });
    }
    
    $(pull).on('click', function(e) {
        e.preventDefault();
        $('#menu-nav').slideToggle();
    });
});