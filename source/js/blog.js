(function () {
	// 回滚到顶部
    var isShowed = false;
     
    var scr = document.documentElement.scrollTop || document.body.scrollTop;
    if (scr > 80) {
    	$("#navbar").css({
        		"display":"block"
        });
    };

    $(window).scroll(function(e){
        var scr = document.documentElement.scrollTop || document.body.scrollTop;
        //80 显示导航栏
        if (scr > 80) {
        	$("#navbar").css({
        		"display":"block"
        	});
        } else {
        	$("#navbar").css({
        		"display":"none"
        	});
        }

		if (scr > 400) {
			// $('#back_top').show(400);
			if (!isShowed) {
				$('#back_top').css("display","block");
				isShowed = true;
				//滑动到顶部
				// $('#back_top').on("click",function(){
				// $('body,html').animate({scrollTop:0},400);
				// });
				//瞬间跳到顶部
				$('#back_top').on("click",function(){
					document.body.scrollTop = 0;
					document.documentElement.scrollTop = 0;
				});

			}
 
		} else {
			if (isShowed) {
				
				$('#back_top').css("display","none");
				$('#back_top').unbind("click");
				isShowed = false;

			}
		}
	});
	$(document).pjax('a[data-pjax]', '.container', { fragment: '.container', timeout: 10000 });
	$(function() {
		$("img.lazy").lazyload({
			effect : "fadeIn"
		});
	});
})();


