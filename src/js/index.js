(function(){
   $(".resume_mobile_header-navi li").click(function(event){
      $("#mobile_layout_background").fadeOut();
      $("#mobile_overlay").fadeOut();
   });

   $("#mobile_switch").click(function(event){
      $("#mobile_layout_background").fadeIn();
      $("#mobile_overlay").fadeIn();
   });
})()