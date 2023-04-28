(function($) { 
    $(function() { 
      
      $('nav ul li a:not(:only-child)').click(function(e) {
        $(this).siblings('.nav-dropdown').toggle();
       
        $('.nav-dropdown').not($(this).siblings()).hide();
        e.stopPropagation();
      });
     
      $('html').click(function() {
        $('.nav-dropdown').hide();
      });
      
      $('#nav-toggle').click(function() {
        $('nav ul').slideToggle();
      });
    
      $('#nav-toggle').on('click', function() {
        this.classList.toggle('active');
      });
    }); 
  })(jQuery); 

// document.addEventListener("mouseenter",hello);
// function hello(){
//   document.getElementsByTagName("a").innerText="Home"
// }
  




jQuery(document).ready(function($){
	var $timeline_block = $('.cd-timeline-block');

	//hide timeline blocks which are outside the viewport
	$timeline_block.each(function(){
		if($(this).offset().top > $(window).scrollTop()+$(window).height()*0.75) {
			$(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
		}
	});

	//on scolling, show/animate timeline blocks when enter the viewport
	$(window).on('scroll', function(){
		$timeline_block.each(function(){
			if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.75 && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) {
				$(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
			}
		});
	});
});




