console.log('here');

(function () {
	$(document).pjax('a[data-pjax]', '.container', { fragment: '.container', timeout: 10000 });
	$(function() {
    $("img.lazy").lazyload({
    	 effect : "fadeIn"
    });
	});
})();


