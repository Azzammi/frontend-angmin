$(function(){
	
	var menu = $('#twd-menu'),
        bounce = $('#bounce'),
		pos = menu.offset(),
        boset = bounce.offset();
		
		$(window).scroll(function(){
			if($(this).scrollTop() > pos.top+menu.height() && menu.hasClass('navbar-static-top')){
				menu.fadeOut('fast', function(){
					$(this).removeClass('navbar-static-top').addClass('navbar-fixed-top').fadeIn('fast');
				});
			} else if($(this).scrollTop() <= pos.top && menu.hasClass('navbar-fixed-top')){
				menu.fadeOut('fast', function(){
					$(this).removeClass('navbar-fixed-top').addClass('navbar-static-top').fadeIn('fast');
				});
			}
            
		});
    
});


        $(document).ready(function(){
            $('#col').each(function(){
                animationHover(this, 'bounce');
            });
        });

function animationHover(element, animation){
    element = $(element);
    element.hover(
        function(){
            element.addClass('animated' + animation);
        },
        function(){
            //wait for animation to finish before removing classes
            window.setTimeout(function(){
                element.removeClass('animated' + animation);
            }, 2000);
        });
}