
$(document).ready(function(){

	$(".postscript").hide();
	$(".first-choiceDetails").show();

	$(".item.first-choice").click(function () {
	//alert("clicked");
		$(".postscript").hide();
		$(this).toggleClass("active").siblings().removeClass("active");
		$(".first-choiceDetails").show().toggleClass("active").siblings().removeClass("active");
	});
	$(".item.second-choice").click(function () {
		$(".postscript").hide();
		$(this).toggleClass("active").siblings().removeClass("active");
		$(".second-choiceDetails").show().toggleClass("active").siblings().removeClass("active");
	});
	$(".item.third-choice").click(function () {
		$(".postscript").hide();
		$(this).toggleClass("active").siblings().removeClass("active");
		$(".third-choiceDetails").show().toggleClass("active").siblings().removeClass("active");
	});

});
