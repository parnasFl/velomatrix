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
			}

			if(!menuContent.hasClass('toggle-open')) {
				menuItem.removeClass('hide-hover-shadow')
								.addClass('show-hover-shadow');
			}

		});

	})();

/*---------Config Menu inner accordion
	============================================*/
	(function(){

		$('.config-panel__menu-title').on('click', function(){
			var $this = $(this);

			$this.next().slideToggle();
			$this.find('i').toggleClass('tip-show');
		});

		// Info block tooltip
		(function(){
			$('.config-panel__menu-title i').hover(function(){
				$(this).find('div').stop(true, true).slideToggle('fast');
			});

		})();

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

						$('.main-nav__list').css('top', '88px');

						$('.main-nav').addClass('open-category');
						menuItem.siblings().removeClass('opened-category');
						menuItem.addClass('opened-category');
						
						$('.catalog-button__icon img')
							.attr('src','img/icon-back.svg');

						$('.catalog-button__text')
							.text('Назад');



						$('.category-name').css('display', 'block').removeAttr('href');

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
					$(this).find('ul').stop(true, true).slideToggle('fast');
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
						}

						wrapper.addClass('mobile-side-menu');
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
				

			/*Back and close
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



}); // Jquery $ Function


































