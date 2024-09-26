$(function() {
    var $item = $('nav ul li');
    $item.on('click', 'a', function(event) {
      var $section = $($(this).attr('href'));
      var sectionTop = $section.offset().top;   
  
      $('html, body').stop().animate({scrollTop: sectionTop}, 1500);
      
      event.preventDefault();
    });
    
    $(window).scroll(function() {
      var scrollTop = $(this).scrollTop();
      
      $item.each(function() {
        var $section = $($(this).find('a').attr('href'));
        var sectionTop = $section.offset().top - 60;
        var sectionHeight = $section.height();
        
        if (sectionTop <= scrollTop && (sectionTop + sectionHeight) > scrollTop) {
          $(this).addClass('active');
          $(this).siblings().removeClass('active');
        }
      });
    });
  });