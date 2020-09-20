$(function(){

  $('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="images/right-arrow.svg" alt=""></div><div class="quantity-button quantity-down"><img src="images/left-arrow.svg" alt=""></div></div>').insertAfter('.quantity input');
  $('.quantity').each(function() {
    var spinner = $(this),
      input = spinner.find('input[type="number"]'),
      btnUp = spinner.find('.quantity-up'),
      btnDown = spinner.find('.quantity-down'),
      min = input.attr('min'),
      max = input.attr('max');

    btnUp.click(function() {
      var oldValue = parseFloat(input.val());
      if (oldValue >= max) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue + 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

    btnDown.click(function() {
      var oldValue = parseFloat(input.val());
      if (oldValue <= min) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue - 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

  });

  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 8,
    spaceBetween: 7,
    mousewheel: true,
    direction: 'vertical',
    speed: 150,
    breakpoints: {
      1367: {
        slidesPerView: 11,
        spaceBetween: 7,
      },
      1921: {
        slidesPerView: 14,
        spaceBetween: 7,
      },
    }
    
  });

});