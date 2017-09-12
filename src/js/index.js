(function(){
   $(".resume_mobile_header-navi li").click(function(event){
      $("#mobile_layout_background").fadeOut();
      $("#mobile_overlay").fadeOut();
   });

   $("#mobile_switch").click(function(event){
      $("#mobile_layout_background").fadeIn();
      $("#mobile_overlay").fadeIn();
   });

   $(".resume_header-navi li").click(function(event){
      $(".resume_header-navi li").removeClass("active");
      $(this).addClass("active");
   });

   $(".resume_mobile_header-navi li").click(function(event){
      $(".resume_mobile_header-navi li").removeClass("active");
      $(this).addClass("active");
   });

   var url = window.location.href.split("").reverse();
   var currenturl="";
   for(var i=0;i<url.length;i++){
   	  if(url[i]=="/"){
      	 break;
      }
      currenturl += url[i];
   }
   currenturl = currenturl.split("").reverse().join("");
   if(currenturl==""){
      $(".homepage").addClass("active");
   }else{
      $("."+currenturl+"page").addClass("active");
   }
})();