new WOW().init();
const slideContainer = document.getElementById('slides');

$('#slider').slick({
    infinite: false,
    vertical:true,
    verticalSwiping:true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $('.top-arrow'),
    nextArrow: $('.bottom-arrow'),
    dots: true
  });

  var dotNums = document.querySelectorAll(".slick-dots button");

  function removeText(item) {
    item.innerHTML = ""; // or put the text you need inside quotes
  }

  dotNums.forEach(removeText);