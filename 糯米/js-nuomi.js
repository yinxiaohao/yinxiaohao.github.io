$(".city_q").hover(function(){
	$(".city_q_div").show()
	$(".city_q>a").css("color","#84dae2")
	$(".city_q>a>span").css("transform","rotateZ(270deg)")
},function(){
	$(".city_q_div").hide()
	$(".city_q>a").css("color","#666666")
	$(".city_q>a>span").css("transform","rotateZ(90deg)")
})
	
	
$(".nav_1 ul li").hover(function(){
	$(this).addClass("active").siblings().removeClass("active")
},function(){
	$(this).removeClass("active")
	$(".nav_1 ul li:first").addClass("active")
})
	
	$(".nav_1 ul li:nth-child(5) span").hover(function(){
		$(this).css("transform","rotateZ(270deg)")
	},function(){
		$(this).css("transform","rotateZ(90deg)")
	})
	$(".nav_1 ul li:nth-child(5)").hover(function(){
		$(".nav_1 .jiantou ul").show()
	},function(){
		$(".nav_1 .jiantou ul").hide()
	})
	
	$(".head_div ul:nth-child(2) li span").hover(function(){
		$(this).css("transform","rotateZ(270deg)")
	},function(){
		$(this).css("transform","rotateZ(90deg)")
	})
	
	
	
$(".z_left ul li").hover(function(){
	$(".erji_nav").eq($(this).index()).show()
},function(){
	$(".erji_nav").eq($(this).index()).hide()
})
	//****************lunbo**********************
$(".banner").hover(function(){
	$(".ipt_l").show();
	$(".ipt_r").show();
},function(){
	$(".ipt_l").hide();
	$(".ipt_r").hide();
})
	
	

function fun(){
	$(".list").animate({"margin-left":"-2948px"},function(){
		$(".list img").eq(0).remove().clone(true).appendTo($(".list"));
		$(".list").css("margin-left","-2211px")
	})
}
setInterval(fun,4000)

	
	
$(".ipt_l").click(function(){
	$(".list").animate({"margin-left":"-1474px"},function(){
		$(".list img").eq(5).remove().clone(true).prependTo($(".list"));
		$(".list").css("margin-left","-2211px")
	})
})
	
$(".ipt_r").click(function(){
	$(".list").animate({"margin-left":"-2948px"},function(){
		$(".list img").eq(0).remove().clone(true).appendTo($(".list"));
		$(".list").css("margin-left","-2211px")
	})
})
	
	
	//****************lunbo 2**********************
	
	$(".yuandian a").hover(function(){
		$(this).attr("id","active_1").siblings().removeAttr("id","active_1");
		$(".banner2 img").eq($(this).index()).show().siblings().hide()
	})
	
	var i =0;
	function ofun(){
		i++
		$(".banner2 img").eq(i).show().siblings().hide()
		$(".yuandian a").eq(i).attr("id","active_1").siblings().removeAttr("id","active_1");
		if (i==3) {
			i=0
		}
		$(".banner2 img").eq(i).show().siblings().hide()
		$(".yuandian a").eq(i).attr("id","active_1").siblings().removeAttr("id","active_1");
	}
	setInterval(ofun,3000)
	
	
	
	
	
	
	
	
	
	//****************content**********************
	
	$(".div_1").hover(function(){
		$(this).css("border","1px solid rgba(249,62,97,1)")
		$(this).find(".yinying").fadeIn()
	},function(){
		$(this).css("border","1px solid rgba(249,62,97,0)")
		$(this).find(".yinying").fadeOut()
	})

	//****************tab   qiehuan**********************
$(".tab p").hover(function(){
	$(this).addClass("tab_1").siblings().removeClass("tab_1");
	$(".tab_n").eq($(this).index()).show().siblings().hide()
})


$(".logo_r ul li").hover(function(){
	$(".logo_r .op").show()	
	$(".logo_r .op p").eq($(this).index()).show().siblings().hide()
},function(){
	$(".logo_r .op").hide()	
})





$(".xx").click(function(){
	$("#fixed").hide();
	$(".ttt").hide()
})




$(window).scroll(function(){
	var a= $(window).scrollTop();
	if (a>400) {
		$(".fixed_top").show()
	}else{
		$(".fixed_top").slideUp()
	}
})



$(window).scroll(function(){
	if ($(window).scrollTop()>200) {
		$(".fixed_3").show()
	}else{
		$(".fixed_3").hide()
	}
})




$(".fixed_3 li:first").click(function(){
	$("body").animate({"scrollTop":"0"},800)
})
$(".fixed_3 li:nth-of-type(2)").hover(function(){
	$(".erweima").show()
},function(){
	$(".erweima").hide()
})