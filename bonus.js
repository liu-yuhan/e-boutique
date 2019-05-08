
$(document).ready(function(){
  $("#logoLicorne").on("click",justJoke);
});

function justJoke(e){
  console.log("JsSkillConnected");
  $("#kidding").toggle();
  $("#native").toggle();
}
