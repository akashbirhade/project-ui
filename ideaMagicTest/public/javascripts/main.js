$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
      items: 3, // Number of items shown in each slide
      loop: true,
      margin: 20,
      responsiveClass: true,
      responsive:{
        0:{
            items:1
        },
        576:{
            items:2
        },
        992:{
            items:3
        }
      }
    });
  });

  
