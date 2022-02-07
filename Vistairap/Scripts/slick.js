$(document).ready(function () {

    $('.items').slick({
        infinite: true,
        speed: 300,
        prevArrow: false,
        nextArrow: false,
        dots: true,
        variableWidth: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            ]
    });

    $(".textslide").slick(
        {
            infinite: true,
            speed: 300,
            prevArrow: false,
            nextArrow: false,
            dots: true,
            adaptiveHeight: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,

        }
    );
});