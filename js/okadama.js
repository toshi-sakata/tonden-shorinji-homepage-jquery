$(function(){
	/* defined css
	$(".mainContents").css({opacity:"0"});
	$(".opening").css({opacity:"0"});
	*/
	// undisplayed opacity to 0
	$(".nav").css({"opacity" : "0"});
	$(".top_image").css({"opacity" : "0"});

	/* souen centering whithout padding           */
	/* if use padding replace width to innerWidth */
	var width_w = $(window).width();
	var img_w = 150;
	var pos_x = ((width_w - img_w) / 2);
	$(".opening img").css({"left" : pos_x + "px"});
	
	var height_h = $(window).height();
	var img_h = 171;
	var pos_y = ((height_h - img_h) / 2);
	$(".opening img").css({"top" : pos_y + "px"});
	
	$(".shutter").css({"height" : height_h + "px"});
	$(".shutter2").css({"width" : width_w + "px"});
	
	// undisplayed opacity to 0
	//$(".nav").css({"opacity" : "0"});
	//$(".top_image").css({"opacity" : "0"});
	
	// shutter close to right 0 -> 100%
	// shutter2 set to 100%
	$(".shutter").animate({"width" : "100%"},0,"swing",
		function(){
		$(".opening").css({"display": "block", "opacity": "1"});
		$(".shutter2").css({"height":"100%"});
		//$(".mainContents").css({"opacity":"1"});
	}).delay(200);

	// shutter open to right 100% -> -> 0% pos to left 100%
	// shouen up and fadeout
	// shutter2 Up Open 100% -> 0%
	$(".shutter")
		.animate({"width" : "50%", "left":"50%"},600,"linear")
		.animate({"width" : "0%", "left":"100%"},200,"swing",
	function(){
		// shouen up and fadeout
		$(".opening>img").delay(200).animate({
			"top" : pos_y-100 + "px",
			"opacity" : "0"
		},300,"swing",
		function(){
		// shutter up to open
		$(".shutter2").delay(200).animate({"height": "0px"},400,"swing",
			function(){
				//
				//$(".shutter2").animate({"left": "0%"},1300,"swing")
				$(".opening img").remove();
				$(".shutter2").remove();
			
				$(".renshuu").delay(300).animate({"left": "0%"},700,"swing")
				$(".renshuu img").delay(1300).animate({"opacity": "1"},2500,"swing")
			
				if(width_w<=768){
					// for smapho and tablet
					$(".nav").addClass("close").css({"opacity": "1", "position":"fixed"});
				}else{
					// for PC
					$(".nav").delay(1400).animate({"opacity": "1"},500,"swing");
				}
			});
		});
	}).delay(0);
});


