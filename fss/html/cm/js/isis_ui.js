$(document).ready(function(){

    //snb
    let toggleBox = $('.is-toggle-box');
    let toggleTitle = $('.is-toggle-box .is-title-bar');
    let toggleConts = $('.is-toggle-contents');
    
    $(toggleTitle).on('click',function(){
        //alert('afsfd');
        $(this).parent(toggleBox).find(toggleConts).stop().slideToggle(300);
        $(this).parent(toggleBox).toggleClass('current');
        $(this).parent(toggleBox).siblings(toggleBox).find(toggleConts).stop().slideUp(300);
        $(this).parent(toggleBox).siblings(toggleBox).removeClass('current');
    });
    //목록 이외 클릭시 목록 닫힘
    // $(document).on('mouseup',function (e){
    //     if(snbMenuBox.has(e.target).length === 0){
    //         snbMenu.parents('li').removeClass('current');
    //         snbDepth2.stop().slideUp(300);
    //     }
    // });


})