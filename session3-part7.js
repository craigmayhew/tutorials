

  /*do something cool, but only when the page is fully loaded*/
  $(document).ready(function() {
    /*activate the jquery plugin called bxSlider*/
    $('.bxslider').bxSlider({
      mode: 'fade',
      captions: true,
      slideMargin: 10,
      adaptiveHeight: true
    });
  });
