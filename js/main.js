// Linked AOS library allows to animate different blocks of webpage
AOS.init(); 

$(document).ready(function () {
    $('.main__partners-img-wrapper').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 2,
        arrows: false,
    });
})


