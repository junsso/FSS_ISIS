$(document).ready(function(){

    //snb
    let toggleBox = $('.is-toggle-box');
    let toggleTitle = $('.is-toggle-box .is-title-bar');
    let toggleConts = $('.is-toggle-contents');
    
    $(toggleTitle).on('click',function(){
        $(this).parent(toggleBox).find(toggleConts).stop().slideToggle(300);
        $(this).parent(toggleBox).toggleClass('current');
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

    /** 시스템 개요 조회 팝업 영역 **/
    //tab
    $('.is-tab-btn .is-multi-toggle').click(function(){
      var tab_id = $(this).attr('data-tab');
      var desc_id = $(this).attr('data-desc');
      
      $('.is-tab-btn .is-multi-toggle').removeClass('current');
      $('.is-conts-contain').removeClass('current');
      $('.is-desc').removeClass('current');
      
      $(this).addClass('current');
      $("#"+tab_id).addClass('current');
      $("#"+desc_id).addClass('current');
      return false;
  });

    //tree (시스템목록)
    let tgTreeP = $('.is-tree li');
    let tgTree = $('.is-tree > li > a');
    let tgTreeUb = $('.is-subtree');
    
    $(tgTree).on('click',function(){
        $(this).parent(tgTreeP).find(tgTreeUb).stop().slideToggle(300);
        $(this).parent(tgTreeP).toggleClass('toggle');
    }); 


})