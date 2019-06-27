var jtApp = {
	version: "1.0.0", // 版本
	apiOption: {
		rootApi: "", // ajax
	},
	urlOption: {
		index: "./index.html", // app根目录
		setting: "./setting.html", // 设置页面
	},
	// 引用文件立刻执行
	init: function () {
		mui.init();

	}(),
	//首页js
	indexHtml: function () {
		var theHtml = {
			init: function () {
				mui.init();
			},
		}
		theHtml.init();
	
	},
	resveHtml: function () {
		var theHtml = {
			init: function () {
				mui.init();
			},
		}
		theHtml.init();
	
	},
	settingHtml: function () {
		var theHtml = {
			init: function () {
				mui.init();
			},
		}
		theHtml.init();

		$('.disWrap').on('click','div',function(){
			console.log($(this));
			  switch($(this).index()){
					case 0:
					break;
					case 1:
						location.href = 'settingView.html'
					break;
					case 2:
					break;
					case 3:
					break;
					case 4:
					break;
					case 5:
					break;
					case 6:
					break;
					case 7:
					break;
					case 8:
					break;
					case 9:
					break;
					case 10:
					break;
					case 11:
					break;
				}
		})
	},
	settingViewHtml:function(){
		var theHtml = {
			init: function () {
				mui.init();
			},
		}
		theHtml.init();

		$('.selectBox').on('click','div',function(){
			$(this).addClass('active').siblings().removeClass('active')
			$('.main').eq($(this).index()).fadeIn(500).siblings().fadeOut(0)
		})

	}

}

// 点击右侧切换页面内容
$('.rightCenter').on('click','div',function(){
	console.log($(this));
	$(this).addClass('active').siblings().removeClass('active')
	$('.contentBox').eq($(this).index()+1).fadeIn(0).siblings('.contentBox').fadeOut(0)
})

$('.icon-shipin').click(function(){
	location.href = 'resve.html'
})

$('.icon-yinliang').click(function(){
	location.href = 'index.html'
})