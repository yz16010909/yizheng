$(function(){
		$(".num>li").hover(function(){
			var i=$(this).index();
			//alert(i);
			$(".pic>li").eq(i).show().siblings().hide();
		},function(){})
		
		var timer=null;
		var j=0;
		timer=window.setInterval(function(){
			if(j>2){
				j=0;
			}else{
				j++;
			}
			$(".pic>li").eq(j).show().siblings().hide();
		},500)
		$(".ad").hover(function(){
			clearInterval(timer);
		},function(){
			timer=setInterval(function(){
			if(j>2){
				j=0;
			}else{
				j++;
			}
			$(".pic>li").eq(j).show().siblings().hide();
		},500)
		})
	})
