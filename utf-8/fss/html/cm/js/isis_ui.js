$(document).ready(function(){

    //우측 퀵메뉴
    $(window).scroll(function () {
      let quickMenu = $('.is-quick-menu');
      let quickMenuOffset = $(quickMenu).offset().top;

      if($(this).scrollTop() >= quickMenuOffset ){	
        //alert('asfsdf');
        $(quickMenu).addClass('fixed');
      } else {
        $(quickMenu).removeClass('fixed');
      }
   });

    //snb
    let isToggleTitle = $('.is-toggle-box .is-title-bar .is-arrow');
    let isToggleConts = $('.is-toggle-contents');
    
    $(isToggleTitle).on('click',function(){
      $(this).parents('.is-toggle-box').find(isToggleConts).stop().slideToggle(300);
      $(this).parents('.is-toggle-box').toggleClass('current');
    });     

    //ISIS자주찾는 업무 시스템
    var swiper = new Swiper(".is-fv-list .swiper-container", {
        slidesPerView: 4,
        spaceBetween: 15,
        slidesPerGroup: 4,
        //loop : true,
        //loopFillGroupWithBlank : true,
        watchOverflow: false, //슬라이드가 1개 일 때 pager, button 숨김 여부 설정
        navigation: {
          nextEl: ".is-fv-system .swiper-button-next",
          prevEl: ".is-fv-system .swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
          renderFraction: function (currentClass, totalClass) {
            return '<span class="' + currentClass + '"></span>' +
                   '<em class="line"></em> ' +
                   '<span class="' + totalClass + '"></span>';
          }
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

    //업무시스템 위치 이동
    let upBtn = $('.is-contents-item .is-toggle-box .up');
    let downBtn = $('.is-contents-item .is-toggle-box .down');
    let objParents = $('.is-contents-item .is-toggle-box');

    $(upBtn).on('click', function(){
      let item = $(this).closest(objParents); 
      let prev = $(item).prev();
      if(prev.length > 0){ 
        $(item).insertBefore(prev);
      }
    });
    $(downBtn).on('click', function(){
      let item = $(this).closest(objParents);
      let next = $(item).next();
      if(next.length > 0){
        $(item).insertAfter(next);
      }
    });
}) 