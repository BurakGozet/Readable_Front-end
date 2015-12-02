$(document).ready(function(){
 $(".search-toggle").click(function (){
    $(".search-panel").toggle();
    $(".page-content-container").toggleClass("blur10");
    $("#search-input").focus();
});
 $(".search-panel").keypress(function(e){
    alert(e.which);
    if(e.which == 27){
     $(".search-panel").toggle();
     $(".page-content-container").toggleClass("blur10");
 }

});
