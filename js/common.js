// JavaScript Document

/*-----登录注册checkUI-----*/

$(function(){
		$('input[type=checkbox]').prop('checked','')
		$('input[type=checkbox]').click(function(e) {
			if( $(this).prop("checked")){
				$(this).next('label').css('background-position','0 -157px').siblings('label').css('background-position','0 -102px')
				
			}else{
				$(this).next('label').css('background-position','0 -102px')
			}
			
        });
})


/*-----Radio--UI-----*/

$(function(){
		$('input[type=radio]').prop('checked','')
		$('input[type=radio]').click(function(e) {
			if( $(this).prop("checked")){
				$(this).next('label').css('background-position','0 -47px').siblings('label').css('background-position','0 10px')
				
			}else{
				$(this).next('label').css('background-position','0 10px')
			}
			
        });
})



/*-----index登录、注册弹框-----*/



$(function(){
	$('.nav-out .nav-right ol li:eq(0)').hover(function(e) {
        $(this).children('#zhuce-main').css('display','block');
    },function(){
        $(this).children('#zhuce-main').css('display','none');
        $(this).children('#zhuce-main02').css('display','none');
    
    
    });
	$('.nav-out .nav-right ol li:eq(1)').hover(function(e) {
        $(this).children('#denglu-main').css('display','block');
    },function(){
        $(this).children('#denglu-main').css('display','none');
    
    
    });


})

/*$(function(){
	$('.nav-out .nav-right ol #zhuce').click(function(e) {
        $('.nav-out .nav-right ol #zhuce-main').toggle();
        $('.nav-out .nav-right ol #denglu-main').css('display','none');
    });
	$('.nav-out .nav-right ol #denglu').click(function(e) {
        $('.nav-out .nav-right ol #denglu-main').toggle();
        $('.nav-out .nav-right ol #zhuce-main').css('display','none');
    });


})
*/

/*-----注册方式切换弹框-----*/
$(function(){
	$('#zhuce-main .tab-title01').click(function(e) {
        $(this).parent('').css('display','none').siblings().css('display','block')
    });
	$('#zhuce-main02 .tab-title02').click(function(e) {
        $(this).parent('').css('display','none').siblings().css('display','block')
    });



})

/*-----top 搜索-----*/
$(function(){
	$('.header-right .search-btn').click(function(e) {
		if($('.header-right .search').width()==0){
			$('.header-right .search,.header-right .search input.text-xqy').animate({width:135},500);
        }else{
			$('.header-right .search,.header-right .search input.text-xqy').animate({width:0},500);
        }
    });



})

/*-----header弹框效果-----*/
$(function(){
	$('.header-right .xitong').click(function(e) {
        $(this).children('.xit-sz').toggle();
        $('.header-right .name').children('.my-suiuu').css('display','none');
    });

	$('.header-right .name').click(function(e) {
        $(this).children('.my-suiuu').toggle();
        $('.header-right .xitong').children('.xit-sz').css('display','none');
    });



})

/*-----随游详情页banner轮播----*/
$(function(){
	var num=0;
	var timer=null;
	function fn(){
		
		num++;
		if(num>5){num=0}
		$('.web-banner ul').stop().animate({left:num*-894},1000)
		$('.web-banner ol').stop().animate({left:num*-146},1000)
	}
	timer=setInterval(fn,2000)
	$('.web-banner ul li,.web-banner ol li').hover(function(e) {
        clearInterval(timer)
		
    },function(){
		clearInterval(timer)
    	timer=setInterval(fn,2000)
    
    });
	
	$('.web-banner .next').click(function(e) {
        num++;
		if(num>5){num=0}
		$('.web-banner ul').stop().animate({left:num*-894},500)
		$('.web-banner ol').stop().animate({left:num*-146},500)

    });
	$('.web-banner .prev').click(function(e) {
        num--;
		if(num<0){num=5}
		$('.web-banner ul').stop().animate({left:num*-894},500)
		$('.web-banner ol').stop().animate({left:num*-146},500)
    });
	$('.web-banner .prev,.web-banner .next').hover(function(e) {
        clearInterval(timer)
    },function(){
		clearInterval(timer)
		timer=setInterval(fn,2000)
	});
	
	
})



/*-----专栏qq分享-----*/
$(function(){
	$('#fenxiang').click(function(e) {
        $(this).children('#other-line').toggle()
    });

})























