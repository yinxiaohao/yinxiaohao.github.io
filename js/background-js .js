window.onload=function(){
	$('.box').rl();
var box_box =document.getElementById("box_box");
var x =0;
var y =0;
setInterval(function(){
	x+=.4;
	y+=.2;
	box_box.style.transform="rotateY("+x+"deg) rotateX("+y+"deg)"
	if (x>1000&&y>1000) {
		x=0;
		y=0;
	}
},10)
			
			
/*******画布  心形*********/	
var canvas = document.getElementById("canvas1");
var ctx = canvas.getContext("2d");
ctx.translate(150,150); //sets center in the middle of the picture
drawHeart();
   
function drawHeart() {
   ctx.beginPath();
   ctx.moveTo(0,-50);
   ctx.bezierCurveTo(60,-150, 150,-50, 100,25);
   ctx.lineTo(0,125);
   ctx.lineTo(-100,25);
   ctx.bezierCurveTo(-150,-50, -60,-150, 0,-50);
   ctx.closePath();
   ctx.fillStyle="#ff0000";
   ctx.fill();
}


//阻止默认事件
		document.addEventListener("mousemove",function(ev){
			ev.preventDefault()
		})


//  点击 
		var body =document.querySelector("body");
		document.onclick=function(ev){
			var div =document.createElement("div");
			div.className ="click";
			div.style.position="absolute";
			div.style.left=ev.pageX-1.5+"px";
			div.style.top=ev.pageY-1.5+"px";
			var num =1;
			var nub =1;
			var od = document.getElementsByClassName("click")
			function fun(){
				num++;
				nub-=0.01;
				div.style.transform="scale("+num+")"
				div.style.opacity=""+nub+""
				if (num==14) {
					num=1
				}
				if (nub == 0) {
					body.removeChild(od)
				}
			}
			var t=setInterval(fun,10)
			body.appendChild(div)
		}


// 滚动条
	function addWheel(obj,down,up){
		var user = window.navigator.userAgent.toLowerCase();
		if(user.indexOf('firefox') == -1){
			obj.addEventListener('mousewheel',fn);
		}else{
			obj.addEventListener('DOMMouseScroll',fn);
		}
		
		function fn(ev){
			var dis = true;
			if(ev.wheelDelta){
				dis = ev.wheelDelta>0?true:false;
			}else{
				dis = ev.detail<0?true:false;
			}	
			if(dis){
				up&&up();
			}else{
				down&&down();
			}
			
		}
	}
	addWheel(document,down,up);
	var num =0;
	var ss = 0;
	var top = 0;
	var endy = 0;
	var nub =0;
	
	var bg = document.getElementById("bg");
	var bg_h = bg.offsetHeight;
	var iH = document.documentElement.clientHeight
	var move = document.getElementsByClassName("move")[0];
	
	/*********滚动条后的页面效果*********滚动滚轮***/
	var box3 = document.getElementById("box3");
	var b = document.querySelector(".b");
	var a = document.querySelector(".a");
	var p = document.querySelector(".p");
	var fie = document.querySelector(".fie");
	var qiu = document.querySelector("#qiu"); 
	var box4 = document.querySelector("#box4");
	var nav = document.querySelector(".nav");
	var t = iH - move.offsetHeight;  // 可移动的高度
	
	//  点击 圆球
	click()
	function click(){
		
		qiu.onclick=function(){
			
			num = 540;
			move.style.top = num+"px";
			move.style.transition = "1s";
			
			ss = (num/t).toFixed(2);
			bg.style.transition = "1s";
			bg.style.top = -ss*iH+"px";
			
			box4.style.transition="1s"
			downX();
		}
	}
	
	
	
	//  box4
	tab()
	function tab(){
		document.onmousedown=function(ev){
			var Y = ev.pageY;
			endy = top;
			document.onmousemove=function(ev){
				var dix = ev.pageY - Y;
				top = dix + endy;
				if (top<=-680) {
					top=-680
				}
				if (top>0) {
					top = 0
				}
				nav.style.top = top+"px"
			}
		}
		document.onmouseup=function(){
			document.onmousemove = null;
		}
		
	}
	
	//  往下的效果
	function downX(){
		// fie 的移动和改变
		fie.style.top =300-ss*450+"px"
		if (ss >=0.6) {
			fie.style.height = "80px"
			fie.style.top = 0;
			fie.innerHTML = "<span>Hello.</span>";
			fie.style.lineHeight = "80px";
			fie.style.transition = "1s";
		}
		b.style.filter="blur("+ss*100+"px)";  // logo 模糊度
		p.style.top =310-ss*400+"px" // 文字的移动
		box3.style.top = -100+"px"  // html box3的滑动效果
		qiu.style.transform = "scale(0)";  // 圆球的隐藏
		
		
		box4.style.top =665-ss*iH+"px";  // box4 的移动
		if (ss ==1) {
			nub-=10;
			if (nub <=-660) {
				nub=-660;
			}
			nav.style.transition="none"
			nav.style.top = nub+"px";
		}
		
		nav.style.display= "block"
	  	Image.style.opacity = 0;
	  	zj.style.opacity = 0;
	  	yj.style.opacity = 0;
	  	clone.style.opacity = 0;
	  	nav_foot.style.opacity = 0;
	};
	
	function upX(){
		if (ss <=1) {
			nub+=10;
			nav.style.transition="none"
			nav.style.top = nub+"px";
			
		}
		box4.style.top =665-ss*iH+"px";
		// fie 的移动和改变
		fie.style.top =300-ss*450+"px";
		if (ss <=0.6) {
			fie.style.height = "270px";
			fie.innerHTML = '<span>selectively</span>'+
							'<p>FREELANCING</p>'+
							'<div class="tu1">'+
								'<a href=""><img src="img/email_icon.png"/></a>'+
							'</div>'+
							'<div class="tu2">'+
								'<a href=""><img src="img/twitter_icon.png"/></a>'+
							'</div>'+
							'<div class="tu3">'+
								'<a href=""><img src="img/ren.png"/></a>'+
							'</div>;'
			fie.style.lineHeight = "30px";
			fie.style.transition = "none"
		}
		b.style.filter="blur("+ss*100+"px)";  // logo 模糊度
		p.style.top =310-ss*400+"px"; // 文字的移动
		box3.style.top = 0+"px"; // html box3的滑动效果
		if (ss<=0.25) {
			qiu.style.transform = "scale(1)"; // 圆球的显示
		}
		
		nav.style.display= "block"
	  	Image.style.opacity = 0;
	  	zj.style.opacity = 0;
	  	yj.style.opacity = 0;
	  	clone.style.opacity = 0;
	  	nav_foot.style.opacity = 0;
	};
	
	function down(){
		num +=20
		if (num>t) {
			num=t
		}
		if (num>0) {
			bg.style.transform = "scale(1)"; 
			fie.style.transition = "2s";
			fie.style.opacity = 1; //fie 显示
		}
		move.style.transition = "none"
		move.style.top =num+"px"
		ss = (move.offsetTop/t).toFixed(2);
		bg.style.transition = "none"
		bg.style.top = -ss*iH+"px"
		
		downX();
	}
	
	function up(){
		num -=20
		if (num<0&&num>-20){
			num=0;
			bg.style.transform = "scale(.98)";
		}else if(num<-20 && num>-40){
			bg.style.transform = "scale(.96)";
			num = 0;
		}else if(num<-53){
			bg.style.transition = "2s"
			bg.style.transform = "scale(0)";  // 网页隐藏
			fie.style.opacity = 0; //fie 隐藏
			num =0;
			$(".box").show();  // 万年历出现
			firework();  // 烟花函数调用
		}
		move.style.top =num+"px"
		ss = (move.offsetTop/t).toFixed(2);
		bg.style.top = -ss*iH+"px"
		
		upX();
	}
	
	
	
	
	
/*******直接拉动滚动条**********/
	move.onmousedown=function(ev){
		var y = ev.pageY - move.offsetTop; //鼠标位置
		move.onmousemove=function(ev){
//			var top = ev.pageY - s
			
			
			move.style.top = ev.pageY -y +"px";
			num = ev.pageY -y;  // 滚轮 对应鼠标拉动之后的  move
			
			var B = (move.offsetTop/t).toFixed(2)  //比例
			console.log(move.offsetTop)
			
			
			
			
			if (move.offsetTop < 0&&move.offsetTop>-20) {
				bg.style.transform = "scale(.98)"; 
				move.style.top ="0px";
				num =0;
			}else if(move.offsetTop<-20 && move.offsetTop>-40){
				bg.style.transform = "scale(.96)";
				move.style.top ="0px";
				num =0;
			}else if(move.offsetTop<-53){
				bg.style.transform = "scale(0)";
				move.style.top ="0px";
				num =0;
			}
			
			
			
			if (move.offsetTop > 0&&move.offsetTop<10) {
				bg.style.transform = "scale(1)"; 
				
			}
			if (move.offsetTop > t) {
				move.style.top = t+"px"
				num = t;
			}
			
			bg.style.top = -bg_h*B+'px'
		}
		
		document.onmouseup = function(){
			document.onmousemove = null;
			document.onmouseup = null;
		}
		
		ev.preventDefault();
	}



	
/**************************轮播图****/ 
	var lis =nav.getElementsByTagName("li");
	var Image = document.querySelector("#Image");
	var zj = document.querySelector(".zj");
	var yj = document.querySelector(".yj");
	var nav_foot = document.querySelector(".nav_foot");
	var clone = document.querySelector(".clone");
	var imgs = Image.getElementsByTagName("img");
	
	
	var abs=0;
	lisclick()
	function lisclick(){
		
		for (var i=0;i<lis.length;i++) {
			(function(i){
				lis[i].onclick=function(){
					abs=i;
					oimg();
					clone.innerHTML = lis[abs].innerHTML
					clone.style.opacity = 1;
				  	nav.style.display= "none"
				  	Image.style.opacity=1;
				  	zj.style.opacity = 1;
				  	yj.style.opacity = 1;
				  	nav_foot.style.opacity = 1;
				}
			})(i)
			
		}
	}
	
	yj.onclick=function(){
		abs++
		if (abs ==5) {
			abs=0;
		}
		oimg();
		clone.innerHTML = lis[abs].innerHTML;
		console.log(abs)
	}
	zj.onclick=function(){
		abs--
		if (abs==-1) {
			abs =4
		}
		oimg();
		clone.innerHTML = lis[abs].innerHTML;
	}

function oimg(){
	switch (abs){
		case 1:
			imgs[0].src = "img/r.jpg";
			imgs[1].src = "img/y.jpg";
			imgs[2].src = "img/t.jpg";
			break;
		case 2:
			imgs[0].src = "img/a.jpg";
			imgs[1].src = "img/s.jpg";
			imgs[2].src = "img/d.jpg";
			break;
		case 3:
			imgs[0].src = "img/h.jpg";
			imgs[1].src = "img/f.jpg";
			imgs[2].src = "img/g.jpg";
			break;
		case 4:
			imgs[0].src = "img/c.jpg";
			imgs[1].src = "img/z.jpg";
			imgs[2].src = "img/x.jpg";
			break;
		case 0:
			imgs[0].src = "img/e.jpg";
			imgs[1].src = "img/w.jpg";
			imgs[2].src = "img/q.jpg";
			break;
	}
}


//*********footer***
	var onoff = true;
	var foot = document.getElementById("footer");
	var X = document.getElementById("article-x");
		X.onclick=function(){
			document.onclick = null;
			if (onoff==true) {
				X.style.transform = "rotateZ(45deg)";
				foot.style.bottom = 20+"px";
				onoff = false;
			}else{
				onoff = true;
				X.style.transform = "rotateZ(0deg)";
				foot.style.bottom = -265+"px";
			};
		}




/************烟花**********/
	function firework(){
		document.onclick=function(){
			var x=event.clientX;
			var y=event.clientY;
			var adiv=[];
			var odiv=document.createElement("div");
			odiv.style.width="3px";
			odiv.style.height="30px";
			odiv.style.background="red";
			odiv.style.position="absolute";
			odiv.style.left=x +"px";
			odiv.style.top=document.documentElement.clientHeight+"px";
			document.body.appendChild(odiv);
			var t =setInterval(function(){
				if (odiv.offsetTop<=y) {
					clearInterval(t);
					fun();
					document.body.removeChild(odiv);
				}
					odiv.style.top=odiv.offsetTop-30+"px"
			},30)
			function fun(){
				for (var i=0;i<=50;i++) {
					var sdiv=document.createElement("div");
					sdiv.style.width="3px";
					sdiv.style.height="3px";
					sdiv.style.background='#'+Math.ceil(Math.random()*0xEFFFFF+0x0FFFFF).toString(16);
					sdiv.style.position="absolute";
					sdiv.style.left=x +"px";
					sdiv.style.top=y+"px";
					sdiv.speedX=Math.random()*40-20;   //x轴 的移动速度
					sdiv.speedY=Math.random()*40-20;
					document.body.appendChild(sdiv)
					adiv.push(sdiv)
					console.log(adiv.push(sdiv))
				}
			}
			setInterval(doMove, 30);
		    function doMove(){
		        for(i=0;i<adiv.length;i++){
		            adiv[i].style.left=adiv[i].offsetLeft+adiv[i].speedX+'px';
		            adiv[i].style.top=adiv[i].offsetTop+adiv[i].speedY+'px';
		            adiv[i].speedY+=1;
		            if(adiv[i].offsetLeft<0 || adiv[i].offsetLeft>document.documentElement.clientWidth 
		            	|| adiv[i].offsetTop<0 || adiv[i].offsetTop>document.documentElement.clientHeight)
		            {
		                document.body.removeChild(adiv[i]);
		            }
		        }
			}	
		}
	}
/******j减速度********/
	
//	var Image = document.querySelector("#Image");
//	var img_1 = Image.children[0];
//	var img_2 = Image.children[1];
//	var img_3 = Image.children[2];
//	var sx = 0;
//	
//	Image.onmousedown=function(ev){
//		var xxx = ev.pageX;
//		console.log("an")
//		Image.onmousemove=function(ev){
//			var ox = ev.pageX;
//			sx = ox - xxx;
//			
//			img_1.style.left =14+sx+"px"
//			img_2.style.left =690+sx+"px"
//			img_3.style.right=-sx+"px"
//			console.log("11")
//		}
//		
//	}
//
//






}