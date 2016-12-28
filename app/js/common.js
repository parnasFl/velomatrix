
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
							centerMode: true,
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
									centerMode: false
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

		/*Item page 'similar-items' carousel- http://kenwheeler.github.io/slick/
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
		$('.js-config-toggle,.js-config-type').on('click', function(e){
			e.preventDefault();

			var $this       = $(this),
			container       = $this.closest('.config-panel'),
			menuContent     = container.find('.config-panel__menu-content'),
			menuTypeToggle  = container.find('.config-panel__menu-type--toggle'),
			menuItem        = container.find('.config-panel__item'),
			menuType        = container.find('.config-panel__menu-type'),
			menuContentWrap = container.find('.config-panel__menu-content-wrap');


			if($(window).width() > 767) {

				menuContent.toggleClass('toggle-open', 100)
					.promise()
					.done(function(){
						if(menuContentWrap.hasClass('toggle-visible')){
								menuContentWrap.removeClass('toggle-visible');
								$('body').find('.overlay2').remove();
								$('html, body').removeAttr('style');
								//menuContentWrap.removeClass('toggle-visible');
						}
						else {
							menuContentWrap.addClass('toggle-visible');

							$('body').append('<div class="overlay2"><a href="#"></a></div>');
							$('html, body').css({
									overflow: 'hidden',
									height: '100%'
							});
						}


					});

					menuItem.addClass('hide-hover-shadow');
					
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
						$('.config__inner').animate({ scrollTop: 0 }, "slow");
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

					}

				if(!menuContent.hasClass('toggle-open')) {
					menuItem.removeClass('hide-hover-shadow')
									.addClass('show-hover-shadow');
				}

				menuItem.addClass('hide-hover-shadow');
				
				if(menuItem.hasClass('opened')) {
					menuItem.removeClass('opened');
				}

				if(menuItem.find('.config-panel__menu-wrapper').hasClass('visible')) {
					menuItem.find('.config-panel__menu-wrapper').removeClass('visible');
				}

				if($('.config-panel__menu-title span').next('i').hasClass('tip-show')) {
					$('.config-panel__menu-title span').next('i').removeClass('tip-show');
				}
			}
			if($(window).width() < 768) {

				if($('.config').hasClass('show')) {
					$('.config').addClass('opened');

						if($('.config').hasClass('opened')) {
							$('.config').removeClass('show');
							menuContent.removeClass('toggle-open',100)
							.promise()
							.done(function(){
								menuContentWrap.removeClass('toggle-visible');

								$('body').find('.overlay2').remove();
								$('html, body').removeAttr('style');
								$('.config').removeClass('opened');

							
							});
						}
				}
			}
		});

		$('.config-panel__menu-options-wrapper *').hover(function(){
			var that = $(this);

			that.closest('.config-panel__menu-content')
						.toggleClass('menu-content__hover--input');
			that.closest('.config-panel__item').toggleClass('remove-pseudo-border');
		});
	})();

/*---------Config Menu inner accordion
	============================================*/
	(function(){

		$('.config-panel__menu-title span').on('click', function(){
			var $this = $(this).closest('.config-panel__menu-title');

			$this.next().stop(true, true).slideToggle();
			if($this.find('i').hasClass('tip-show')) {
				$this.find('i').stop(true, true).removeClass('tip-show');
			}
			else {
				$this.find('i').stop(true, true).addClass('tip-show');
			}
			
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


	
	
	/*---------Mobile Config Menu toggle
	============================================*/
	
	$('.config-toggle').on('click', function(e){
		e.preventDefault();

		var $this   = $(this),
		parent      = $('.config'),
		panel       = parent.find('.config-panel'),
		content     = panel.find('.config-panel__menu-content'),
		contentWrap = panel
									.find('.config-panel__menu-content-wrap'),
		item        = panel.find('.config-panel__item'),
		itemType    = panel.find('.config-panel__menu-type');

		parent.addClass('show');

		if(parent.hasClass('show')) {
			content.addClass('toggle-open',100)
			.promise()
			.done(function(){
				if(contentWrap.hasClass('toggle-visible')){
					contentWrap.removeClass('toggle-visible');
				}
				else {
					contentWrap.addClass('toggle-visible');

					$('body').append('<div class="overlay2"><a href="#"></a></div>');
					$('html, body').css({
							overflow: 'hidden',
							height: '100%'
					});
				}
			});


				item.addClass('hide-hover-shadow');
				
			if(content.hasClass('toggle-open')) {
				$('.config__inner').css({
					'box-shadow': '8px 0 8px rgba(0, 0, 0, 0.14)',
					'overflow-y' : 'scroll'
				});

				panel.find('.config-main-toggle')
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

				panel.find('.config-main-toggle')
								.find('img').attr({
															'src': 'img/icon-config-toggle.svg',
															'width' : '26',
															'height' : '31'
														});
				}

			if(!content.hasClass('toggle-open')) {
				item.removeClass('hide-hover-shadow')
								.addClass('show-hover-shadow');
			}
		}


		if(parent.hasClass('opened')) {
			$('.js-config-toggle').trigger('click');
		}
	});

	/*THis piece of script uses some code 
	from other script which is above actually these:*/
	
		// if($(window).width() < 768) {

		// 	if($('.config').hasClass('show')) {
		// 		$('.config').addClass('opened');

		// 			if($('.config').hasClass('opened')) {
		// 				$('.config').removeClass('show');
		// 				menuContent.removeClass('toggle-open',100)
		// 				.promise()
		// 				.done(function(){
		// 					menuContentWrap.removeClass('toggle-visible');
		// 					$('.config').removeClass('opened');
		// 				});
		// 			}//$('.config').hasClass('opened')
		// 	}//$('.config').hasClass('show')
		// }//($(window).width() < 768)
	

		/*---------Config icons hover sync 
		============================================*/
		(function(){
			$('.config-links__item, .catalog-item__conficons-item').mouseenter(function(){
				var that    = $(this),
				bodyWrapper = that.closest('.wrapper'),
				configPanel = bodyWrapper.find('.config-panel'),
				configItem  = configPanel.find('.config-panel__item'),
				data        = that.data('icon');

				$('.config-panel>li').each(function(index, element){
					if($(this).data('icon') === data) {
						$(this).addClass('icon-hover');
					}
					
				});
			}).mouseleave(function(){
				var that = $(this),
				bodyWrapper = that.closest('.wrapper'),
				configPanel = bodyWrapper.find('.config-panel'),
				configItem = configPanel.find('.config-panel__item'),
				data = that.data('icon');

				$('.config-panel>li').removeClass('icon-hover');
			});

		})();

		/*---------Config icons click sync
		============================================*/
		(function(){
			$('.config-links__item, .catalog-item__conficons-item').on('click', function(e){
				e.preventDefault();

				var that    = $(this),
				bodyWrapper = that.closest('.wrapper'),
				parent      = $('.config'),
				panel       = parent.find('.config-panel'),
				content     = panel.find('.config-panel__menu-content'),
				contentWrap = panel.find('.config-panel__menu-content-wrap'),
				item        = panel.find('.config-panel__item'),
				itemType    = panel.find('.config-panel__menu-type'),
				data        = that.data('icon');

				if ($(window).width() < 768) {
					if(parent.hasClass('show')) {
						parent.removeClass('show');

						
					}
					else {
						parent.addClass('show');
					}
				}

				content.toggleClass('toggle-open', 100)
					.promise()
					.done(function(){
						if(contentWrap.hasClass('toggle-visible')){
							contentWrap.removeClass('toggle-visible');
							
							$('body').find('.overlay2').remove();
							$('html, body').removeAttr('style');
						}
						else {
							contentWrap.addClass('toggle-visible');

							$('body').append('<div class="overlay2"><a href="#"></a></div>');
							$('html, body').css({
									overflow: 'hidden',
									height: '100%'
							});
						}
					});
				

				item.addClass('hide-hover-shadow');

				if(content.hasClass('toggle-open')) {
					$('.config__inner').css({
						'box-shadow': '8px 0 8px rgba(0, 0, 0, 0.14)',
						'overflow-y' : 'scroll'
					});

					$('.config-panel')
									.find('.config-main-toggle')
									.find('img').attr({
																'src': 'img/icon-close-2.svg',
																'width' : '14',
																'height' : '14'
															});
				} 
				else {
						$('.config__inner').animate({ scrollTop: 0 }, "slow");
						$('.config__inner').css({
						'box-shadow': 'none',
						'overflow' : 'hidden'
						});

						$('.config-panel__menu-wrapper').css({
							'display' : 'none'
						});

						$('.config-panel')
										.find('.config-main-toggle')
										.find('img').attr({
																	'src': 'img/icon-config-toggle.svg',
																	'width' : '26',
																	'height' : '31'
																});

				}
				if(content.hasClass('toggle-open')) {
					item.removeClass('hide-hover-shadow')
									.addClass('show-hover-shadow');
				}

				$('.config-panel>li').each(function(index, element){

					if($(this).data('icon') === data) {
						$(this).addClass('opened');
						var elem = $('.opened');

						if(elem.find('.config-panel__menu-wrapper').hasClass('visible')) {
							elem.find('.config-panel__menu-wrapper').css('display', 'none');
							$(this).find('.config-panel__menu-title span').next('i').removeClass('tip-show');
							elem.find('.config-panel__menu-wrapper').removeClass('visible');
						}
						else {
							$(this).find('.config-panel__menu-title span')
											.trigger('click');
											elem.find('.config-panel__menu-wrapper').addClass('visible');
						}
						
					}
					
				});

			});

		})();



	/*---------Item page Config panel opener link
	============================================*/
	(function(){
		$('.item-page__conf-link').on('click', function(e){
			e.preventDefault();

			var that      = $(this),
			container      = that.closest('.config-panel'),
			menuContent    = container.find('.config-panel__menu-content');

			// that.closest('.wrapper')
			// 			.find('.config').addClass('show');
			
			if (!menuContent.hasClass('toggle-open')) {
				$('.js-config-toggle').trigger('click');
			}
		});
		
		
		
	})();

	(function(){
		var timer;
		$('.item-page__conf-link').mouseenter(function(){
			var that    = $(this),
			bodyWrapper = that.closest('.wrapper'),
			configPanel = bodyWrapper.find('.config-panel'),
			configItem  = configPanel.find('.config-panel__item'),
			data        = that.data('icon');

			timer = setTimeout(function () {
				$('.config-panel>li:not(:first-child)').addClass('icon-hover');
				

			}, 500);
			

		}).mouseleave(function(){
			var that    = $(this),
			bodyWrapper = that.closest('.wrapper'),
			configPanel = bodyWrapper.find('.config-panel'),
			configItem  = configPanel.find('.config-panel__item'),
			data        = that.data('icon');

			 clearTimeout(timer);
			configItem.removeClass('icon-hover');
		});

	})();



	/*---------Config Menu hover red border
	============================================*/
	(function(){
		$('.config-panel__menu-content').mouseover(function(){
			
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

					var menu  = $('.main-nav__list'),
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
				// $('input').iCheck({
				// 	checkboxClass: 'icheckbox_polaris',
				// 	radioClass: 'iradio_polaris'
				// });
		})();

		/*---Desktop user sign in dropdown
		============================================*/
		(function(){
			if($(window).width() > 1023) {
				$('.top-bar__user').hover(function(){
					$(this).closest('.top-bar__user').find('ul').stop(true, true).slideToggle('fast');
				}, 500);
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
						}

						wrapper.addClass('mobile-side-menu');
						sideNav.addClass('side-menu-opened')
										.animate({
											left: 0
										},300, function(){
											var mainC = $('body'); // Updated * was '.main-content'
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
					if ($(window).width() < 768) {
						$('.page-support').slideToggle('fast');
					}
					
				});

			})();

			/*Mobile Footer Info block toggle
			==============================================*/

				(function(){
				
				$('.footer-info-block__title').on('click', function(){
					//console.log('test');
					if ($(window).width() < 768) {
						
						var $this = $(this),
								titleContainer = $this.closest('.footer-info-block'),
								titleContainerSib = titleContainer.siblings('.footer-info-block');



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
						.removeAttr('style');
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

			/* Catalog item hover
			==============================================*/
			
			$('.catalog-item__inner').hover(function(){
				$(this).addClass('shadowed');
				$(this).find('.catalog-item__arrow')
							.addClass('hovered');

			}, function(){
				$(this).removeClass('shadowed');
				$(this).find('.catalog-item__arrow')
							.removeClass('hovered');
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
			(function(){
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
			})();

			/*Sales Leader first Hover
			==============================================*/
			(function(){
				
					$('.bic-item__sales-leader').hover(function(){
						$(this).find('.sales-leader__arrow')
						.addClass('hovered');
					},function(){
						$(this).find('.sales-leader__arrow')
						.removeClass('hovered');
					});
					
				
			})();
			/*---------Main Menu items hover effect
			============================================*/
			(function(){
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
				},200);
				
				

			})();

			/*---------Item page options color choose
			============================================*/
			(function(){
				$('.options__color').on('click','.color-link',function(e){
					e.preventDefault();
					
					var color      = $(this).find('i').data('color'),
							otherColor = $(this).closest('.options__colors-item').siblings('.options__colors-item'),
							parent     = $(this).closest('.options__colors-item');
							$this      = $(this);



						otherColor.removeClass('selected');
						otherColor.find('.color-link').css('border-color', '#fff');
						parent.addClass('selected');

						if(parent.hasClass('selected')) {
							$this.css({
								'border-color' : color
							});
						}
				});

				$('.options__color').on('click','.color-text',function(e){
					e.preventDefault();
							
					var color      = $(this).siblings('.color-link').find('i').data('color'),
							otherColor = $(this).closest('.options__colors-item').siblings('.options__colors-item'),
							parent     = $(this).closest('.options__colors-item');
							$this      = $(this);

						otherColor.removeClass('selected');
						otherColor.find('.color-link').css('border-color', '#fff');
						parent.addClass('selected');

						if(parent.hasClass('selected')) {
							$this.siblings('.color-link').css({
								'border-color' : color
							});
						}
				});
			})();
			

			/*---------Item page size choose
			============================================*/
			$('.options__size').on('click','.options__list-item a',function(e){
				e.preventDefault();
				
				var otherSize = $(this).closest('.options__list-item').siblings('.options__list-item'),
						parent    = $(this).closest('.options__list-item');
						$this     = $(this);

					otherSize.removeClass('selected');
					parent.addClass('selected');

			});
			/*---------Main page cats hover
			============================================*/
			(function(){
				$('.category-item').hover(function() {
					$(this).find('.category-item__desc').toggleClass('hover');
				});

			})();

			/*---------Config icons sync hover
			============================================*/
			(function(){
				$('.item-carousel .catalog-item').mouseover(function(){
					var that = $(this);

					 that.closest('.slick-list').css('overflow', 'visible');
					 that.closest('.item-carousel')
					 				.siblings('.item-carousel')
					 				.addClass('zi');
				}).mouseout(function(){
					var that = $(this);

					 that.closest('.slick-list').css('overflow', 'hidden');
					 that.closest('.item-carousel')
					 				.siblings('.item-carousel')
					 				.removeClass('zi');
				});

			})();

			/*---------Menu dropdown
			============================================*/
			(function(){
					$('.dropdown__submenu-header').hover(function(){

						var that    = $(this),
						subCatType  = that.closest('.dropdown__inner-item').data('type'),
						brandList   = that.closest('.main-nav__dropdown-menu__inner')
														.find('.dropdown-extra__brand-list'),
						subCatDescr = that.closest('.main-nav__dropdown-menu__inner')
														.find('.subcategory-descr');

						brandList.hide();
						if(subCatDescr.hasClass(subCatType)) {
							$("."+subCatType).stop(true,true).fadeIn(50);
							$("."+subCatType).addClass('active');
						}
						
					},function(){
						var that    = $(this),
						subCatType  = that.closest('.dropdown__inner-item').data('type'),
						brandList   = that.closest('.main-nav__dropdown-menu__inner')
														.find('.dropdown-extra__brand-list'),
						subCatDescr = that.closest('.main-nav__dropdown-menu__inner')
														.find('.subcategory-descr');

						if(subCatDescr.hasClass('active')) {
							$("."+subCatType).removeClass('active');
								$("."+subCatType).fadeOut(50, function(){
									if(!subCatDescr.hasClass('active')) {
										brandList.stop(true, true).delay(2000).show();
									}
								});
						}

					}, 500);

					// For Dropdown menu subcat links hover
					$('.dropdown__submenu-pic').hover(function() {
						$(this).siblings('.dropdown__submenu-title').toggleClass('hover');
					});

					// For Dropdown menu subcat links description show

					$('.dropdown__submenu-item').hover(function(){

						var that       = $(this),
						subLinkCatType = that.data('subtype'),
						brandList      = that.closest('.main-nav__dropdown-menu__inner')
														.find('.dropdown-extra__brand-list'),
						subCatDescr    = that.closest('.main-nav__dropdown-menu__inner')
														.find('.subcategory-descr');

						brandList.hide();
						if(subCatDescr.hasClass(subLinkCatType)) {
							$("."+subLinkCatType).stop(true,true).fadeIn(50);
							$("."+subLinkCatType).addClass('active');
						}
					},function(){
						var that       = $(this),
						subLinkCatType = that.data('subtype'),
						brandList      = that.closest('.main-nav__dropdown-menu__inner')
														.find('.dropdown-extra__brand-list'),
						subCatDescr    = that.closest('.main-nav__dropdown-menu__inner')
														.find('.subcategory-descr');

						if(subCatDescr.hasClass('active')) {
							$("."+subLinkCatType).removeClass('active');
								$("."+subLinkCatType).fadeOut(50, function(){
									if(!subCatDescr.hasClass('active')) {
											brandList.delay(2000).stop(true,true).show();
									}
								});
						}

					}, 500);

			})();


			/*---------Custom scroll - http://noraesae.github.io/perfect-scrollbar/
			============================================*/
			(function(){
				$('.config__inner').perfectScrollbar();
			})();


			/*---------White Overlay click
			============================================*/
			(function(){
				$('body').on('click','.overlay2 a',function(e){
					e.preventDefault();

					var configItem     = $('.config-panel__item'),
							menuContent    = $('.config-panel__menu-content'),
							configInner    = $('.config__inner'),
							configMenuWrap = $('.config-panel__menu-wrapper');
					
					$('body').find('.overlay2').remove();
					$('html, body').removeAttr('style');

					menuContent.removeClass('toggle-open');
					$('.config-panel__menu-content-wrap').removeClass('toggle-visible');

					configInner.animate({ scrollTop: 0 }, "slow");
					configInner.css({
					'box-shadow': 'none',
					'overflow' : 'hidden'
					});

					$('.config-panel').find('.config-main-toggle')
														.find('img').attr({
																						'src': 'img/icon-config-toggle.svg',
																						'width' : '26',
																						'height' : '31'
																					});
						configItem.find('.config-panel__menu-wrapper').css('display', 'none');

					if ($(window).width() < 768) {
						if($('.config').hasClass('show')) {
							$('.config').removeClass('show');
						}
					}

					if(configItem.hasClass('opened')) {
						configItem.removeClass('opened');
					}

					if(configMenuWrap.hasClass('visible')) {
						configItem.find('.config-panel__menu-wrapper').css('display', 'none');
						configItem.find('.config-panel__menu-title span').next('i').removeClass('tip-show');
						configItem.find('.config-panel__menu-wrapper').removeClass('visible');
					}

				});
			})();

			/*---------Checkout coupon enter
			============================================*/

			(function(){

				$('.coupon__btn').on('click', function(e){
					e.preventDefault();

					var that = $(this),
							couponEnter = $('.checkout-coupon-container');

					couponEnter.slideToggle('fast', function(){
						if(that.hasClass('bd-bottom')) {
							that.removeClass('bd-bottom');
						}
						else {
							that.addClass('bd-bottom');
						}
					});
				});

			})();

			/*---------Checkout choose shipping
			============================================*/

			(function(){

				var $shippingType = $('input:radio[class=js-checkoutSelect]');

			$shippingType.on('change', function(event){
					var that = $(this),
							parent = that.closest('.shipping-type'),
							siblings = parent.siblings('.shipping-type');

							if(!parent.hasClass('checked')) {
								parent.addClass('checked');
								parent.css('border-color', '#6699cc');
							}
							if (siblings.hasClass('checked')) {
								siblings.removeClass('checked');
								siblings.css('border-color', '#e5e5e5');
							}
				});

				

			})();

			/*---------Checkout register new user
			============================================*/

			(function(){

				var $checkStep1 = $('input:checkbox[id=regCheckout]');

			 $checkStep1.on('change', function(event){
					var that = $(this),
							parent = that.closest('.reg-info__top'),
							step1Form = parent.find('.no-reg__form-wrapper.new-user');

							step1Form.slideToggle();
				});

				

			})();

			/*---------Account nav
			============================================*/
			(function(){

				$('.account-nav__toggle').on('click', function(e){

					var parent = $('.account__header'),
							menu = $('.account__nav');

						if($(window).width() < 1024) {
							e.preventDefault();
							
							menu.slideToggle(300);
							$(this).toggleClass('toggle-close');
						}

				});

			})();

			/*---------Account table row hover
			============================================*/
			(function(){
				if($(window).width() > 1023) {
					$('.account-order__detail-btn').hover(function(){
						$(this).closest('.order-history__list-row')
										.toggleClass('hover-shadow');
					});
				}

			})();
			/*---------Compare page
			============================================*/

			(function(){
				$('.compare-slider__js-container').slick({
					accessibility: false,
					slidesToShow: 5,
					slidesToScroll: 1,
					dots: false,
					responsive: [
					{
						breakpoint: 1023,
						settings: {
							vertical: false,
							//slidesToShow: 3,
							slidesToScroll: 1,
							variableWidth: true,
							centerMode: false
						}
					},
					{
						breakpoint: 767,
						settings: {
							//slidesToShow: 1,
							vertical: false,
							slidesToScroll: 1,
							dots: false,
							variableWidth: true,
							centerMode: false
						}
					}
					]
				});

			})();
			/*---------Compare page
			============================================*/
			(function(){
				$('.compare-slide-header').equalHeights();
			})();
			
}); // Jquery $ Function ...similar-items


































