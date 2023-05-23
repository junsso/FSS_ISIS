$(document).ready(function(){

    //snb
    let toggleBox = $('.is-toggle-box');
    let toggleTitle = $('.is-toggle-box .is-title-bar');
    let toggleConts = $('.is-toggle-contents');
    
    $(toggleTitle).on('click',function(){
        $(this).parent(toggleBox).find(toggleConts).stop().slideToggle(300);
        $(this).parent(toggleBox).toggleClass('current');
    });

     //tab 스크립트
     $('.tab-ui-js-menu .tab-ui-js-target').click(function(){
        var tab_id = $(this).attr('data-tab');
    
        $('.tab-ui-js-menu .tab-ui-js-target').removeClass('current');
        $('.tab-contents').removeClass('current');
        
        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
        return false;
    });

    //ISIS자주찾는 업무 시스템
    var swiper = new Swiper(".is-fv-list .swiper", {
        slidesPerView: 5,
        slidesPerGroup: 5,
        spaceBetween: 20,
        loopFillGroupWithBlank : false,
        navigation: {
          nextEl: ".is-fv-system .swiper-button-next",
          prevEl: ".is-fv-system .swiper-button-prev",
        },
      });

    //tab
    $('.is-tab-ui-js-menu .is-tab-ui-js-target').click(function(){
      $('.is-tab-ui-js-menu .is-tab-ui-js-target').removeClass('current');
      
      $(this).addClass('current');
      return false;
  });


})