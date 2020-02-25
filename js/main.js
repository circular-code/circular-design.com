(function() {

	function waitForRunAnimation() {
		if (window.runAnimation)
			runAnimation(document.getElementById('canvas'), true);
		else
			setTimeout(function() {
				waitForRunAnimation();
			}, 500);
	}

	window.addEventListener('load', function() {
		window.setTimeout(function() {
			document.body.classList.remove('is-preload');
			waitForRunAnimation();
		}, 100);
	});
})();