function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

$(document).ready(function () {
    
    /* ===========Explore-Buttons-Script=========*/

    $('#show-more-btn').on('click', function () {
        $('.card-hidden').removeClass('hidden');
    });

    $('#show-less-btn').on('click', function () {
        $('.card-hidden').fadeOut(800, function () {
            $(this).addClass('hidden');
        });
    });

    /* ===========Things-to-do-buttons-Script=========*/

    $('.things-btn').on('click', function () {
        $('.things-btn,.all-btn').removeClass('all-btn').removeClass('after-click-btn');
        $(this).removeClass('things-btn,all-btn').addClass('after-click-btn');
    });

    function openCity(event, cityName) {
        $(' .things-cards').hide()
        $('.things-btn').removeClass('active');

        $("#" + cityName).show();
        $(event.currentTarget).addClass("active");
    }

    openCity({}, "all");

    $(".things-btn").click(function (event) {
        openCity(event, $(this).data("city"), "things");
    });

     /* ===========Fotter-Script=========*/

    $(".dropdown-btn").click(function () {
        $(this).next(".dropdown-content").toggle();
    });

    AOS.init({
        duration: 800,
        once: true
    })

});