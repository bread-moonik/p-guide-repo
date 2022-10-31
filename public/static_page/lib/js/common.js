$(function () {


  // scroll event
  $(window, document).scroll(function () {

    let scrollTopVal = $(window).scrollTop() // 스크린 top 을 기준으로 한 지점 
    // btn_top 버튼 노출
    if (scrollTopVal > 150) {
      $('.item_btn_top').addClass('is_active');
    } else {
      $('.item_btn_top').removeClass('is_active');
    }

    //header scroll
    if(scrollTopVal > 10){
      $(".header").addClass("is_active");
    } else {
      $(".header").removeClass("is_active");
    }

  });

   // Top btn
   $(".btn_top").on("click", function(){
    $('body,html').animate({scrollTop: 0}, 400);
    return false
  })

  // pc, mobile header 기능
  $(".hamburger").on("click", function () {
    if ($(this).hasClass('on')) {
      // close
      $(this).removeClass('on');
      $(".gnb_wrap").removeClass('active');
    } else {
      // open
      $(this).addClass('on');
      $(".gnb_wrap").addClass('active')
    }
  });

 
  // input animation
  $('.input_item input').on('propertychange change keyup paste input', function () {
    var thisVal = $(this).val();
    //input에 데이터 기입 시 is_active class 추가
    if (thisVal !== '') {
      $(this).parents('.input_item').addClass('is_active');
    } else {
      $(this).parents('.input_item').removeClass('is_active');
    }
  });

  // dropdown default script
  $(".dropdown_name").on("click", function () {
    $(this).toggleClass('is_active');
    $(".ico_act").toggleClass("is_active");
    if ($(this).hasClass('is_active')) {
      $(this).siblings(".dropdown_list").slideDown(200);
    } else {
      $(this).siblings(".dropdown_list").slideUp(200);
    }
    return false;
  });

  // drwopdown box - select type
  $('.select_box .select_list li').click(function () {
    const selectBox = $(this).parents('.select_box'),
          targetValue = $(this).data("value"),
          selectName = selectBox.find('.dropdown_name'); //현재 셀렉트 박스의 dropdown_name
    selectName.text(targetValue); // set selected value text 
    selectName.removeClass('is_active'); // rotate arrow 
    $('.select_list').slideUp(200);
    $("#form-inquiry-type").val(targetValue);
    return false;
  });


  let $user_name = document.querySelectorAll('input');
  let $user_textarea = document.querySelectorAll('textarea');

  function onFocus(e) {
    e.target.parentElement.classList.add("on");
  }

  function onBlur(e) {
    if (e.target.value == "") {
      e.target.parentElement.classList.remove("on");
    }
  }

  for (i = 0; i < $user_name.length; i++) {
    $user_name[i].addEventListener('focus', onFocus);
    $user_name[i].addEventListener('blur', onBlur);
  }

  for (i = 0; i < $user_textarea.length; i++) {
    $user_textarea[i].addEventListener('focus', onFocus);
    $user_textarea[i].addEventListener('blur', onBlur);
  }


  // check and counting textarea value in inquiry page
  $('.input_item.text_box textarea#inquiry').keyup(function (e) {
    let content = $(this).val();

    // 글자수 세기
    if (content.length == 0 || content == '') {
      $('.text_count').text('0');
    } else {
      $('.text_count').text(content.length);
    }

    // 글자수 제한
    if (content.length > 1000) {
      // 1000자 부터는 타이핑 되지 않도록
      $(this).val($(this).val().substring(0, 1000));
      // 1000자 넘으면 알림창 뜨도록
      alert('글자수는 1000자까지 입력 가능합니다.');
    };
  });


   

  // layerPopup  click close btn
  $('.layer_popup .btn_close').on('click', closeLayerPopup);





}); //jquery function end

function closeLayerPopup() {
  $(this).closest('.layer_box').removeClass('is_active');

  document.body.classList.remove('hidden'); //body fixed 

};