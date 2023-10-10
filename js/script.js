$(document).ready(function(){
    $(window).scroll(function(){
        const sct= $(window).scrollTop();
        console.log(sct);

        if(sct>= 600){
            $('.header-area,.header-logo').addClass('active');
            $('#hamburger span').addClass('on');
        }else{
        $('.header-area,.header-logo').removeClass('active');
        $('#hamburger span').removeClass('on');

        }
    });
    var swiper = new Swiper(".plant",{
        direction: "vertical",
        slidesPerView: "auto",
        loop:true,
        speed: 500,
        autoplay:{
            delay:2000,
            disableOnInteraction:false,
        }
    });
    
    var swiper = new Swiper(".shop", {
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        autoplay:{
            delay:2000,
        },
        breakpoints:{
            1000:{
                spaceBetween: 20,
                slidesPerView: 3,
            },
            900:{
                spaceBetween: 20,
                slidesPerView: 2,
            },
            800:{
                spaceBetween: 0,
                slidesPerView: 1,
            }, 
            700:{
                spaceBetween: 0,
                slidesPerView: 1,
            },
            500:{
                spaceBetween: 0,
                slidesPerView: 1,
            },
        }
      });


    $('.main-menu > li').mouseenter(function(){
        $(this).children('.sub-menu').addClass('active');
    });
    $('.main-menu li').mouseleave(function(){
        $(this).children('.sub-menu').removeClass('active');
    });
  
    const btn = $('.top-btn');

    $(window).scroll(function(){
        let sct = $(window).scrollTop();
        if( sct >= 300){
            $('.top-btn').fadeIn();
        }else{
            $('.top-btn').fadeOut();
        }
    });

    btn.click(function(){
        $('html,body').animate({
            scrollTop : 0
        },500);
    });

    $('#hamburger').click(function(){
        $('#hamburger span').toggleClass('active');
        $('.main-menu').toggleClass('active');

    });
});