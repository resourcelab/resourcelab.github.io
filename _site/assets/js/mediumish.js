jQuery(document).ready(function($){

    var offset = 1250; 
    var duration = 800; 
    jQuery(window).scroll(function() { 
        if (jQuery(this).scrollTop() > offset) { 
        jQuery('.back-to-top').fadeIn(duration); 
        } else { 
        jQuery('.back-to-top').fadeOut(duration); 
        }
    });
    jQuery('.back-to-top').click(function(event) { 
    event.preventDefault(); 
    jQuery('html, body').animate({scrollTop: 0}, duration); 
    return false; 
    })


    // alertbar later
    $(document).scroll(function () {
        var y = $(this).scrollTop();
        if (y > 280) {
            $('.alertbar').fadeIn();
        } else {
            $('.alertbar').fadeOut();
        }
    });


        // Smooth scroll to an anchor
        $('a.smoothscroll[href*="#"]')
          // Remove links that don't actually link to anything
          .not('[href="#"]')
          .not('[href="#0"]')
          .click(function(event) {
            // On-page links
            if (
              location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
              &&
              location.hostname == this.hostname
            ) {
              // Figure out element to scroll to
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
              // Does a scroll target exist?
              if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                  scrollTop: target.offset().top
                }, 1000, function() {
                  // Callback after animation
                  // Must change focus!
                  var $target = $(target);
                  $target.focus();
                  if ($target.is(":focus")) { // Checking if the target was focused
                    return false;
                  } else {
                    $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                    $target.focus(); // Set focus again
                  };
                });
              }
            }
          });
    
    
    // Hide Header on on scroll down
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('nav').outerHeight();

    $(window).scroll(function(event){
        didScroll = true;
    });

    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {
        var st = $(this).scrollTop();
        var brandrow = $('.brandrow').css("height");
        
        // Make sure they scroll more than delta
        if(Math.abs(lastScrollTop - st) <= delta)
            return;

        // If they scrolled down and are past the navbar, add class .nav-up.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > navbarHeight){
            // Scroll Down            
            $('nav').removeClass('nav-down').addClass('nav-up'); 
            $('.nav-up').css('top', - $('nav').outerHeight() + 'px');
           
        } else {
            // Scroll Up
            if(st + $(window).height() < $(document).height()) {               
                $('nav').removeClass('nav-up').addClass('nav-down');
                $('.nav-up, .nav-down').css('top', '0px');             
            }
        }

        lastScrollTop = st;
    }
    
    
    $('.site-content').css('margin-top', $('header').outerHeight() + 'px');


    (function($) {

  /*------------------
    Navigation
  --------------------*/
  $('.nav-switch').on('click', function(event) {
    $('.main-menu').slideToggle(400);
    event.preventDefault();
  });



  /*------------------
    Background set
  --------------------*/
  $('.set-bg').each(function() {
    var bg = $(this).data('setbg');
    $(this).css('background-image', 'url(' + bg + ')');
  });



  /*----------------------
    Portfolio layout
  ------------------------*/
  var port_fi =  $('.portfolios-area .first-item'),
    port_si =  $('.portfolios-area .second-item'),
    port_intro_h =  $('.portfolio-intro').innerHeight();

  if ($(window).width() > 991) {
    port_fi.appendTo('.portfolio-intro');
    port_si.find('.portfolio-item').height(port_intro_h + 601);
  }

  $('.portfolio-item.pi-style2').each(function() {
    var pi_width = $(this).width();
    $(this).height(pi_width + 50);
  });



  /*------------------
    Popup
  --------------------*/
  $('.portfolio-item').magnificPopup({
    type: 'image',
    mainClass: 'img-popup-warp',
    removalDelay: 400,
  });


  /*------------------
    Accordions
  --------------------*/
  $('.panel-link').on('click', function (e) {
    $('.panel-link').parent('.panel-header').removeClass('active');
    var $this = $(this).parent('.panel-header');
    if (!$this.hasClass('active')) {
      $this.addClass('active');
    }
    e.preventDefault();
  });


})(jQuery);


});
