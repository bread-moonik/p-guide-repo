$(function () {
  //  layer_popup cookie setting 24h

  var hasTodayCookie = false;
  var hasTodayCookie02 = false;
  var hasTodayCookieMo = false;
  var currentTime = (new Date()).getTime();
  var dateOffset = (24 * 60 * 60 * 1000) * 1;
  var todayCookie = localStorage.getItem('todayCloseModal');
  var todayCookie02 = localStorage.getItem('todayCloseModal02');
  var todayCookieMo = localStorage.getItem('todayCloseModalMo');

  if (todayCookie) { // layer popup X 
    if (currentTime - todayCookie > dateOffset) {
      localStorage.removeItem('todayCloseModal');
    }
  } else if(todayCookie02){ 
    if (currentTime - todayCookie02 > dateOffset) {
      localStorage.removeItem('todayCloseModal02');
    }
  } else if(todayCookieMo){ 
    if (currentTime - todayCookieMo > dateOffset) {
      localStorage.removeItem('todayCloseModalMo');
    }
  }

  hasTodayCookie = localStorage.getItem('todayCloseModal') ? true : false;
  hasTodayCookie02 = localStorage.getItem('todayCloseModal02') ? true : false;
  hasTodayCookieMo = localStorage.getItem('todayCloseModalMo') ? true : false;

  hasTodayCookie ? $('.layer_box01').removeClass('is_active') : $('.layer_box01').addClass('is_active')
  hasTodayCookie02 ? $('.layer_box02').removeClass('is_active') : $('.layer_box02').addClass('is_active')
  hasTodayCookieMo ? $('.layer_box_mo').removeClass('is_active') : $('.layer_box_mo').addClass('is_active');
  
  // click btn_close 
  $('.layer_popup .btn_close').on('click', closeLayerPopup);

  // layerpopup close
  function closeLayerPopup() {
    $(this).closest('.layer_box').removeClass('is_active');

    document.body.classList.remove('hidden'); //body fixed 

    if (!hasTodayCookie) {
      checkedCookieBox = $('#not_today').is(':checked');
      if (checkedCookieBox) { //if checked
        localStorage.setItem('todayCloseModal', (new Date()).getTime());
      } else {
        localStorage.removeItem('todayCloseModal');
      }
    }

    if (!hasTodayCookie02) {
      checkedCookieBox02 = $('#not_today02').is(':checked');
      if (checkedCookieBox02) { //if checked
        localStorage.setItem('todayCloseModal02', (new Date()).getTime());
      } else {
        localStorage.removeItem('todayCloseModal02');
      }
    }

    if (!hasTodayCookieMo) {
      checkedCookieBoxMo = $('#not_today_mo').is(':checked');
      if (checkedCookieBoxMo) { //if checked
        localStorage.setItem('todayCloseModalMo', (new Date()).getTime());
      } else {
        localStorage.removeItem('todayCloseModalMo');
      }
    }
  }

});