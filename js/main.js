
$(document).ready(function(){
$('.slider').slick({
    dots: true,
    arrows: true,
    slidesToShow: 3,
    slidesPerRow: 1,
    rows: 2,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesPerRow: 1,
        rows: 2,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesPerRow: 1,
        rows: 1,
      }
    }
  ]
});
});
