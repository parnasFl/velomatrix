/*Slick based Slider*/
$(document).ready(function(){
	// $('.main-slider--js').slick({
	// 		autoplay: true,
	// 		dots: true,
	// 		accessibility: false,
	// 		slidesToShow: 1,
	// 		slidesToScroll: 1,
	// 		responsive: [{
	// 				breakpoint: 767,
	// 				settings: {
	// 						arrows:false
	// 				}
	// 		}]
	// 	});
});

$(function(){
	/*---------Index Slider - http://kenwheeler.github.io/slick/
		============================================*/

	(function(){
		$('.main-slider--js').slick({
			autoplay: true,
			dots: true,
			accessibility: false,
			responsive: [{
					breakpoint: 767,
					settings: {
							arrows:false
					}
			}]
		});


		

	})();
		//#config
	/*---------Item page carousel - http://kenwheeler.github.io/slick/
		============================================*/
		(function(){
				$('.slideshow__thumbs-link').on('click', function(e){
					e.preventDefault();
				});
			$('.slideshow__image-wrap').slick({
							slidesToShow: 1,
							slidesToScroll: 1,
							arrows: false,
							fade: true,
							asNavFor: '.slideshow__thumbs',
							accessibility: false,
							responsive: [{
									breakpoint: 1023,
									settings: {
											slidesToShow: 1,
											slidesToScroll: 1
									}
							}, {
									breakpoint: 767,
									settings: {
											slidesToShow: 1,
											slidesToScroll: 1,
											arrows: false,
											dots: true,
											asNavFor: null
									}
							}]
					});
					$('.slideshow__thumbs').slick({
							// rows: 2,
							slidesToShow: 5,
							slidesToScroll: 1,
							asNavFor: '.slideshow__image-wrap',
							dots: false,
							arrows: true,
							//centerMode: true,
							focusOnSelect: true,
							vertical: true,
							accessibility: false,
							responsive: [
							{
								breakpoint: 1023,
								settings: {
									vertical: false,
									slidesToShow: 4,
									slidesToScroll: 1,
									//centerMode: true
								}
							},
							{
								breakpoint: 767,
								settings: {
									vertical: false,
									slidesToScroll: 1,
									dots: false,
									asNavFor: null
								}
							}
							]
					});
		})();

		/*Item page 'also-buyed' carousel- http://kenwheeler.github.io/slick/
			============================================*/
			(function(){
				$('.also-buyed__carousel-wrap').slick({
					infinite: true,
					slidesToShow: 4,
					slidesToScroll: 1,
					accessibility: false,
					dots: false,
					responsive: [
					{
						breakpoint: 1023,
						settings: {
							infinite: true,
							slidesToShow: 3,
							slidesToScroll: 1
						}
					},
					{
						breakpoint: 767,
						settings: {
							infinite: true,
							slidesToScroll: 1,
							slidesToShow: 1,
							dots: false
						}
					}
					]
				});
			})();

		/*Item page 'also-buyed' carousel- http://kenwheeler.github.io/slick/
			============================================*/
			(function(){
				$('.similar-items__carousel-wrap').slick({
					infinite: true,
					slidesToShow: 4,
					slidesToScroll: 1,
					accessibility: false,
					dots: false,
					responsive: [
					{
						breakpoint: 1023,
						settings: {
							infinite: true,
							slidesToShow: 3,
							slidesToScroll: 1
						}
					},
					{
						breakpoint: 767,
						settings: {
							infinite: true,
							slidesToScroll: 1,
							slidesToShow: 1,
							dots: false
						}
					}
					]
				});
			})();

	/*---------Config Menu
	============================================*/

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



			//$this.parent().addClass('current');
			menuContent.toggleClass('toggle-open', 100)
				.promise()
				.done(function(){
					if(menuContentWrap.hasClass('toggle-visible')){
						menuContentWrap.removeClass('toggle-visible');
					}
					else {
						menuContentWrap.addClass('toggle-visible');
					}

					// if ($('.config__inner').hasClass('make-it-scroll')) {
					// 	$('.config__inner').removeClass('make-it-scroll');
					// }
					// else {
					// 	$('.config__inner').addClass('make-it-scroll');
					// 	 $("html, body").animate({ scrollTop: 0 }, "slow");
					// }
					//above code is commented for enabling overflow scroll!!!!
				});

				menuItem.addClass('hide-hover-shadow');
				
			//menuItem.toggleClass('.remove-pseudo-border');

			if(menuContent.hasClass('toggle-open')) {
				$('.config__inner').css({
					'box-shadow': '8px 0 8px rgba(0, 0, 0, 0.14)',
					'overflow-y' : 'scroll'
				});

				$(this).closest('.config-panel')
								.find('.config-main-toggle')
								.find('img').attr({
															'src': 'img/icon-close-2.svg',
															'width' : '14',
															'height' : '14'
														});
				} else {
				$('.config__inner').css({
				'box-shadow': 'none',
				'overflow' : 'hidden'
				});

				$('.config-panel__menu-wrapper').css({
					'display' : 'none'
				});

				$(this).closest('.config-panel')
								.find('.config-main-toggle')
								.find('img').attr({
															'src': 'img/icon-config-toggle.svg',
															'width' : '26',
															'height' : '31'
														});
					// $(this).closest('.config-panel')
					// .find('.form-submit').addClass('border-bottom');
				}

			if(!menuContent.hasClass('toggle-open')) {
				menuItem.removeClass('hide-hover-shadow')
								//.removeClass('border-bottom')
								.addClass('show-hover-shadow');

				// menuItem.closest('.config-panel')
				// .find('.form-submit').removeClass('border-bottom');
			}

		});

	})();

/*---------Config Menu inner accordion
	============================================*/
	(function(){

		$('.config-panel__menu-title span').on('click', function(){
			var $this = $(this).closest('.config-panel__menu-title');

			$this.next().stop(true, true).slideToggle();
			$this.find('i').stop(true, true).toggleClass('tip-show');
		});

		// Config Menu inner accordion tooltip

		if ($(window).width() > 1023) {
			$('.config-panel__menu-title i').hover(function(){
				$(this).find('div')
				.stop(true, true)
				.slideToggle('fast');
			}, 400);
		}

		if ($(window).width() < 1024) {
			$('.config-panel__menu-title i').click(function(){
				$(this)
				.find('div')
				.stop(true, true)
				.slideToggle('fast');
			});
		}

	})();


	/*---------Config Menu hover red border
	============================================*/
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

	/*---------Config Menu '.show-more' button script
	============================================*/
	(function(){
		$('.show-more').on('click', function(e){
			e.preventDefault();
			$this = $(this);

			if(!$this.hasClass('showed')) {
				$this.addClass('showed')
							.closest('.config-panel__menu-list')
							.find('.config-panel__menu-item')
							.addClass('show-all');
				$this.find('span').text('скрыть');
			}
			else {
				$this.removeClass('showed')
						.closest('.config-panel__menu-list')
						.find('.config-panel__menu-item')
						.removeClass('show-all');

				$this.find('span').text('показать еще');
			}
			

			
		});
	})();
	
	/*---------Mobile Config Menu toggle
	============================================*/
	
	$('.config-toggle').on('click', function(e){
		e.preventDefault();

		var $this = $(this),
		container = $this.closest('.config-panel'),
		menuContentAll = container.
										find('.config-panel__menu-content--toggle',
												'.config-panel__menu-content'),
		menuContent =  container.
										find('.config-panel__menu-content');

		$(this).closest('.wrapper')
					.find('.config').addClass('show');
		
		if (!menuContent.hasClass('toggle-open')) {
			$('.config-main-toggle, .config-panel__menu-type-link')
			.trigger('click');
		}
	});

	(function(){
		$('.item-page__conf-link').on('click', function(e){
			e.preventDefault();

			var $this = $(this),
			container = $this.closest('.config-panel'),
			menuContentAll = container.
											find('.config-panel__menu-content--toggle',
													'.config-panel__menu-content'),
			menuContent =  container.
											find('.config-panel__menu-content');

			$(this).closest('.wrapper')
						.find('.config').addClass('show');
			
			if (!menuContent.hasClass('toggle-open')) {
				$('.config-main-toggle, .config-panel__menu-type-link')
				.trigger('click');
			}
		});
		
		
		
	})(); //
	

	
		/*---------Tablet & Mobile Menu
		============================================*/
		(function(){

			$('.main-nav__link').on('click', function(e){
				var menuItem = $(this).closest('.main-nav__item');

				if(menuItem.has('.main-nav__dropdown-menu').length) {



					if($(window).width() < 1023) {
						e.preventDefault();
						

						if($('.main-nav').hasClass('open-category')) {
							$('.main-nav').removeClass('open-category');
						}

						$('.main-nav__list').css('top', '90px');

						$('.main-nav').addClass('open-category');
						menuItem.siblings().removeClass('opened-category');
						menuItem.addClass('opened-category');
						
						$('.catalog-button__icon img')
							.attr('src','img/icon-back.svg');

						$('.catalog-button__text')
							.text('Назад');



						//$('.category-name').css('display', 'block').removeAttr('href');
						$('.category-name').show().removeAttr('href');

						$('.category-name__text')
							.text($(this).find('.main-nav__link-text').text());
						
					}

					if($(window).width() < 768) {
						$('.main-nav__list').css({
							'padding-top' : '20px',
							'top'         : '83px'
						});
					}

				}
				
			}); // $('.main-nav__link').on('click', function(e){

				/*Subcategory scripting
				==============================================*/

				$('.dropdown__submenu-pic, .dropdown__submenu-title')
					.on('click', function(e){
					var subMenuItem = $(this).closest('.dropdown__inner-item');

					if(subMenuItem.has('.dropdown__submenu-list').length) {



						if($(window).width() < 1023) {
							e.preventDefault();
							

							if($('.main-nav').hasClass('open-subcategory')) {
								$('.main-nav').removeClass('open-subcategory');
							}

							$('.main-nav__list').css('top', '90px');

							$('.main-nav').addClass('open-subcategory');

							subMenuItem.siblings().removeClass('opened-subcategory');
							subMenuItem.addClass('opened-subcategory');
							
							$('.category-name__text')
								.text($(this).
														closest('.dropdown__submenu')
														.find('.dropdown__submenu-title')
														.text()
											);
							
						}

						if($(window).width() < 768) {
							$('.main-nav__list').css({
								'padding-top' : '20px',
								'top'         : '83px'
							});
						}

					}
					
				}); 
				

			/*Catalog button clicking events
			==============================================*/
			$('.catalog-button').on('click', function(e){

				if($(window).width() < 1023) {
					e.preventDefault();

					var menu = $('.main-nav__list'),
							$this = $(this);

					if(!$('.main-nav').hasClass('open-category')) {
						

						if(!$this.hasClass('menu-opened')) {
							$this.addClass('menu-opened');

							$this.find($('.catalog-button__icon img'))
								.attr({
									'src':'img/icon-close.svg',
									'width' : '10',
									'height' : '10'
								});

							menu.stop(true, true).slideDown();
						}
						else {
							$this.removeClass('menu-opened');

							$this.find($('.catalog-button__icon img'))
								.attr({
									'src':'img/icon-catalog-mobile.svg',
									'width' : '10',
									'height' : '10'
								});

							menu.stop(true,true).slideUp(300, function(){
								menu.removeAttr('style');
							});

						}
					}

					else {

						if($('.main-nav').hasClass('open-subcategory')) {

							var catName = $('.opened-subcategory').closest('.main-nav__dropdown-menu')
																		.next('.main-nav__link')
																		.find('.main-nav__link-text')
																		.text();
							$('.category-name__text').text(catName);

							$('.main-nav').removeClass('open-subcategory');
							$('.dropdown__inner-item').removeClass('opened-subcategory');

						}

						else {
							$('.category-name').removeAttr('style'); // delete display: block
							$('.catalog-button__text')
								.text('Каталог товаров');

							$('.catalog-button__icon img')
								.attr({
									'src':'img/icon-close.svg',
									'width' : '10',
									'height' : '10'
								});

							$('.main-nav').removeClass('open-category');
							$('.main-nav__list').removeAttr('style') // remove display: none
							.css({
								'display' : 'block'
							});
						}
					}
					
				}
			}); //$('.catalog-button').on('click', function(e){


		})();

		/*---Custom checkboxes&radio - http://icheck.fronteed.com/
		============================================*/

		(function(){
			$('input').iCheck({
				checkboxClass: 'icheckbox_polaris',
				radioClass: 'iradio_polaris'
				//increaseArea: '-10%' // optional
			});
		})();

		/*---Desktop user sign in dropdown
		============================================*/
		(function(){
			if($(window).width() > 1023) {
				$('.top-bar__user').hover(function(){
					$(this).closest('.top-bar__user').find('ul').stop(true, true).slideToggle('fast');
				});
			}
		})();

				/*---------Mobile side menu
		============================================*/
		(function(){

			$('.top-bar__toggle').on('click', function(e){

				var wrapper = $('.wrapper'),
						sideNav = $('.top-bar__nav');

					if($(window).width() < 1024) {
						e.preventDefault();
						
						if(wrapper.hasClass('mobile-side-menu')) {
							wrapper.removeClass('mobile-side-menu');
							//$('.config').removeClass('make-invisible');
						}

						wrapper.addClass('mobile-side-menu');
						//$('.config').addClass('make-invisible');
						sideNav.addClass('side-menu-opened')
										.animate({
											left: 0
										},300, function(){
											var mainC = $('.main-content');
											if(mainC.has('.overlay')) {
												$('.overlay').remove();
											}
											mainC.append('<div class="overlay"></div>');
											$('html, body').css({
													overflow: 'hidden',
													height: '100%'
											});
										});

						$(".top-bar__nav.side-menu-opened")
							.height( wrapper.height() );
					}

			}); // $('.top-bar__toggle').on('click', function(e){

				/* Личный кобинет
				==============================================*/

				$('.top-bar__user-link').on('click', function(e){

					var wrapper = $('.wrapper'),
							sideNav = $('.top-bar__nav');

					if(sideNav.hasClass('side-menu-opened')) {

						if($(window).width() < 1024) {
							e.preventDefault();
							
							sideNav.addClass('user-acc-open');
							$(this).closest('.top-bar__user')
											.siblings('.mobile-menu-header')
											.find('.mobile-menu__title').text('назад');
						}
					}
				}); 
				

			/*Back and close button of side menu
			==============================================*/
			$('.mobile-menu__close-btn').on('click', function(e){
							
				var wrapper = $('.wrapper'),
						sideNav = $('.top-bar__nav');

				if($(window).width() < 1023) {
					e.preventDefault();

					var $this = $(this);

					if(sideNav.hasClass('user-acc-open')) {
						sideNav.removeClass('user-acc-open');
						$(this).next().text('меню');
					}
					else {
						
						sideNav.animate({
											left: -300
										},300, function(){
											wrapper.removeClass('mobile-side-menu');
											sideNav.removeClass('side-menu-opened')
															.removeAttr('style');
											$('.overlay').remove();
											$('html, body').css({
												overflow: 'auto',
												height: 'auto'
											});
										});

										
										
					}
				}
			});

			})();

			/*Mobile search toggle
			==============================================*/
			(function(){
				$('.top-bar__search-toggle').on('click', function(e){
					e.preventDefault();
					$('.page-search').stop(true, true).slideToggle('fast', function(){
							if($('.page-search').is(':hidden')) {
								$('.page-search').removeAttr('style');
							}
					});
				});

				$('.search__delete').on('click', function(e){
					e.preventDefault();
					$('.page-search').slideUp('fast', function(){
						$('.page-search').removeAttr('style');
					});
				});
			})();

			/*Mobile phone toggle
			==============================================*/
			(function(){
				$('.top-bar__phone-toggle').on('click', function(e){
					e.preventDefault();

					$('.page-support').slideToggle('fast');
				});

			})();

			/*Mobile Footer Info block toggle
			==============================================*/

				(function(){
				
				$('.footer-info-block__title').on('click', function(){
					//console.log('test');
					if ($(window).width() < 768) {
						
						var $this = $(this),
								titleContainer = $this
																.closest('.footer-info-block'),
								titleContainerSib = titleContainer
																		.siblings('.footer-info-block');



						titleContainerSib.find('dt').slideUp(500, function(){
							titleContainerSib.find('.footer-info-block__title')
							.removeClass('plus');
							titleContainerSib.find('dt').slideUp(300, function(){
								//titleContainerSib.find('dt').removeAttr('style');
							});
						});


						if(!$this.hasClass('plus')) {
							$this.parent().next('dt').slideDown(500, function(){
								$this.addClass('plus');
							});
						}
						else {
							$this.parent().next('dt').slideUp(500, function(){
								$this.removeClass('plus');
								$this.parent().next('dt').removeAttr('style');
							});
						}
					}
				});

			})();

			/*Catalog Menu Hover
			==============================================*/
			(function(){
				
					$('.catalog-menu__image').hover(function(){
						$(this).siblings('.catalog-menu__content')
						.find('.catalog-menu__name')
						.stop(true, true)
						.css('color', '#6699cc');
					},function(){
						$(this).siblings('.catalog-menu__content')
						.find('.catalog-menu__name')
						.stop(true, true)
						.css('color', '#000');
					});
				
			})();
			//$('.catalog-menu__image');

			(function(){
				$('.catalog-menu__name').mouseover(function(){
					$(this).closest('.catalog-menu__item')
									.find('.catalog-menu__image')
									.addClass('hovered');
				}).mouseout(function(){
					$(this).closest('.catalog-menu__item')
									.find('.catalog-menu__image')
									.removeClass('hovered');
				});

			})();

			/* Catalog config icons hover
			==============================================*/

			// (function(){
			// 	$('.catalog-item__conficons-link').mouseover(function(){
			// 		$(this).closest('.catalog-item__conficons-list')
			// 		.find('.catalog-item__conficons-item')
			// 									.removeClass('hide-all');
			// 	});
			// 	// $('.catalog-item__conficons').mouseout(function(){
			// 	// 	$(this).find('.catalog-item__conficons-item')
			// 	// 						.addClass('hide-all');
			// 	// });

			// })();

			/* Catalog item hover
			==============================================*/
			// $('.catalog-item__images, .catalog-item__inner, .catalog-item ,.catalog-item__title').hover(function(){
			// 	$(this).closest('.catalog-item__inner')
			// 				.addClass('shadowed');
			// 	$(this).closest('.catalog-item__inner')
			// 				.find('.catalog-item__arrow')
			// 				.addClass('hovered');
			// 	$(this).closest('.catalog-item__inner')
			// 				.find('.catalog-item__conficons-item')
			// 				.removeClass('hide-all');

			// }, function(){
			// 	$(this).closest('.catalog-item__inner')
			// 				.removeClass('shadowed');
			// 	$(this).closest('.catalog-item__inner')
			// 				.find('.catalog-item__arrow')
			// 				.removeClass('hovered');
			// 	$(this).closest('.catalog-item__inner')
			// 				.find('.catalog-item__conficons-item')
			// 				.addClass('hide-all');
			// });


			$('.catalog-item__inner').hover(function(){
				$(this).addClass('shadowed');
				$(this).find('.catalog-item__arrow')
							.addClass('hovered');
				// $(this).find('.catalog-item__conficons-item')
				// 			.removeClass('hide-all');

			}, function(){
				$(this).removeClass('shadowed');
				$(this).find('.catalog-item__arrow')
							.removeClass('hovered');
				// $(this).closest('.catalog-item__inner')
				// 			.find('.catalog-item__conficons-item')
				// 			.addClass('hide-all');
			});


			/* Styling Select - http://selectric.js.org/
			==============================================*/
			(function(){
				$('.styled select').selectric();

				$('.catalog-list__filter-settings select').selectric();
			})();


			/*---------Search button hover
			============================================*/
			(function(){
				$('.search__btn').mouseover(function(){
					$(this).find('img').attr({
						'src':'img/icon-search-hover.svg'
					});
				}).mouseout(function(){
					$(this).find('img').attr({
						'src':'img/icon-search.svg'
					});
				});

			})();

			/*---------Config hover
			============================================*/
			(function(){
				// $('.config-links__link').mouseover(function(){
				// 	$(this).closest('.wrapper')
				// 				.find('.config')
				// 				.children('');
				// }).mouseout(function(){
				// 	$(this).find('img').attr({
				// 		'src':'img/icon-search.svg'
				// 	});
				// });

			})();


			/*---------Config icons hover display
			============================================*/
			(function(){
				$('.config-links__item').hover(function(){
					$(this)
					.find('.config-icon-tooltip')
					.stop(true, true)
					.slideToggle('fast');
				}, 200);

			})();

			/*---------Catalog Config icons hover display
			============================================*/
			(function(){
				$('.catalog-item__conficons-item').hover(function(){
					$(this)
					.find('.config-icon-tooltip')
					.stop(true, true)
					.slideToggle('fast');
				}, 500);

			})();

			/*---------Options panel tooltip
			============================================*/
			(function(){
				if ($(window).width() > 1023) {
					$('.options__size-title span').hover(function(){
						$(this)
						.find('.options-tooltip')
						.stop(true, true)
						.slideToggle('fast');
					}, 300);
				}

				if ($(window).width() < 1024) {
					$('.options__size-title span').click(function(){
						$(this)
						.find('.options-tooltip')
						.stop(true, true)
						.slideToggle('fast');
					});
				}
			
			})();

			/*---------Show more cats
			============================================*/
			$('.show-more-cats').on('click',function(e){
				e.preventDefault();

				if(!$('.bic-item').hasClass('show-more-items')) {
					$(this).siblings('.bic-item')
									.addClass('show-more-items');
				}
				else {
					$(this).siblings('.bic-item')
									.removeClass('show-more-items');
				}
			});

			/*Sales Leader first Hover
			==============================================*/
			(function(){
				
					$('.sales-leader__img, .sales-leader__title').hover(function(){
						$(this).closest('.bic-item__sales-leader')
						.find('.sales-leader__arrow')
						.addClass('hovered');
					},function(){
						$(this).closest('.bic-item__sales-leader')
						.find('.sales-leader__arrow')
						.removeClass('hovered');
					});
				
			})();

			/*Custom scroll
			==============================================*/
			(function(){
				// $('.config__inner').niceScroll({
				// 	cursorcolor:"#e5e5e5",
				// 	cursorwidth: "5px",
				// 	 horizrailenabled: false
				// });

				 // $("body").niceScroll();
				
				// $(".config__inner").mouseover(function() {
				//     $(".config__inner").getNiceScroll().resize();
				// });
			})();

			/*---------Main Menu items hover effect
			============================================*/
			(function(){
				//if($('.main-nav__dropdown-menu').length) {
					$('.main-nav__item').hover(function(){
						var thisDropdown = $(this).find('.main-nav__dropdown-menu');
						if(thisDropdown.length) {
							$(this).siblings('.main-nav__item')
											.find('.main-nav__link-text')
											.addClass('hovered');
						}
						
					}, function(){
						$(this).siblings('.main-nav__item')
										.find('.main-nav__link-text')
										.removeClass('hovered');
					// 					.animate({
					// 						opacity: 1
					// 					}, 300);
					},200);
				//}
				

			})();

			/*---------Item page options color choose
			============================================*/
			$('.options__color').on('click','.color-link',function(e){
				e.preventDefault();
				
				var color = $(this).find('i').data('color'),
						otherColor = $(this).closest('.options__colors-item')
								.siblings('.options__colors-item'),
						parent = $(this).closest('.options__colors-item');
						$this = $(this);

					otherColor.removeClass('selected');
					otherColor.find('.color-link').css('border-color', '#fff');
					parent.addClass('selected');

					if(parent.hasClass('selected')) {
						$this.css({
							'border-color' : color
						});
					}
			});

			/*---------Item page size choose
			============================================*/
			$('.options__size').on('click','.options__list-item a',function(e){
				e.preventDefault();
				
				var otherSize = $(this).closest('.options__list-item')
								.siblings('.options__list-item'),
						parent = $(this).closest('.options__list-item');
						$this = $(this);

					otherSize.removeClass('selected');
					parent.addClass('selected');

			});
			/*---------HIde slider images until load of document
			============================================*/
			$(window).load(function(){
				//$('.slideshow__image-item img').css();
			});

}); // Jquery $ Function


































