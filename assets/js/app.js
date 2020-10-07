new WOW().init();
const slideContainer = document.getElementById('slides');

$('#slider').slick({
  infinite: false,
  vertical: true,
  verticalSwiping: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: $('.top-arrow'),
  nextArrow: $('.bottom-arrow'),
  dots: true
});

$('#slider-2').slick({
  infinite: false,
  adaptiveHeight:true,
  rtl:true,
  slidesToShow: 4,
  slidesToScroll: 4,
  prevArrow:false,
  nextArrow: false,
  dots: true
});
var dotNums = document.querySelectorAll(".slick-dots button");

function removeText(item) {
  item.innerHTML = ""; // or put the text you need inside quotes
}

dotNums.forEach(removeText);