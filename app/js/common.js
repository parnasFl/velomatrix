/*Slick based Slider*/
// (function(){
// 	$('.main-slider--js').slick({
// 		infinite: true,
// 		slidesToShow: 1,
// 		slidesToScroll: 1,
// 		arrows: true,
// 		dots: true
// 	});
// })();

$(function(){
	//Config
	(function(){
		$('.config-main-toggle, .config-panel__menu-type-link')
		.on('click', function(e){
			e.preventDefault();

			var $this = $(this),
			container = $this.closest('.config-panel'),
			menuContentAll = container.
											find('.config-panel__menu-content--toggle',
													'.config-panel__menu-content'),
			menuContent =  container.
											find('.config-panel__menu-content'),
			menuTypeToggle = container
											.find('.config-panel__menu-type--toggle'),
			menuItem = container
											.find('.config-panel__item'),
			menuType = container
											.find('.config-panel__menu-type'),
			menuContentWrap = container
											.find('.config-panel__menu-content-wrap');


			// menuContent.toggleClass('toggle-open');

			// $('.config-panel__menu-content-wrap').css({
			// 	'visibilty' : 'visible'
			// });
			$this.parent().addClass('current');
			menuContent.toggleClass('toggle-open', 300)
				.promise()
				.done(function(){
					if(menuContentWrap.hasClass('toggle-visible')){
						menuContentWrap.removeClass('toggle-visible');
					}
					else {
						menuContentWrap.addClass('toggle-visible');
					}

					if ($('.config__inner').hasClass('make-it-scroll')) {
						$('.config__inner').removeClass('make-it-scroll');
					}
					else {
						$('.config__inner').addClass('make-it-scroll');
						 $("html, body").animate({ scrollTop: 0 }, "slow");
					}
				});

				menuItem.addClass('hide-hover-shadow');
				
			//menuItem.toggleClass('.remove-pseudo-border');

			if(menuContent.hasClass('toggle-open')) {
				$('.config__inner').css({
					'box-shadow': '8px 0 8px rgba(0, 0, 0, 0.14)',
					'overflow' : 'visible'
				});
			} else {
				$('.config__inner').css({
				'box-shadow': 'none',
				'overflow' : 'hidden'
				});

				$('.config-panel__menu-wrapper').css({
					'display' : 'none'
				});
			};

			if(!menuContent.hasClass('toggle-open')) {
				menuItem.removeClass('hide-hover-shadow')
								.addClass('show-hover-shadow');
			}

		});

	})();

//COnfig inner accordion
	(function(){

		$('.config-panel__menu-title').on('click', function(){
			var $this = $(this)

			$this.next().slideToggle();
			$this.find('i').toggleClass('tip-show');
		});

		$('.config-panel__menu-title i').mouseover(function(){
			$(this).siblings("div").toggle();
		})
		.mouseout(function(){
			$(this).siblings("div").toggle();
		});
	})();

/*Config Menu hover red border*/

	(function(){
		$('.config-panel__menu-content').mouseover(function(){
			//$(this).siblings("div").toggle();
			$(this).addClass('menu-content__hover');
			$(this).closest('.config-panel__item').css({
				'box-shadow' : 'none'
			}).addClass('remove-pseudo-border');
		}).mouseout(function(){
			$(this).removeClass('menu-content__hover')
							.closest('.config-panel__item')
							.removeClass('remove-pseudo-border');
		});
	})();
});
