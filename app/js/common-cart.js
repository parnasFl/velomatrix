
$(function(){
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
}); // Jquery $ Function ...similar-items


































