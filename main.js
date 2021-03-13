/* ======= Animate on scroll library ======= */ 
// Ref: https://github.com/michalsnik/aos/tree/v2 

AOS.init({
    // Global settings:
    disable: 'mobile' // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    
});


$(document).ready(function() {
    
    /* ======= Fixed Header animation ======= */ 
    
    $(window).on('scroll', function() {
        
        if ($(window).scrollTop() > 80 ) {
            $('#header').addClass('header-shrink');
        }
        else {
            $('#header').removeClass('header-shrink');             
        }
    }); 
    
    /* ===== Smooth scrolling ====== */
    $('a.scrollto').on('click', function(e){
        //store hash
        var target = this.hash;    
        e.preventDefault();
        $('body').scrollTo(target, 800, {offset: -60, 'axis':'y'});
        
    });       
    
    /* ======= Reviews Owl Carousel ======= */ 
    /* Ref: https://owlcarousel2.github.io/OwlCarousel2/ */
    
    $('.reviews-carousel').owlCarousel({
        loop:true,
        margin:20,
        nav:false,
        stagePadding: 60,
        autoplay:true,
        autoplayTimeout:8000,
        autoplayHoverPause:true,
        nav:true,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        responsive:{
            0:{
                items:1
            },
            576:{
                items:2
            },
            992:{
                items:3
            },
            1200: {
                items:4
            },
            
        }
    });
    
    
    
});