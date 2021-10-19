$(document).ready(function () {
  let currentfloor = 2;
  let btnFloorUp = $(".counter-up");
  let btnFloorDown = $('.counter-down');

  function highlightFloor(){
      let usCurrentFloor = currentfloor.toLocaleString('en-US',{minimumIntegerDigits:2, useGrouping: false}) 
      $(".counter").text(usCurrentFloor);
      $('.home-image path').removeClass('current-floor');
      $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
  }

  $(".home-image path").on('mouseover', function(){
    currentfloor = $(this).attr('data-floor');
    highlightFloor();
  })
  btnFloorUp.on('click', function(){
    if(currentfloor < 18) {
      currentfloor++;
      highlightFloor();
    }
  });
  btnFloorDown.on('click', function(){
    if(currentfloor > 2) {
      currentfloor--;
      highlightFloor();
    }
  })

});