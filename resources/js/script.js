VANTA.NET({
  el: "#background_animation",
  color: 0xE0004D,
  backgroundColor: 0x041C2C
});

$(document).ready(function() {
    
    /* For the sticky navigation*/
    $('.js--section-gallery').waypoint(function(direction) {
        if (direction =="down"){
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
      offset: '60px'
    });
    
    /* Animation on scroll */
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn')   
    }, {
      offset: '70%'
    });
    
     /* Filtrado de imagenes */
    $(function() {
        var selectedClass = "";
        $(".filter").click(function(){
            selectedClass = $(this).attr("data-rel");
            $("#gallery").fadeTo(100, 0.1);
            $("#gallery div").not("."+selectedClass).fadeOut().removeClass('animation');
            setTimeout(function() {
                $("."+selectedClass).fadeIn().addClass('animation');
                $("#gallery").fadeTo(300, 1);
                }, 300);
        });
    });

     /* Swipe of images */
    $(function(){
        var selectedAtr = "";
      $(".img-fluid").on({
           mouseenter: function(){
            selectedAtr = $(this).attr('src');           
            $(this).attr('src',[selectedAtr.slice(0, selectedAtr.length-9), selectedAtr.slice(selectedAtr.length-4)].join(''));
          },
          mouseleave: function(){
            $(this).attr('src',selectedAtr);
          }
          });

    });
    
});

