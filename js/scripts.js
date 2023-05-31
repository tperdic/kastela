$(document).ready(function () {

	$(".menu_trigger").click(function (e) {
		e.preventDefault();
		if ($('.menu').hasClass('open')) {
			$(".menu").removeClass("open");
			$(".menu_holder").removeClass("open");
			$("body").removeClass("hideoverflow");
		}
		else {
			$(".menu").addClass("open");
			$(".menu_holder").addClass("open");
			$("body").addClass("hideoverflow");
		}
		$(".menu .hasSub").removeClass('open');
	});

	$('.menu .hasSub > a').click(function (e) {
		e.preventDefault();
		$(this).parent('li.hasSub').toggleClass("open");
	});

	$(".acc span").click(function () {
		$(this).parent().toggleClass("closed");
	});

	$(".close_covid").click(function (e) {
		e.preventDefault();
		var popup = $(this).parents(".covid");
		var path = popup.data('cookiePath') || '/';
		var days = popup.data('expiry') || 0;
		var popupId = popup.data('id');
		popup.remove();
		$("body").removeClass("has_notice");
		var expires;
		if (days) {
			var date = new Date();
			date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
			expires = "; expires=" + date.toGMTString();
		} else {
			expires = "";
		}
		document.cookie = encodeURIComponent('noticeShown') + "=" + encodeURIComponent(popupId) + expires + "; path=" + path;
		$(window).resize();
	});

	$("a.search").click(function (e) {
		e.preventDefault();
		$(".header_search").toggleClass("show");
	});

	$(".close_header_search").click(function (e) {
		e.preventDefault();
		$(".header_search").toggleClass("show");
	});

	$(".close_menu").click(function (e) {
		e.preventDefault();
		$(".menu").toggleClass("open");
		$(".menu_holder").toggleClass("open");
		$("body").removeClass("hideoverflow");
	});

	$("#read_intro").click(function (e) {
		e.preventDefault();
		$(".intro_txt").toggleClass("open");
		$("#read_intro").toggleClass("close");
	});

	$(".back2top").click(function (e) {
		e.preventDefault();
		window.scrollTo(0, 0);
	});
});



$(document).ready(function () {
	const body = document.body;
	const scrollUp = "scroll-up";
	const scrollDown = "scroll-down";
	let lastScroll = null;

	$(window).on("scroll", () => {
		const currentScroll = window.pageYOffset;
		if (currentScroll <= 0) {
			body.classList.remove(scrollUp);
			return;
		}
		if (lastScroll === null) {
			// initial
			body.classList.remove(scrollDown);
			body.classList.add(scrollUp);
		}
		else if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
			// down
			body.classList.remove(scrollUp);
			body.classList.add(scrollDown);
		} else if (currentScroll < lastScroll && !body.classList.contains(scrollUp)) {
			// up
			body.classList.remove(scrollDown);
			body.classList.add(scrollUp);
		}
		lastScroll = currentScroll;
	}).scroll();
});





$(document).ready(function () {
	$('.hero_owl').owlCarousel({
		loop: true,
		margin: 0,
		responsiveClass: true,
		dots: true,
		nav: false,
		animateOut: 'fadeOut',
		items: 1
	});

	$('.gallery_slider .owl-carousel').each(function () {
		if ($(this).find('a.item').length < 2) {
			return;
		}
		$(this).owlCarousel({
			items: 1,
			loop: true,
			nav: true,
			margin: 30,
			responsive: {
				0: {
					stagePadding: 0,
					margin: 0,
					nav: false
				},
				800: {
					stagePadding: 130,
					margin: 30,
				},
				1000: {
					stagePadding: 200
				},
				1350: {
					stagePadding: 300
				},
				1800: {
					stagePadding: 400
				}
			},
			onRefreshed: function (event) {
				if (event.page.count == 0) {
					var target = $(event.target);
					window.setTimeout(function () { target.trigger('refresh.owl.carousel'); }, 50);
					return;
				}
				injectCountOwl2(event);
			},
			onResized: injectCountOwl2,
			onChanged: injectCountOwl2
		});
	});


	$('.article_slider .owl-carousel').owlCarousel({
		items: 1,
		loop: true,
		nav: true,
		margin: 24,
		stagePadding: function () {
			var padding = ($('body').width() - $('#wrap-size').width()) / 2;
			if (padding < 0) {
				padding = 0;
			}
			return padding;
		},

		responsive: {
			0: {
				margin: 8,
				nav: false
			},
			800: {
				margin: 8
			},
			1100: {
				margin: 24
			}
		}
	});

	function injectCountOwl2(event) {
		if (event.page.count == 0) {
			return;
		}
		var element2 = event.target;
		var dots2 = $(element2).find('.owl-nav');
		var page2 = event.page.index;
		var pagesTotal = event.page.count;
		page2++;
		dots2.find('.img_counter').remove();
		dots2.append('<div class="img_counter"><span>' + page2 + ' / ' + pagesTotal + '</span></div>');
	}


	$('.slider4 .owl-carousel').owlCarousel({
		items: 3,
		loop: false,
		nav: true,
		margin: 30,
		stagePadding: function () {
			var padding = ($('body').width() - $('#wrap-size').width()) / 2 + 100;
			if (padding < 0) {
				padding = 0;
			}
			return padding;
		},
		responsive: {
			0: {
				items: 1,
				nav: false,
				margin: 16,
				stagePadding: function () {
					var padding = ($('body').width() - $('#wrap-size').width()) / 2 + 100;
					if (padding < 0) {
						padding = 0;
					}
					return padding;
				}
			},
			800: {
				items: 2,
				margin: 30,
				stagePadding: function () {
					var padding = ($('body').width() - $('#wrap-size').width()) / 2 + 140;
					if (padding < 0) {
						padding = 0;
					}
					return padding;
				}
			},
			1100: {
				items: 3,
				margin: 30,
				stagePadding: function () {
					var padding = ($('body').width() - $('#wrap-size').width()) / 2 + 140;
					if (padding < 0) {
						padding = 0;
					}
					return padding;
				}
			}
		},
		onRefreshed: function (event) {
			if (event.page.count == 0) {
				var target = $(event.target);
				window.setTimeout(function () { target.trigger('refresh.owl.carousel'); }, 50);
				return;
			}
			//injectCountOwl2(event);
		}
		//onResized: injectCountOwl2,
		//onChanged: injectCountOwl2
	});

	$('.slider .owl-carousel').owlCarousel({
		items: 1,
		loop: false,
		nav: true,
		dots: false,
		margin: 0
	});







	$('.istrazi_holder .owl-carousel').owlCarousel({
		items: 3,
		loop: false,
		nav: false,
		dots: false,
		margin: 30,
		stagePadding: 0,
		responsive: {
			0: {
				items: 1,
				stagePadding: function () {
					var padding = ($('body').width() - $('#wrap-size').width()) / 2 + 100;
					if (padding < 0) {
						padding = 0;
					}
					return padding;
				},
				margin: 16
			},
			800: {
				items: 2,
				stagePadding: function () {
					var padding = ($('body').width() - $('#wrap-size').width()) / 2 + 140;
					if (padding < 0) {
						padding = 0;
					}
					return padding;
				},
				margin: 30
			},
			1100: {
				items: 3,
				stagePadding: 0,
				margin: 30
			}
		},
		/*onRefreshed: function (event) {
			if(event.page.count === 0) {
				var target = $(event.target);
				window.setTimeout(function() { target.trigger('refresh.owl.carousel'); }, 50);
				return;
			}
		}*/
	});



	$('.popup_gallery').on('click', 'a', function (e) {
		e.preventDefault();
		var $gallery = $(this).parents('.popup_gallery');
		var index = 0;
		var url = $(this).attr('href');
		var items = [];
		var i = 0;
		$gallery.find('a.item').each(function () {
			var $item = $(this);
			if ($item.parent().hasClass('cloned')) {
				return;
			}
			var src = $item.attr('href');
			var title = $item.data('title') || '';
			var item = { src: src, title: title };
			if ($item.hasClass('video')) {
				item.type = 'iframe';
			}
			items.push(item);
			if (url == src) {
				index = i;
			}
			i++;
		});

		$.magnificPopup.open({
			items: items,
			type: 'image',
			tLoading: 'Loading image #%curr%...',
			mainClass: 'mfp-img-mobile',
			gallery: {
				enabled: true,
				navigateByImgClick: true,
				preload: [1, 2] // Will preload 1 - before current, and 2 after the current image
			},
			image: {
				markup: '<div class="mfp-figure">' +
					'<div class="mfp-close"></div>' +
					'<div class="mfp-img"></div>' +
					'<div class="mfp-bottom-bar">' +
					'<div class="mfp-title"></div>' +
					'</div>' +
					'</div>'
			},
			iframe: {
				markup: '<div>' +
					'<div class="mfp-close"></div>' +
					'<div class="mfp-iframe-scaler">' +
					'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
					'</div></div>',
			}
		}, index);
	});
});




//synced slider
$(document).ready(function () {

	var sync1 = $("#sync1");
	var sync2 = $("#sync2");
	var slidesPerPage = 1; //globaly define number of elements per page
	var syncedSecondary = true;

	sync1.owlCarousel({
		items: 1,
		slideSpeed: 2000,
		nav: true,
		autoplay: false,
		dots: false,
		loop: false,
		responsiveRefreshRate: 200,
	}).on('changed.owl.carousel', syncPosition);

	sync2.on('initialized.owl.carousel', function () {
		sync2.find(".owl-item").eq(0).addClass("current");
	}).owlCarousel({
		items: 1,
		dots: false,
		nav: false,
		margin: 0,
		smartSpeed: 200,
		slideSpeed: 2000,
		slideBy: 1, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
		responsiveRefreshRate: 100
	}).on('changed.owl.carousel', syncPosition2);

	function syncPosition(el) {
		//if you set loop to false, you have to restore this next line
		var current = el.item.index;

		//if you disable loop you have to comment this block
		/*var count = el.item.count-1;
		var current = Math.round(el.item.index - (el.item.count/2) - 0.5);
	    
		if(current < 0) {
		  current = count;
		}
		if(current > count) {
		  current = 0;
		}
		*/
		//end block

		sync2
			.find(".owl-item")
			.removeClass("current")
			.eq(current)
			.addClass("current");
		var onscreen = sync2.find('.owl-item.active').length - 1;
		var start = sync2.find('.owl-item.active').first().index();
		var end = sync2.find('.owl-item.active').last().index();

		if (current > end) {
			sync2.data('owl.carousel').to(current, 100, true);
		}
		if (current < start) {
			sync2.data('owl.carousel').to(current - onscreen, 100, true);
		}
	}

	function syncPosition2(el) {
		if (syncedSecondary) {
			var number = el.item.index;
			sync1.data('owl.carousel').to(number, 100, true);
		}
	}

	sync2.on("click", ".owl-item", function (e) {
		e.preventDefault();
		var number = $(this).index();
		sync1.data('owl.carousel').to(number, 300, true);

	});
});
