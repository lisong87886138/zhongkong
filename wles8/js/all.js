// 选择器
function dqA(selector) {
	return document.querySelectorAll(selector);
};

function dq(selector) {
	return document.querySelector(selector);
};
HTMLElement.prototype.show = function () {
	this.style.display = "block";
	return this;
};
HTMLElement.prototype.hide = function () {
	this.style.display = "none";
	return this;
};

var jtFn = {
	// 跳转页面
	successJump: function (url, mothed) {
		window.location[mothed || "replace"](url || "./");
	},
	openWindow: function (url) {
		mui.openWindow({
			url: url,
			id: url
		})
	},
	// 遮罩蒙板
	jtMask: function () {
		var mask = mui.createMask(); //callback为用户点击蒙版时自动执行的回调；
		var _img = document.createElement("img");
		_img.src = "data:image/gif;base64,R0lGODlhgACAAKIEAN3d3bu7u////5mZmf///wAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QjZEQUY1MTZCQjcwMTFFNTk2MEZBMUI3OTA4NTc3QTEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QjZEQUY1MTdCQjcwMTFFNTk2MEZBMUI3OTA4NTc3QTEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCNkRBRjUxNEJCNzAxMUU1OTYwRkExQjc5MDg1NzdBMSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCNkRBRjUxNUJCNzAxMUU1OTYwRkExQjc5MDg1NzdBMSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgH//v38+/r5+Pf29fTz8vHw7+7t7Ovq6ejn5uXk4+Lh4N/e3dzb2tnY19bV1NPS0dDP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";
		_img.style.cssText = "position: fixed;top: 50%;left: 50%;width: 40px;height: 40px; margin-left: -20px;margin-right: -20px;";
		mask[0].appendChild(_img);
		window._mask = mask;

	},
	jtMaskShow: function () {
		try {
			window._mask.show();
		} catch (e) {
			console.log("-------------jtMaskShow", e)
		}
	},
	jtMaskClose: function () {
		try {
			window._mask.close();
		} catch (e) {
			console.log("----------------jtMaskClose", e)
		}
	},
}



// 通用方法-----------------------------------------------------------------------------------------------------------------------
// 生成页面头部和底部
var head = `
	<div class="screen-top-left displayFlexRow">
	<div class="headImg"><img src="img/logo.png" alt=""></div>
	<div class="marginAuto">沪CCCCCCC</div>
	</div>
	<div class="screen-top-right displayFlexRow">
	<span class="iconfont icon-xiaoxi"></span>
	<span class="iconfont icon-lanya"></span>
	<span class="iconfont icon-ico-"></span>
	<span>13 : 20</span>
	</div>
`

var footer = `
	<span class="iconfont icon-qianfengchuangbolichuwuchushuang marginAuto0 width18"></span>
	<span class="iconfont icon-houfengchuangbolichuwuchushuang marginAuto0 width18"></span>
	<div class="marginAuto0 width24">
			<span class="textWD">21.0°</span>
			<span class="iconfont icon-zuoyi"></span>
			<span class="textWD">21.0°</span>
	</div>
	<span class="iconfont icon-neixunhuan1 marginAuto0 width18"></span>
	<div class="displayFlexRow marginAuto0 width18">
			<div class="numb-1 marginAuto0">1</div>
			<div class="displayFlexColumn">
					<div>PM 2.5</div>
					<div>自动</div>
			</div>
	</div>
`
$('.screen-top').html(head)
$('.screen-footer').html(footer)

$('.screen-footer .width24').click(function(){
	location.href = 'air.html'
})


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
		mui('.screen-main').on('tap', '.allSetting', function () {
			location.href = 'setting.html'
		})
		mui('.screen-main').on('tap', '.muen', function () {
			location.href = 'muen.html'
		})

		$('.listClick').on('click', 'div', function () {
			switch ($(this).index()) {
				case 0:

					break;
				case 1:
					location.href = 'power.html'
					break;
				case 2:
					location.href = 'battery.html'
					break;
				case 3:
					location.href = 'flow.html'
					break;
			}
		})
	},

	muenHtml: function () {
		var theHtml = {
			init: function () {
				mui.init();
			},
		}

		theHtml.init();
		$('.muenList').click(function () {
			switch ($(this).index()) {
				case 0:
					location.href = 'index.html'
					break;
				case 1:
					break;
				case 2:
					location.href = 'setting.html'
					break;
				case 3:
					break;
				case 4:
					location.href = 'weather.html'
					break;
				case 5:
					location.href = 'reversing.html'
					break;
				case 6:
					location.href = 'setting2.html'
					break;
				case 7:
					location.href = 'muen.html'
					break;
				case 8:
					location.href = 'album.html'
					break;
				case 9:
					location.href = 'book.html'
					break;
			}
		})
	},
	airHtml:function(){
		var theHtml = {
			init: function () {
				mui.init();
			},
		}

		theHtml.init();
	}
	,
	powerHtml: function () {
		var theHtml = {
			init: function () {
				mui.init();
			},
		}

		theHtml.init();
		var myChart = echarts.init(document.getElementById('charte'));
		var option = {
			title: {
				text: '',
				subtext: ''
			},
			tooltip: {
				trigger: 'axis'
			},
			legend: {
				data: ['']
			},
			toolbox: {
				show: true,
				feature: {
					mark: {
						show: true
					},
					dataView: {
						show: true,
						readOnly: false
					},
					magicType: {
						show: true,
						type: ['line', 'bar']
					},
					restore: {
						show: true
					},
					saveAsImage: {
						show: true
					}
				}
			},
			calculable: true,
			xAxis: [{
				type: 'category',
				data: ['1日', '2日', '3日', '4日', '5日', '6日', '7日', '8日', '9日', '10日', '11日', '12日', '13日', '14日', '15日', '16日', '17日', '18日', '19日', '20日', '21日', '22日', '23日', '24日', '25日', '26日', '27日', '28日', '29日', '30日', '31日'],
				axisLabel: {
					textStyle: {
						color: "#fff"
					}
				},
				axisLine: {
					lineStyle: {
						color: "#fff"
					}
				},
				axisTick: {
					lineStyle: {
						color: "#fff"
					}
				}
			}],
			yAxis: [{
				type: 'value',
				axisLabel: {
					textStyle: {
						color: "#fff"
					}
				},
				axisLine: {
					lineStyle: {
						color: "#fff"
					}
				},
				axisTick: {
					lineStyle: {
						color: "#fff"
					}
				}
			}],
			series: [{
					name: '',
					type: 'bar',
					data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3, 2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],

				}

			]
		};
		myChart.setOption(option);

		var option2 = {
			title: {
				text: '',
				subtext: ''
			},
			tooltip: {
				trigger: 'axis'
			},
			legend: {
				data: ['']
			},
			toolbox: {
				show: true,
				feature: {
					mark: {
						show: true
					},
					dataView: {
						show: true,
						readOnly: false
					},
					magicType: {
						show: true,
						type: ['line', 'bar']
					},
					restore: {
						show: true
					},
					saveAsImage: {
						show: true
					}
				}
			},
			calculable: true,
			xAxis: [{
				type: 'category',
				data: ['2017', '2018', '2019'],
				axisLabel: {
					textStyle: {
						color: "#fff"
					}
				},
				axisLine: {
					lineStyle: {
						color: "#fff"
					}
				},
				axisTick: {
					lineStyle: {
						color: "#fff"
					}
				}
			}],
			yAxis: [{
				type: 'value',
				axisLabel: {
					textStyle: {
						color: "#fff"
					}
				},
				axisLine: {
					lineStyle: {
						color: "#fff"
					}
				},
				axisTick: {
					lineStyle: {
						color: "#fff"
					}
				}
			}],
			series: [{
					name: '',
					type: 'bar',
					data: [5.1, 4.7, 5.6],
					barWidth: '20px'
				}

			]
		};

		$('.zhexianBtn').on('click', 'span', function () {
			$(this).addClass('active').siblings().removeClass('active')

			if ($(this).index() == 0) {
				myChart.setOption(option);
			} else {
				myChart.setOption(option2);
			}
		})

	},
	bookHtml: function () {
		var theHtml = {
			init: function () {
				mui.init();
			},
		}

	},
	batteryHtml: function () {
		var theHtml = {
			init: function () {
				mui.init();
			},
		}

		theHtml.init();

		var myChart = echarts.init(document.getElementById('charte'));
		var option = {
			title: {
				text: '',
				subtext: ''
			},
			tooltip: {
				trigger: 'axis'
			},
			legend: {
				data: ['']
			},
			toolbox: {
				show: true,
				feature: {
					mark: {
						show: true
					},
					dataView: {
						show: true,
						readOnly: false
					},
					magicType: {
						show: true,
						type: ['line', 'bar']
					},
					restore: {
						show: true
					},
					saveAsImage: {
						show: true
					}
				}
			},
			calculable: true,
			xAxis: [{
				type: 'category',
				data: ['1日', '2日', '3日', '4日', '前天', '昨天', '今天'],
				axisLabel: {
					textStyle: {
						color: "#fff"
					}
				},
				axisLine: {
					lineStyle: {
						color: "#fff"
					}
				},
				axisTick: {
					lineStyle: {
						color: "#fff"
					}
				}
			}],
			yAxis: [{
				type: 'value',
				axisLabel: {
					textStyle: {
						color: "#fff"
					}
				},
				axisLine: {
					lineStyle: {
						color: "#fff"
					}
				},
				axisTick: {
					lineStyle: {
						color: "#fff"
					}
				}
			}],
			series: [{
					name: '',
					type: 'line',
					data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6],

				}

			]
		};
		myChart.setOption(option);
	},

	settingHtml: function () {
		var theHtml = {
			init: function () {
				mui.init();
			},
		}
		theHtml.init();

		mui('.tabUl').on('tap', 'li', function () {
			var _this = this
			let index = _this.getAttribute('data-index')
			for (let i = 0; i < _this.parentNode.children.length; i++) {
				_this.parentNode.children[i].classList.remove('active')
				mui('.settingBox')[i].classList.add('dn')
			}
			_this.classList.add('active')
			mui('.settingBox')[index].classList.remove('dn')
		})


		// 悬架
		$('.xuanjai').on('click', 'li', function () {
			$(this).addClass('active').siblings().removeClass('active')
			switch ($(this).index()) {
				case 0:
					$('.chejia').animate({
						top: '5%'
					}, 1000);
					break;
				case 1:
					$('.chejia').animate({
						top: '7%'
					}, 1000);
					break;
				case 2:
					$('.chejia').animate({
						top: '10%'
					}, 1000);
					break;
			}
		})


	},
	flowHtml: function () {
		var theHtml = {
			init: function () {
				mui.init();
			},
		}

		theHtml.init();

		var myChart = echarts.init(document.getElementById('charte'));
		var option = {
			title: {
				text: '',
				subtext: ''
			},
			tooltip: {
				trigger: 'axis'
			},
			legend: {
				data: ['']
			},
			toolbox: {
				show: true,
				feature: {
					mark: {
						show: true
					},
					dataView: {
						show: true,
						readOnly: false
					},
					magicType: {
						show: true,
						type: ['line', 'bar']
					},
					restore: {
						show: true
					},
					saveAsImage: {
						show: true
					}
				}
			},
			calculable: true,
			xAxis: [{
				type: 'category',
				data: ['1日', '2日', '3日', '4日', '前天', '昨天', '今天'],
				axisLabel: {
					textStyle: {
						color: "#fff"
					}
				},
				axisLine: {
					lineStyle: {
						color: "#fff"
					}
				},
				axisTick: {
					lineStyle: {
						color: "#fff"
					}
				}
			}],
			yAxis: [{
				type: 'value',
				axisLabel: {
					textStyle: {
						color: "#fff"
					}
				},
				axisLine: {
					lineStyle: {
						color: "#fff"
					}
				},
				axisTick: {
					lineStyle: {
						color: "#fff"
					}
				}
			}],
			series: [{
					name: '',
					type: 'line',
					data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6],

				}

			]
		};
		myChart.setOption(option);
	},
	setting2Html: function () {
		var theHtml = {
			init: function () {
				mui.init();
			},
		}

		theHtml.init();
	},
	weatherHtml: function () {
		var theHtml = {
			init: function () {
				mui.init();
			},
		}

		theHtml.init();

		var myChart = echarts.init(document.getElementById('charte'));
		var option = {
			title: {
				text: '',
				subtext: ''
			},
			tooltip: {
				trigger: 'axis'
			},
			legend: {
				data: ['']
			},
			toolbox: {
				show: true,
				feature: {
					mark: {
						show: true
					},
					dataView: {
						show: true,
						readOnly: false
					},
					magicType: {
						show: true,
						type: ['line', 'bar']
					},
					restore: {
						show: true
					},
					saveAsImage: {
						show: true
					}
				}
			},
			calculable: true,
			xAxis: [{
				type: 'category',
				data: ['1日', '2日', '3日', '4日', '前天', '昨天', '今天'],
				axisLabel: {
					textStyle: {
						color: "#fff"
					}
				},
				axisLine: {
					lineStyle: {
						color: "#fff"
					}
				},
				axisTick: {
					lineStyle: {
						color: "#fff"
					}
				}
			}],
			yAxis: [{
				type: 'value',
				axisLabel: {
					textStyle: {
						color: "#fff"
					}
				},
				axisLine: {
					lineStyle: {
						color: "#fff"
					}
				},
				axisTick: {
					lineStyle: {
						color: "#fff"
					}
				}
			}],
			series: [{
					name: '',
					type: 'line',
					data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6],

				}

			]
		};
		myChart.setOption(option);
	},
	dirveHtml: function () {
		var theHtml = {
			init: function () {
				mui.init();
			},
		}

		theHtml.init();

		$('.setting2List').click(function () {
			console.log($(this).index());
			$('.ovlBox').eq($(this).index()).fadeIn(500)
		})

		$('.icon-jiantou1').click(function () {
			$('.ovlBox').fadeOut(500)
		})
	},
	albumHtml: function () {
		var theHtml = {
			init: function () {
				mui.init();
			},
		}

		theHtml.init();
	},
	reversingHtml: function () {
		var theHtml = {
			init: function () {
				mui.init();
			},
		}

		theHtml.init();
	}
}