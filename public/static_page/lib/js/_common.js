$(function(){

  // remove all active class
  $(".i18n").removeClass("is_active");

  // active selected language
  $(".i18n[data-lang-code='"+curLangCode+"']").addClass("is_active");

  // 최초 페이지 로드시 메인 / 서브 감지해서 active 클래스 제어 
  // $(".wrap").hasClass("main") || $(".wrap").hasClass("recruit") ? $(".header").removeClass("is_active") : $(".header").addClass("is_active")

  // 최초 페이지 로드시 모바일 환경에서 비디오 로드 관련 스크립트
  // 인덱스의 경우 section03, service의 경우 section_visual
  var mainVideo = $('.section_box.metaverse video');
  var serviceVideo = $('.service .section_visual video');
  var windowWidth = $(window).width();

  if(windowWidth < 961){
    mainVideo.attr('src','');
    serviceVideo.attr('src','');
  }

  // index award section slider  
  var swiper = new Swiper(".swiper.company_slide", {
    slidesPerView: 1.5,
    spaceBetween: 40,
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-next.main_btn_next",
      prevEl: ".swiper-button-prev.main_btn_prev"
    },
    breakpoints: {
      960: {
        slidesPerView: 2.5,
        spaceBetween: 90,
      }
    },
  });

  // recruit page sub slider  
  var swiper = new Swiper(".swiper.recruit ", {
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    speed: 500,
    loop: true,
  });

  // index award section tablet slider  
  var swiper = new Swiper(".company_card .card_box.only_tablet ", {
    speed: 500,
    loop: false,
    centeredSlides: true,
    initialSlide: 2,
    slidesPerView: 2,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
    },
  });

  // pc, mobile header 기능
  $(".hamburger").on("click", function(){
    if($(this).hasClass('on')){
      // close
      $(this).removeClass('on');
      $(".mo_gnb").removeClass('active');
    } else {
      // open
      $(this).addClass('on');
      $(".mo_gnb").addClass('active')
    }      
  });

  $('.mo_gnb_item a').on('click', function(){

    $('.depth_box').removeClass('on');
      $('.mo_sub_depth').slideUp(300);

    if(!$(this).siblings('.mo_sub_depth').is(':visible')){        
      $(this).parents('.depth_box').addClass('on');
      $('.mo_sub_depth').slideUp(300);
      $(this).siblings('.mo_sub_depth').slideDown(300);
    }
  });

  // scroll 
  $(window, document).scroll(function(){

    //scroll common 변수
    let scrollTopVal = $(window).scrollTop(), // 스크린 top 을 기준으로 한 지점 
        screenBtmVal = $(window).scrollTop() + $(window).height(), // 스크린 bottom을 기준으로 한 지점
        scrollBtmVal = $(document).height() - $(window).height() - scrollTopVal;

    // scroll img zoom event 
    var zoomImg = $('.zoom_img');
    zoomImg.addClass('zoom');

    if(scrollTopVal < 10 ){
      zoomImg.removeClass('zoom')
    }

  

    // scroll img animation event
    if($('body').has($('.item_ani')).length){ // animation 효과를 줄 el가 있을 경우에만 실행
      var aniItem = $('.item_ani'),
          startOffset = aniItem.offset().top + 100 ; //animation 실행시킬 시작점 

      if(screenBtmVal > startOffset ){
        aniItem.addClass('ani_active')
      }else{
        aniItem.removeClass('ani_active')
      }

    }
      
    // btn_top 버튼 노출
    if(scrollTopVal > 150){
      $('.item_btn_top').addClass('is_active');
    }else{
      $('.item_btn_top').removeClass('is_active');
    }

    // .quick_nav_box  footer에서 걸림 처리 
    if(scrollBtmVal < 330 ){
      $('.quick_nav_box').addClass('is_active')
    }else{
      $('.quick_nav_box').removeClass('is_active')
    }


    //header scroll
    if(scrollTopVal > 10){
      $(".header").addClass("is_active");
    } else {
      $(".header").removeClass("is_active");
    }


    if($('.main_visual .item_ani').hasClass('ani_active')){
      $('.main_visual').addClass('is_active')
    }else{
      $('.main_visual').removeClass('is_active')
    }
    




    
  })

  // click event
  // Top btn
  $(".btn_top").on("click", function(){
    $('body,html').animate({scrollTop: 0}, 400);
    return false
  })

  // section_award  btn_more click event & multi lang type function
  // lang code
  var langCodeVal = $('html').attr('lang');

  $('.btn_view').on('click',function(){
    $(this).parents('.view_wrap').find('.view_contents').stop().slideToggle();
    $(this).toggleClass('is_active');

    // if(langCodeVal == 'ko'){
    //   if($(this).hasClass('is_active')){
    //     $(this).text('닫기');
    //   }else{
    //     $(this).text('자세히 보기');
    //   }
    // } else if (langCodeVal == 'en'){
    //   if($(this).hasClass('is_active')){
    //     $(this).text('close');
    //   }else{
    //     $(this).text('more view');
    //   }
    // }
  });


  // form popup 
  $('.btn_faq').on('click',function(){
    $('.popup_faq').fadeIn();
  });
  $('.btn_letter').on('click',function(){
    $('.popup_newsletter').fadeIn();
  });

  $('.form_popup .btn_close').on('click',function(){
    $(this).parents('.form_popup').fadeOut();
  });

  //form submit function

  // email form
  $(".btn-news-send").click(function() {
    var isValid = $('.input-news-email')[0].validity.valid;
    var privacy = $('.newsCheckbox').is(':checked');
    if(privacy == false){
      alert('개인정보 취급방침에 동의해 주세요.');
      return;
    }
    if(isValid == false){
      alert('이메일을 작성해 주세요.');
      return;
    }


    // RFC 2822
    var emailValidFormat = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    var email = $(".input-news-email").val();
    if(emailValidFormat.test(email) == false)
    {
      alert("이메일 형식이 맞지 않습니다.");
      return false;
    }
    
    $.ajax({
      url: '/api/subscription',
      data: {
        "email": email
      },
      type: 'POST',
      success: function(data){
        if(data == "success"){
          alert('구독해 주셔서 감사합니다.');
          $(".input-news-email").val("");
          $(".input-news-email").removeClass("is_active");
          return false;
        }
        else if(data == "duplicated")
        {
          alert("이미 뉴스레터 구독 인증된 이메일 주소입니다.\n다른 이메일 주소를 입력하시거나 이메일 수신에 계속 문제가 발생할 경우,\nContact Us에 구독 신청한 이메일과 함께 문의를 남겨 주세요.");
          return false;
        }

        alert('오류가 발생 했습니다. 다시 시도 해 주시기 바랍니다.');
        return false;
      }
    });

    return false;
  });

  // form submit function (index page)
  $('#form-contact').submit(function () {
    if($('#contactCheckbox').is(':checked')){
      $('#contactCheckbox').val('true');
    }else{
      alert('개인정보 수집 및 이용에 동의해주세요.');
      return false;
    }

    var formData = $('#form-contact').serialize();

    $.ajax({
    url: 'https://hooks.zapier.com/hooks/catch/2194594/bahx4fr/',
    type: 'post',
    data: formData,

    success: function (data) {
      $("#form-contact")[0].reset();
      $('.form_box .input_item').removeClass('on');
      $('.dropdown_name').text('문의유형');
      alert("감사합니다. 빠른시간 내에 작성하신 메일로 답변드리겠습니다.");

    },
    error : function(xhr, textStatus, errorThrown){
      console.error('Error:', error)
    }
    });

    return false;
  });

  // input animation
  $('.input_item input').on('propertychange change keyup paste input',function(){
    var thisVal = $(this).val();
    //input에 데이터 기입 시 is_active class 추가
    if(thisVal !== ''){
      $(this).parents('.input_item').addClass('is_active');
    }else{
      $(this).parents('.input_item').removeClass('is_active');
    }
  });

  // footer dropdown
  $(".dropdown_name").on("click", function(){
    $(this).toggleClass('is_active');
    $(".ico_act").toggleClass("is_active");
    if($(this).hasClass('is_active')){
      $(this).siblings(".dropdown_list").slideDown(200);
    } else {
      $(this).siblings(".dropdown_list").slideUp(200);
    }
    return false;
  });

  $('.select_box .dropdown_list li.index_select_item').click(function(){
    targetValue = $(this).data("value");
    $("#form-inquiry-type").val(targetValue);
    $('.select_box .dropdown_name').text(targetValue);
    $('.dropdown_list').slideUp(200);
    $('.dropdown_name').removeClass('is_active');
    return false;
  });
  //--------------------------------------------------------------------------------------//

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

}); //jquery function end

