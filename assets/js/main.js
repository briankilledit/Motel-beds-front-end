$(document).ready(function(){
	
	// ------------------------- Home section slide show -------------------------

	$("#lightSlider").lightSlider({
		item: 			1,
		slideMargin: 	0,
		loop: 			true,
		auto: 			true,
		speed: 			1000,
		pause: 			5500
	});

	// ------------------------- Smooth scrolling throughout page -------------------------

	function smoothScroll(offset, speed) {
		$('a[href*=#]:not([href=#])').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				if (target.length) {
					$('html,body').animate({
						scrollTop: target.offset().top-offset
					}, speed);
					return false;
				}
			}
		});
	}

	smoothScroll(59, 450);

	// ------------------------- Scrolling NAV function -------------------------

	function scrollingNav(){
		var currScrollTop = $(document).scrollTop();
		if (currScrollTop >= 65) {
			$("nav.container").addClass("scrollingNav");
		}
		if (currScrollTop < 65) {
			$("nav.container").removeClass("scrollingNav");
		}
	}

	scrollingNav();

	$(document).scroll(function(){
		scrollingNav();
	});

	// ------------------------- Album information popup -------------------------

	$("#music.container .wrap .album").click(function(){
		if ($(this).hasClass("selected")){
			$(this).removeClass("selected");
		} else {
			$("#music.container .wrap .album").removeClass("selected");
			$(this).addClass("selected");
		}
		var thisContent = $(this).html();
		$(".blackOut .popWrap .popContent").html("<div class='album'>" + thisContent + "</div>");
		$(".blackOut").fadeIn(300, function(){
			$("body").addClass("noScroll");
		});
	});

	$(".blackOut .popWrap .exOut, .blackOut").click(function(){
		$(".blackOut").fadeOut(300, function(){
			$("body").removeClass("noScroll");
		});
	});

	$(".blackOut .popWrap").click(function(event){event.stopPropagation();});


	// ------------------------- Contact form -------------------------

	$("#contact .wrap input, #contact .wrap textarea").focusout(function(){
		var thisHasValue = $(this).val();
		if (thisHasValue){
			$(this).addClass("hasText");
		} else {
			$(this).removeClass("hasText");
		}
	});


	// ------------------------- Mobile Nav -------------------------

	$("nav.mobile .right .hamburger").click(function(){
		
		if ($(this).hasClass("exOut")){
			$("nav.mobile .mainNav").slideUp(260);
			$(this).removeClass("exOut");
		} else {
			$("nav.mobile .mainNav").slideDown(260);
			$(this).addClass("exOut");
		}
	});

	$("nav.mobile .mainNav ul li a, nav.mobile .left .mobileLogo").click(function(){
		$("nav.mobile .mainNav").slideUp(260);
		$("nav.mobile .right .hamburger").removeClass("exOut");
	});


	// ------------------------- News Elements -------------------------

	function cutShort(target, maxLength){
		var maxL = maxLength;
		$(target).each(function () {
		    var text = $(this).text();
		    if (text.length > maxL) {
		        var begin = text.substr(0, maxL);
		        begin = text.substr(0, Math.min(begin.length, begin.lastIndexOf(" ")));
		        var end = text.substr(begin.length);
		        var space = end.indexOf(" ");
		        var nextSpace = end.indexOf(" ", space + 1);
		        end = end.substr(nextSpace.length);

		        $(this).html(begin).append($('<span style="display: none;" />').html(end));
		    }
		});
	}


	cutShort($("#news .articleWords > p"), 110);
	cutShort($("#news .articleWords > h3"), 32);




	// ------------------------- Footer -------------------------

	$("#footer .socMed a").mouseenter(function(){
		var className = $(this).attr("class");
		$("#footer").addClass(className + "Hover");
	});

	$("#footer .socMed a").mouseleave(function(){
		var className = $(this).attr("class");
		$("#footer").removeClass(className + "Hover");
	});











});




