$(document).ready(function($){
	"use strict";

	// WOW Js Active
	new WOW().init();

	// ---- Active
    $(".owl").owlCarousel();
    // Owl Next Privew Change
    //$( ".owl-prev").html('<i class="fa screenshort-arow fa-chevron-left"></i>');
    //$( ".owl-next").html('<i class="fa screenshort-arow fa-chevron-right"></i>');

    //my-team-carosoul
    $('.owl-carousel-team').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})

    //testimonial-carosoul 
    $('.owl-carousel-testimonial').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:1
        }
    }
})



    //magnefic popup start 
     $('#youtube-video').magnificPopup({
     	type:'iframe',
	     	iframe: {
	 

	  patterns: {
	    youtube: {
	      index: 'youtube.com/', 

	      id: 'v=', 

	      src: 'http://www.youtube.com/embed/%id%?autoplay=1' 
	    },
	    
	   

	 

	  },

	  srcAction: 'iframe_src', 
	  	}
	 });   //magnefic popup end 



	 //skill bar 

	 $('.skillbar').skillBars({
  // options here
});
	 //portfolio mixit up
	 var mixer = mixitup('.portfolio-content');


	 //portfolio image popup
	  $('.image-link').magnificPopup({
	  	type:'image'
	  	



	  });


	  //sticky menu
	  $(document).ready(function(){$(".header-menu-area").sticky({topSpacing:0})});

	  //text-slider
	  $('.slide').textSlider({

 

			timeout: 8000,

			slideTime: 1050,

			loop: 2

			 

});


}(jQuery));