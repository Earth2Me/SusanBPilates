!function() {
	/*var addCss = function(href) {
		var link = document.createElement('link');
		link.rel = 'stylesheet';
		link.href = href;
		var meta = document.getElementsByTagName('meta')[0];
		meta.parentNode.insertBefore(link, meta);
	};*/

	var loadCss = function() {
		var links = document.getElementsByTagName('link');
		for (var i = 0; i < links.length; i++) {
			if (links[i].rel == 'async-stylesheet') {
				links[i].rel = 'stylesheet';
			}
		}
	};

	var raf = requestAnimationFrame || mozRequestAnimationFrame || webkitRequestAnimationFrame || msRequestAnimationFrame;
	if (raf) {
		raf(loadCss);
	} else {
		window.addEventListener('load', loadCss);
	}
}();