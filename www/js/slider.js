var setSlider = function(sliderID){
	
	$('#' + sliderID).lightSlider({
		item: 4,
		keyPress: true,
		loop: true,
		slideMove: 2,
		easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
		speed: 600,
		responsive : [
			{
				breakpoint: 992,
				settings: {
					item: 3,
					slideMove: 1,
					}
			},
			{
				breakpoint: 768,
				settings: {
					item: 2,
					slideMove: 1,
					}
			},
			{
				breakpoint: 480,
				settings: {
					item: 1,
					slideMove: 1
					}
			}
		]
	});
	
}