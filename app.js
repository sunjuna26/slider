$(function(){
    $('.parent').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        prevArrow: '<span class="right"><i class="fa-solid fa-arrow-right"></i></span>',
        nextArrow: '<span class="left"><i class="fa-solid fa-arrow-left"></i></span>'
      });
});