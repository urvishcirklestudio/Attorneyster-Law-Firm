$(document).ready(function(){
    $('.dropdown_toggle').click(function(){
        $('.dropdown_menu').toggle();
    }); 
    $('.dropdown_menu li').click(function(){
        $('.dropdown_menu').hide();
    });
     $('.menu_icon  button').click(function(){
        $('.middle_header').addClass('show');
        $('.black_layer').removeClass('hidden');
    }); 
    $('.nav_close button,.black_layer').click(function(){
        $('.middle_header').removeClass('show');
        $('.black_layer').addClass('hidden');
    });

   new Swiper(".partnerSwiper", {
        slidesPerView: 3,
        loop:true,
        spaceBetween: 30,
        breakpoints: { 
            576: {
                slidesPerView: 4, 
            },
            992: {
                slidesPerView: 5, 
            },
        }
    });

   new Swiper(".reviewsSwiper", {
        slidesPerView: 1.3,
        spaceBetween: 28,
        breakpoints: { 
            575: {
                slidesPerView: 2, 
            },
            768: {
                slidesPerView: 3, 
            },
            992: {
                slidesPerView: 3, 

            }, 1140: {
                slidesPerView: 4, 
                spaceBetween: 18,

            },
        }
      });
})