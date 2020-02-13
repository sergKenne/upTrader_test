

window.addEventListener('resize', function () {
	viewportWidth = window.innerWidth || document.documentElement.clientWidth;
	if (viewportWidth < 1025) {
	  location.reload();
	}
  }, false);

$(document).ready(function() {
	var windowWidth = $(window).width();
	if( windowWidth <= 630) {
		$(".navigation__link").click(function() {

			if( $(this).next().is(":visible") ) {

				$(this).next().removeClass("show-js");
				$(this).removeClass("rotate-js");
				$(".header__navigation").removeClass("img-computer-js");
				
			}else {

				$(".navigation__sub-item").removeClass("show-js");
				$(this).next().addClass("show-js");
				$(".navigation__link").removeClass("rotate-js");
				$(this).addClass("rotate-js");
				$(".header__navigation").addClass("img-computer-js");

			}
		});
	}

});  //end of ready

