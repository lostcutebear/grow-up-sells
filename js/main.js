// Linked AOS library allows to animate different blocks of webpage
AOS.init(); 

$(document).ready(function () {
    $('.main__partners-img-wrapper').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1
    });
})


