$(document).ready(function(){
  
    //우측 퀵메뉴
    $(window).scroll(function () {
      var quickMenu = $('.is-quick-menu');
      var quickMenuOffset = $(quickMenu).offset().top;

      if($(this).scrollTop() >= quickMenuOffset ){	
        //alert('asfsdf');
        $(quickMenu).addClass('fixed');
      } else {
        $(quickMenu).removeClass('fixed');
      }
   });

    //snb
    var isToggleTitle = $('.is-toggle-box .is-title-bar .is-arrow');
    var isToggleConts = $('.is-toggle-contents');
    
    $(isToggleTitle).on('click',function(){
      $(this).parents('.is-toggle-box').find(isToggleConts).toggleClass('current');
      $(this).parents('.is-toggle-box').toggleClass('current');
    });     

    //ISIS자주찾는 업무 시스템
    // var swiper = new Swiper(".is-fv-list .swiper-container", {
    //     slidesPerView: 5,
    //     spaceBetween: 15,
    //     slidesPerGroup: 5,
    //     //loop : true,
    //     //loopFillGroupWithBlank : true,
    //     watchOverflow: false, //슬라이드가 1개 일 때 pager, button 숨김 여부 설정
    //     navigation: {
    //       nextEl: ".is-fv-system .swiper-button-next",
    //       prevEl: ".is-fv-system .swiper-button-prev",
    //     },
    //     pagination: {
    //       el: ".swiper-pagination",
    //       type: "fraction",
    //       renderFraction: function (currentClass, totalClass) {
    //         return '<span class="' + currentClass + '"></span>' +
    //                '<em class="line"></em> ' +
    //                '<span class="' + totalClass + '"></span>';
    //       }
    //     },
    //   });    

    //tab
    $('.is-tab-ui-js-menu .is-tab-ui-js-target').click(function(){
      $('.is-tab-ui-js-menu .is-tab-ui-js-target').removeClass('current');
      
      $(this).addClass('current');
      return false;
    });

    //권한시스템 checked
    $('.is-switch-box.ie .is-input + label').click(function(){
      $(this).siblings('.is-input').toggleClass('checked');
    });


    //tree (시스템목록)
    var tgTreeP = $('.is-tree li');
    var tgTree = $('.is-tree > li > a');
    var tgTreeUb = $('.is-subtree');
    
    $(tgTree).on('click',function(){
        $(this).parent(tgTreeP).find(tgTreeUb).stop().slideToggle(300);
        $(this).parent(tgTreeP).toggleClass('toggle');
    }); 

    //업무시스템 위치 이동
    var upBtn = $('.is-contents-item .is-toggle-box .up');
    var downBtn = $('.is-contents-item .is-toggle-box .down');
    var objParents = $('.is-contents-item .is-toggle-box');

    $(upBtn).on('click', function(){
      var item = $(this).closest(objParents); 
      var prev = $(item).prev();
      if(prev.length > 0){ 
        $(item).insertBefore(prev);
      }
    });
    $(downBtn).on('click', function(){
      var item = $(this).closest(objParents);
      var next = $(item).next();
      if(next.length > 0){
        $(item).insertAfter(next);
      }
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

    //자주찾는 업무 시스템 슬라이드
    console.clear();

    // 상단 메인 배너 슬라이더
    $('.is-fv-system .page-btns .page-btn').click(function(){
        var $clicked = $(this);
        var $slider = $(this).closest('.is-fv-system').find('.slide-container');
        
        var index = $(this).index();
        var isLeft = index == 0;
        //console.log(index);
        
        var $current = $slider.find(' > .slide-wrapper .item.active');
        var $post;
        
        if ( isLeft ){
            $post = $current.prev();
            $('.page-btn').addClass('disabled');
        }
        else {
            $post = $current.next();
        }
        //console.log($post.length);
        
        if ( $post.length == 0 ){
            if ( isLeft ){
                $post = $slider.find(' > .slide-wrapper .item:last-child');
            }
            else {
                $post = $slider.find(' > .slide-wrapper .item:first-child');
            }
        }
        
        $current.removeClass('active');
        $post.addClass('active');
        
        updateCurrentPageNumber();
    });

    // setInterval(function(){
    //   $('.is-fv-system .page-btns .next-btn').click();
    // }, 8000);

    // 슬라이더 페이지 번호 지정
    function pageNumber__Init(){
        // 전채 배너 페이지 갯수 세팅해서 .slider 에 'data-slide-total' 넣기
        var totalSlideNo = $('.slide-container .slide-wrapper .item').length;
        //console.log(totalSlideNo);
        
        $('.slide-container').attr('data-slide-total', totalSlideNo);
        
        // 각 배너 페이지 번호 매기기
        $('.slide-container .slide-wrapper .item').each(function(index, node){
            $(node).attr('data-slide-no', index + 1);
        });
    };

    pageNumber__Init();

    //슬라이더 이동시 페이지 번호 변경
    function updateCurrentPageNumber(){
        var totalSlideNo = $('.slide-container').attr('data-slide-total');
        var currentSlideNo = $('.slide-container .slide-wrapper .item.active').attr('data-slide-no');
        
        $('.is-fv-system .page-btns .page-no .total-slide-no').html(totalSlideNo);
        $('.is-fv-system .page-btns .page-no .current-slide-no').html(currentSlideNo);
    };

    updateCurrentPageNumber()
}) 