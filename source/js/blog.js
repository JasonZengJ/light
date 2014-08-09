(function () {
		    // 回滚到顶部
 	var isShowed = false;
   	$(window).scroll(function(e){
   		var scr = document.documentElement.scrollTop || document.body.scrollTop;
		if (scr > 400) {
			// $('#back_top').show(400);
			if (!isShowed) {

				$('#back_top').css("display","block");
				isShowed = true;
				$('#back_top').on("click",function(){
					$('body,html').animate({scrollTop:0},400);
				});
			};

		}else{

			if (isShowed) {
				
				$('#back_top').css("display","none");
				$('#back_top').unbind("click");
				isShowed = false;
			};

			// $('#back_top').hide(300);
		}
	});
	$(document).pjax('a[data-pjax]', '.container', { fragment: '.container', timeout: 10000 });
	$(function() {
    $("img.lazy").lazyload({
    	 effect : "fadeIn"
    });
	});
})();


