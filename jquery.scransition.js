/* Scransition jQuery plugin
 * Animate CSS with a transition when you scroll an item into the viewport by removing a class from it
 * Author: Scott Nelle
 * Usage:
 * 	CSS: h2.scransition { opacity: 0; };
 * 	JavaScript: $('h2').scransition();
 *	Available Parameters: { transition:'0.4s', offset:150 }
**/

(function ( $ ) {
	$.fn.scransition = function(options) {
		var defaults = {
			transition: '0.4s',
			offset: 150,
		};

		var settings = $.extend( {}, defaults, options );
		var els = this;

		// set up initial state
		this.each(function(){
			$(this).addClass('scransition')
				.css('transition',settings.transition)
				.css('-webkit-transition',settings.transition);
		});

		// remove class when image shows up on the page
		$(window).scroll(function() {
			els.each(function(){
				if ($(window).scrollTop() + $(window).height() > $(this).offset().top + settings.offset) {
					$(this).removeClass('scransition');
				}
			});
		});
		return this;
	};
}( jQuery ));