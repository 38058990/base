$(function(){
        $(window).scroll(function(){
            var w_h = $(window).scrollTop();
            if(w_h >= 0){
                $(".shade-font").fadeIn(1000);
            }if(w_h >300){
                $(".mater_a-font,.mater-r").fadeIn(1000);
            }if(w_h >900){
                $(".object,.sub-in").fadeIn(1000);
            }if(w_h > 2100){
                $(".sevr-tit,.sevr-first,.sevr-second,.sevr-third,.sevr-fouth").fadeIn(1000);
            }if(w_h > 2800){
                $(".base-l,.base-r").fadeIn(1000);
            }
        })
        $(".menu-sm").on("click",function(){
       if($(this).hasClass("h")){
			$(this).removeClass("h");
		} else {
			$(this).addClass("h");
		} 
	})
})