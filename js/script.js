

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
				$(".header__navigation").css({
					"background-color" : "#f3f2da",
					"background-image" : "url(../img/bg-desktop.jpg)"
				});

			}else {
				$(".navigation__sub-item").removeClass("show-js");
				$(this).next().addClass("show-js");
				$(".navigation__link").removeClass("rotate-js");
				$(this).addClass("rotate-js");

				$(".header__navigation").css({
					"background-color" : "#f3f2da",
					"background-image" : "none",
				});

				$(".navigation__sub-item").css({
					"background-image" : "url(../img/computer-mobile.png)",
					"background-repeat" : "no-repeat",
					"background-position": "-90px bottom "
				});

				if( windowWidth <= 426) {
					$(".navigation__sub-item").css({
						"background-image" : "url(../img/computer-mobile.png)",
						"background-repeat" : "no-repeat",
						"background-position": "-280px bottom "
					});
				}
			}
			
		});
	}

});  //end of ready