(function($){
	
//	var link = $('<link rel="stylesheet" type="text/css" href="../css/万年历.css"/>');
//	$('head').append(link);//动态引入css文件
	var opaction = { //默认参数
		item2:["-","-",''],
		item3:['/',''],
		select:['up','down'],
		week:['日','一','二','三','四','五','六']
	}
	
	var setting = {};
	var $parent = null;
	var num = 0;
	
	function rili(obj){//主函数
		$parent = this;
		$.extend(setting,opaction,obj);
		var div = box();
		$parent.append(div);
		time();
		creatLi();
		setMonth();
	}
	
	function box(){
		var str = '<div id="" class="header">'+
						'<p class="item1">08:00:00</p>'+
						'<p class="item2">2017-03-03</p>'+
						'<div class="f">'+
							'<p class="item3">22222222</p>'+
							'<div class="rigth">'+
								'<span>'+setting.select[0]+'</span>'+
								'<span>'+setting.select[1]+'</span>'+
							'</div>'+
						'</div>'+
					'</div>'+
					'<div id="" class="date">'+
						'<ul>';
					for(var i=0;i<setting.week.length;i++){
						str += '<li>'+setting.week[i]+'</li>';
					}					
					str +='</ul>'+
					'</div>'+
					'<div class="content">'+
						'<ul class="list"></ul>'+
					'</div>';
		return str;
	}

	function time(){
		function fn(){
			var date = new Date();
			var Y = oT(date.getFullYear());
			var M = oT(date.getMonth() +1);
			var D = oT(date.getDate());
			var day = date.getDay();
			var H = oT(date.getHours());
			var Min = oT(date.getMinutes());
			var S = oT(date.getSeconds());
			
			var item1 = $parent.find('.item1');
			var item2 = $parent.find('.item2');
			item1.html(H+':'+Min+':'+S);
	
	
			var str = Y+setting.item2[0]+M+setting.item2[1]+D+setting.item2[2]+' 星期'+setting.week[day];
			item2.html(str);
		}
		fn();
		setInterval(fn,1000);
		
	}

	function creatLi(){
		var list = $parent.find('.list');
		var item3 = $parent.find('.item3');
		//情况list
		list.html('');
	/*
	  	设置上个月的空白li
	 * 
	*/
		var date = new Date();
		date.setMonth(date.getMonth()+num);
		date.setDate(0);   
		var old_day = date.getDate()            // 上一个月的天数
	
		var date = new Date();
		date.setMonth(date.getMonth()+1+num);
		date.setDate(0);   
		var now_day = date.getDate()            // 当前个月的天数
		
		
		
		var date = new Date();
		date.setMonth(date.getMonth()+num);
		date.setDate(1);
		var now_first_day = date.getDay();        // 当前月1号对应的星期数
		
		
		var date = new Date();
		var now_date = date.getDate();           // 现在的号数
		
		
		var empty_li = old_day - now_first_day;  // 能看见上个月可以出现几天
		//生成上个月的li
		for(var i=empty_li;i<old_day;i++){
			var li = $('<li>'+(1+i)+'</li>');
			li.addClass('over');
			list.append(li);
		}
		
		
		//生成当前月的li
		for(var i=0;i<now_day;i++){
			var li = $('<li>'+(1+i)+'</li>');
			if(i== now_date-1&&num==0){
				li.addClass('active');
			}
			list.append(li);
		}
		
		//在item3里面现象出来的月份
		var date = new Date();
		date.setMonth(date.getMonth()+num);
		var y = date.getFullYear();
		var m = date.getMonth()+1;
		var str = y+setting.item3[0]+oT(m)+setting.item3[1];
		item3.html(str);
		
		
		//生成下个月的li
		var len = 42;
		var nowlen = $('.content li').length
		var dis = len-nowlen;
		for(var i=0;i<dis;i++){
			var li = $('<li>'+(1+i)+'</li>');
			li.addClass('over')
			list.append(li);
		}
	}


	function setMonth(){ //点击切换月份
		var spans = $('.header span');
		
		spans[0].onclick = function(){
			num--;
			creatLi();
			document.onclick = null;
		}
		spans[1].onclick = function(){
			num++;
			creatLi();
			document.onclick = null;
		}
	}
	function oT(n){
		return n = n<10?'0'+n:""+n;
	}

	$.fn.extend({
		rl:rili
	})
	
})(jQuery)
