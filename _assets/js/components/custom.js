$(document).ready(function(){

	$(".search-toggle").click(function (){
		$(".search-panel").toggleClass("show");
		$(".page-content-container").toggleClass("blur10");
		document.getElementById('search-input').focus();
	});

	$("body").keydown(function(e){
		if(e.which == 27){
			$(".search-panel").removeClass("show");
			$(".page-content-container").removeClass("blur10");
		}
	});
});
