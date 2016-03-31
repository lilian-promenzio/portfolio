var setSlider = function(sliderID){
	
	$('#' + sliderID).lightSlider({
		autoWidth: true,
		keyPress: true,
		loop: true,
		slideMove: 1,
		easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
		speed: 600,
		
        onSliderLoad: function() {
            $('#' + sliderID).removeClass('cs-hidden');
        } 
	});
	
}