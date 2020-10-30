$(document).ready(function(){

    $("#btn").click(function(){

      if($("#btn").text() == "☰"){
        $("#btn").text("🞬");
      }else{
        $("#btn").text("☰");
      }

      $("li").toggle("slow");
    });
});
