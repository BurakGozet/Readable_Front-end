$(document).ready(function(){

	$(".search-toggle").click(function (){
		$(".search-panel").toggleClass("show");
		$(".page-content-container").toggleClass("blur10");
		$("#search-input").trigger("click");
	});

	$(".search-panel").keydown(function(e){
		if(e.which == 27){
			$(".search-panel").toggleClass("show");
			$(".page-content-container").toggleClass("blur10");
		}
	});
});
