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



      $("input,textarea").on("keyup", function() {
          if($(this).val() != ""){
              $(this).addClass('text-fill');
            }else{
                $(this).removeClass('text-fill');
            }
            
        } ); 
        $(".valueCard .cardItems").each(function(index) {
            let num = index+1
            $(this).css('top',`${num*30}px`)  ;
        })
        
        const addAnimationLine = (lineCunt) => {  
            for(let i=1; i<= lineCunt; i++) {
                let delayNum = Math.random() * 2;
                var html = `<div class="animationLine after:animate-[lineTopBottom_3s_linear_1.8s_infinite]" style="--delay:${delayNum.toFixed(2)}s"></div>`

                $('#lineAnimationWrapper').append(html)
            }
        }   
        const screenWidth = $(window).width();
        
        if(screenWidth < 575){
            addAnimationLine(4) 
        }else if(screenWidth < 767){
            addAnimationLine(5) 
            
        }else if(screenWidth < 991){
            addAnimationLine(6) 
            
        }else if(screenWidth < 1400){
            addAnimationLine(7) 
            
        }else{
            addAnimationLine(9) 
        } 

    
        
})