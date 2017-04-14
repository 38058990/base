$(function(){
    
    
        $(window).scroll(function(){
            var w_h = $(window).scrollTop();
            if(w_h >= 0){
                $(".shade-font").fadeIn(1000);
            }if(w_h >100){
                $(".mater_a-font,.mater-r").fadeIn(1000);
            }if(w_h >900){
                $(".object,.sub-in").fadeIn(1000);
            }if(w_h > 2100){
                $(".sevr-tit,.sevr-first,.sevr-second,.sevr-third,.sevr-fouth").fadeIn(1000);
            }if(w_h > 2800){
                $(".base-l,.base-r").fadeIn(1000);
            }if(w_h > 600){
                $(".back-ico,.return").show();
            }else{
                $(".back-ico,.return").hide();
            }
        })
        
    
        
        
        $(".menu-sm").on("click",function(){
       if($(this).hasClass("h")){
			$(this).removeClass("h");
		} else {
			$(this).addClass("h");
		} 
	})
        $(window).scroll(function(){
            $(".menu-sm").addClass("h");
        })
        
        
        
        
           

        $(".eng").on("click",function(){
             $(".map").fadeIn();
             $("#allmap").fadeIn();
                 // 百度地图API功能  
            var map = new BMap.Map("allmap");
            var point = new BMap.Point(118.786511,32.029147);
            map.centerAndZoom(point, 19);
            var marker = new BMap.Marker(point);  // 创建标注
            map.addOverlay(marker);               // 将标注添加到地图中
            marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
            map.enableScrollWheelZoom();   //启用滚轮放大缩小，默认禁用
            map.enableContinuousZoom();    //启用地图惯性拖拽，默认禁用
                var opts = {
                  position : point,    // 指定文本标注所在的地理位置
                  offset   : new BMap.Size(-100,-40)    //设置文本偏移量
                }
                var label = new BMap.Label("欣才IT学院", opts);  // 创建文本标注对象
                    label.setStyle({
                         color : "red",
                         fontSize : "12px",
                         height : "20px",
                         lineHeight : "20px",
                         fontFamily:"微软雅黑"
                     });
                map.addOverlay(label); 
                    })

            $(".close").on("click",function(){
                $(".map").hide();
                $("#allmap").hide();
        })
})