$(document).ready(function () {
  let currentfloor = 2;
  const btnFloorUp = $(".counter-up");
  const btnFloorDown = $('.counter-down');
  const dlgModal = $('.modal');
  const btnSearchFlat = $('.button-primary');
  const pathFloor =  $(".home-image path");
  const btnModalClose = $('.modal-dialog-close');
  const pathFlat = $('.flats path');
  const btnFlat = $('.flat-link');
  const btnMenu = $('.menu-button');
  const pnlNavBar = $('.navbar-panel');

  btnMenu.on('click', function(){
    pnlNavBar.toggle("fast");//показать скрыть
  })

  pathFloor.on('mouseover', function(){
    currentfloor = $(this).attr('data-floor');
    highlightFloor();
  })
  pathFloor.on('click', function(){
    openDialog();
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
  btnSearchFlat.on('click', function(){
    openDialog();
  })
  btnModalClose.on('click', function(){
    closeDialog();
  });
  pathFlat.on('mouseover', function(){
    let currentflat = $(this).attr('data-flat');
    $(this).css( 'opacity', 1 );
   // $('.flat-list a').removeClass('isChooseFlat');
     $(`.flat-link.flat-${currentflat}`).toggleClass('isChooseFlat');
  })
  pathFlat.on('mouseout', function(){
    let currentflat = $(this).attr('data-flat');
      $(this).css( 'opacity', 0 );
     $(`.flat-link.flat-${currentflat}`).removeClass('isChooseFlat');
  })
  btnFlat.on('mouseover', function(){
    let currentflat = $(this).attr('class').slice(-2);
    $('.flats path').css( 'opacity', 0 );
    $(`[data-flat=${currentflat}]`).css( 'opacity', 1 );
;
  })

  function openDialog(){
    dlgModal.toggleClass("is-open");
  }  
  function closeDialog(){
    dlgModal.removeClass("is-open");
  }
  function highlightFloor(){
      let usCurrentFloor = currentfloor.toLocaleString('en-US',{minimumIntegerDigits:2, useGrouping: false}) 
      $(".counter").text(usCurrentFloor);
      $('.home-image path').removeClass('current-floor');
      $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
  }

});