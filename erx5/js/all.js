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
	openWindow:function(url){
		mui.openWindow({
			url:url,
			id:url
		})
	},
	// 遮罩蒙板
	jtMask: function() {
		var mask = mui.createMask(); //callback为用户点击蒙版时自动执行的回调；
		var _img = document.createElement("img");
		_img.src = "data:image/gif;base64,R0lGODlhgACAAKIEAN3d3bu7u////5mZmf///wAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QjZEQUY1MTZCQjcwMTFFNTk2MEZBMUI3OTA4NTc3QTEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QjZEQUY1MTdCQjcwMTFFNTk2MEZBMUI3OTA4NTc3QTEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCNkRBRjUxNEJCNzAxMUU1OTYwRkExQjc5MDg1NzdBMSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCNkRBRjUxNUJCNzAxMUU1OTYwRkExQjc5MDg1NzdBMSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgH//v38+/r5+Pf29fTz8vHw7+7t7Ovq6ejn5uXk4+Lh4N/e3dzb2tnY19bV1NPS0dDP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";
		_img.style.cssText = "position: fixed;top: 50%;left: 50%;width: 40px;height: 40px; margin-left: -20px;margin-right: -20px;";
		mask[0].appendChild(_img);
		window._mask = mask;

	},
	jtMaskShow: function() {
		try {
			window._mask.show();
		} catch(e) {
			console.log("-------------jtMaskShow", e)
		}
	},
	jtMaskClose: function() {
		try {
			window._mask.close();
		} catch(e) {
			console.log("----------------jtMaskClose", e)
		}
	},
}



// 通用方法-----------------------------------------------------------------------------------------------------------------------
// 温度改变
mui("#home-footer").on("swipedown", ".leftTemperature,.rightTemperature", function () {
	// console.log("你向下滑动了");
	var _this = this;
	temperature(_this.classList[0], "add");
})

mui("#home-footer").on("swipeup", ".leftTemperature,.rightTemperature", function () {
	// console.log("你向上滑动了");
	var _this = this;
	temperature(_this.classList[0], "reduce");
})


mui("#home-footer").on("tap", "div", function () {
	var _this = this;

	switch (_this.getAttribute('data-id')) {
		case "1":
			location.href = jtApp.urlOption.menu
		break;
		case "2":

		break;
		case "3":

		break;
		case "4":

		break;
		case "5":
			location.href = jtApp.urlOption.airConditioned
		break;
		case "6":

		break;
		case "7":

		break;
		case "8":

		break;
		case "9":
			location.href = jtApp.urlOption.panorama360
		break;
	}


})

// 温度加减方法
function temperature(className, state) {
	var temp = document.getElementsByClassName(className);
	var num = parseFloat(temp[0].innerText);
	if (state == "add") {
		num++;
	} else {
		num--;
	}
	temp[0].innerText = num;
}

var foot = `
	<div data-id="1">
	<span class="iconfont icon-che"></span>
	</div>
	<div data-id="2">
	<span class="leftTemperature">24</span>°
	</div>
	<div data-id="3">
	<span class="iconfont icon-zuoyijiarekaiqi"></span>
	</div>
	<div data-id="4">
	AC
	</div>
	<div data-id="5">
		<span class="iconfont icon-zuoyi"></span>
	</div>
	<div data-id="6">
	<span class="iconfont icon-neixunhuan"></span>
	</div>
	<div data-id="7">
	<span class="iconfont icon-zuoyijiarekaiqi _rotateY180"></span>
	</div>
	<div data-id="8">
	<span class="rightTemperature">24</span>°
	</div>
	<div data-id="9">
	<span class="iconfont icon-icon-test"></span>
	</div>
`
dq("#home-footer").innerHTML = foot

// 通用方法-----------------------------------------------------------------------------------------------------------------------

var jtApp = {
	version: "1.0.0", // 版本
	apiOption: {
		rootApi: "", // ajax
	},
	urlOption: {
		index: "./index.html", // app根目录
		chair: "./chair.html", //座椅
		menu: "./menu.html", //菜单
		panorama360: "./panorama360.html", //菜单
		book:"./book.html", //手册
		airConditioned:"./air-conditioned.html", //手册
		setting:"./setting.html",//设置
		keepingCar:"./keepingCar.html"//养车
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

		// 地图控件 缩放放大功能
		// mui(".mapZoom").on("tap", ".icon-hao,.icon-sub", function () {
		// 	// event.stopPropagation()
		// 	// event.preventDefault()

		// 	var _this = this;
		// 	if (_this.getAttribute("data-state") == "add") {
		// 		map.zoomIn()
		// 	} else {
		// 		map.zoomOut()
		// 	}
		// })

		//地图
		// var map = new BMap.Map("allmap");
		// var point = new BMap.Point(121.513122, 31.105516);
		// var mk, pt, myIcon, marker2, gotoAddress;
		// var ptt = [];
		// // var point = new BMap.Point(121.48789949,31.24916171);

		// map.centerAndZoom(point, 18);
		// var geolocation = new BMap.Geolocation();
		// geolocation.getCurrentPosition(function (r) {
		// 	if (this.getStatus() == BMAP_STATUS_SUCCESS) {
		// 		mk = new BMap.Marker(r.point);
		// 		map.addOverlay(mk)
		// 		map.panTo(r.point);

		// 		// console.log(r.point.lng+","+r.point.lat)
		// 		pt = r.point;
		// 		myIcon = new BMap.Icon("images/mapLogo.png", new BMap.Size(60, 60));
		// 		marker2 = new BMap.Marker(pt, {
		// 			icon: myIcon
		// 		}); // 创建标注
		// 		map.addOverlay(marker2);
		// 		map.enableScrollWheelZoom(true);

		// 	} else {
		// 		alert('failed' + this.getStatus());
		// 	}
		// }, {
		// 	enableHighAccuracy: true
		// });

		// var bottom_left_control = new BMap.ScaleControl({
		// 	anchor: BMAP_ANCHOR_BOTTOM_LEFT,
		// 	offset: new BMap.Size(40, 10)
		// }); // 左上角，添加比例尺

		// map.addControl(bottom_left_control);

		// 搜索功能
		// function search() {
		// 	var ac = new BMap.Autocomplete({ //建立一个自动完成的对象
		// 		"input": "suggestId",
		// 		"location": map
		// 	});

		// 	ac.addEventListener("onhighlight", function (e) { //鼠标放在下拉列表上的事件
		// 		var str = "";
		// 		var _value = e.fromitem.value;
		// 		var value = "";
		// 		if (e.fromitem.index > -1) {
		// 			value = _value.province + _value.city + _value.district + _value.street + _value.business;
		// 		}
		// 		str = "FromItem<br />index = " + e.fromitem.index + "<br />value = " + value;

		// 		value = "";
		// 		if (e.toitem.index > -1) {
		// 			_value = e.toitem.value;
		// 			value = _value.province + _value.city + _value.district + _value.street + _value.business;
		// 		}
		// 		str += "<br />ToItem<br />index = " + e.toitem.index + "<br />value = " + value;
		// 		dq("#searchResultPanel").innerHTML = str;
		// 		gotoAddress = [_value.province, _value.city, _value.district, _value.street, _value.business];

		// 	});

		// 	var myValue;
		// 	ac.addEventListener("onconfirm", function (e) { //鼠标点击下拉列表后的事件
		// 		var _value = e.item.value;
		// 		myValue = _value.province + _value.city + _value.district + _value.street + _value.business;
		// 		dq("#searchResultPanel").innerHTML = "onconfirm<br />index = " + e.item.index + "<br />myValue = " + myValue;
		// 		gotoAddress = [_value.province, _value.city, _value.district, _value.street, _value.business];

		// 		setPlace();
		// 	});

		// 	function setPlace() {
		// 		map.clearOverlays(); //清除地图上所有覆盖物
		// 		function myFun() {
		// 			var pp = local.getResults().getPoi(0).point; //获取第一个智能搜索的结果
		// 			map.centerAndZoom(pp, 18);
		// 			map.addOverlay(new BMap.Marker(pp)); //添加标注
		// 		}
		// 		var local = new BMap.LocalSearch(map, { //智能搜索
		// 			onSearchComplete: myFun
		// 		});
		// 		local.search(myValue);
		// 	}

		// }
		// search();
		// 导航
		// mui(".search").on("tap", ".mui-icon-search", function () {
		// 	if (gotoAddress != undefined) {
		// 		var myGeo = new BMap.Geocoder();
		// 		// 将地址解析结果显示在地图上,并调整地图视野
		// 		var address = gotoAddress.join("");
		// 		// console.log(address)
		// 		myGeo.getPoint(address, function (point) {
		// 			if (point) {
		// 				console.log(point)
		// 				var p1 = new BMap.Point(pt.lng, pt.lat);
		// 				var p2 = new BMap.Point(point.lng, point.lat);
		// 				// console.log("p1 =",p1,"p2 = ",p2)
		// 				var driving = new BMap.DrivingRoute(map, {
		// 					renderOptions: {
		// 						map: map,
		// 						autoViewport: true
		// 					}
		// 				});
		// 				driving.search(p1, p2);
		// 			} else {
		// 				alert("您选择地址没有解析到结果!");
		// 			}
		// 		}, gotoAddress[1]);
		// 	}

		// });
	},
	chairHtml: function () {
		var theHtml = {
			init: function () {
				mui.init();
			},
		}
		theHtml.init();

		// 调节座椅
		var tl1 = new TimelineMax();
		var deg = 0;
		var deg2 = 0;
		mui(".mui-content").on("tap", ".chair-btn", function () {
			var _this = this;
			// console.log(_this.classList[1])
			switch (_this.classList[1]) {
				case "chair-btn1":
					moveUp(".chair1");
					break;
				case "chair-btn2":
					moveDown(".chair1");
					break;
				case "chair-btn3":
					moveUp(".chair2");
					break;
				case "chair-btn4":
					moveDown(".chair2");
					break;
				case "chair-btn5":
					deg = deg - 10;
					chairMoveUp(".chair1 .chair-02", deg);
					break;
				case "chair-btn6":
					deg = deg + 10;
					chairMoveDown(".chair1 .chair-02", deg);
					break;
				case "chair-btn7":
					deg2 = deg2 - 10;
					chairMoveUp(".chair2 .chair-02", deg2);
					break;
				case "chair-btn8":
					deg2 = deg2 + 10;
					chairMoveDown(".chair2 .chair-02", deg2);
					break;

			}
		});

		// 座椅向前移动
		function moveUp(className) {
			var top = window.getComputedStyle(dq(className), null).top;
			// console.log(top)
			var tops = top.substring(0, top.lastIndexOf('p'))
			if (tops > 277) {
				top = (Number(tops) - 5) + "px";
				tl1.to(dq(className), 1, {
					"top": top,
					ease: Power0.easeNone
				});
			} else {
				mui.toast("不能移动了！")
			}
		}
		// 座椅向后移动
		function moveDown(className) {
			var top = window.getComputedStyle(dq(className), null).top;
			// console.log(top)
			var tops = top.substring(0, top.lastIndexOf('p'))
			if (tops < 317) {
				top = (Number(tops) + 5) + "px";
				tl1.to(dq(className), 1, {
					"top": top,
					ease: Power0.easeNone
				});
			} else {
				mui.toast("不能移动了！")
			}
		}

		// 座椅靠背向前移动
		function chairMoveUp(className, deg) {
			if (deg > -30) {
				tl1.to(dq(className), 1, {
					rotationX: (deg) + "deg",
					transformOrigin: "50% 0%",
					ease: Power0.easeNone,
				});
			} else {
				deg = -30;
				mui.toast("不能移动了！")
			}
		}
		// 座椅靠背向后移动
		function chairMoveDown(className, deg) {
			if (deg < 30) {
				tl1.to(dq(className), 1, {
					rotationX: (deg) + "deg",
					transformOrigin: "50% 0%",
					ease: Power0.easeNone,
				});
			} else {
				deg = 30;
				mui.toast("不能移动了！")
			}
		}

	},
	menuHtml: function () {
		//跳转到手册页面
		$('.setting').click(function(){
			location.href = jtApp.urlOption.setting
		})
		$('.book').click(function(){
			location.href = jtApp.urlOption.book
		})
		$('.keepingCar').click(function(){
			location.href = jtApp.urlOption.keepingCar
		})
	},
	panHtml:function(){

		// 设置高度
		var ww = document.body.clientWidth;
		var wh = document.body.clientHeight;
		dq('body').style.width = ww+'px';
		dq('body').style.height = wh+'px';
		var footH = dq('#home-footer').clientHeight ;
		dq('.contont').style.height = (wh - footH)+'px';

		//切换摄像头
		mui('.p360-btn').on('tap','.btn',function(){
			var _this =this;

			for(let i=0;i<mui('.btn').length;i++){
				mui('.btn')[i].classList.remove('btnActive')
			}
			_this.classList.add('btnActive')

			switch(_this.getAttribute('data-state')){
				case '1':
					console.log('摄像头切换至 前置');
				break;
				case '2':
					console.log('摄像头切换至 左侧');
				break;
				case '3':
					console.log('摄像头切换至 右侧');
				break;
				case '4':
					console.log('摄像头切换至 后侧');
				break;	
			}
		})

		// 摄像头
		var aVideo=document.getElementById('video');
		var aCanvas=document.getElementById('canvas');
		var ctx=aCanvas.getContext('2d');
			
			
		var con = {
			video:true,
			audio:false
		}

		
		var prom = navigator.mediaDevices.getUserMedia(con)
		prom.then(function(MediaStream){
			video.srcObject = MediaStream
			video.play()
		})



	},
	bookHtml:function(){
		// 设置高度
		var wh = document.body.clientHeight;
		dq('body').style.height = wh+'px';
		var topH = dq('.content .title').clientHeight ;
		var footH = dq('#home-footer').clientHeight ;
		dq('.book-box3-in').style.height = (wh - footH - topH)+'px';

		//点击切换div 控制 能量 车辆设置
		mui('.title').on('tap','div',function(){
			var _this = this;
			for(let i = 0; i<mui('.title div').length;i++){
				mui('.title div')[i].classList.remove('borderBottom')
			}
			_this.classList.add('borderBottom')
			switch(_this.classList[0]){
				case 'control':
					dq('.book-box1').show()
					dq('.book-box2').hide()
					dq('.book-box3').hide()
				break;
				case 'power':
					dq('.book-box1').hide()
					dq('.book-box2').show()
					dq('.book-box3').hide()
				break;
				case 'setting':
					dq('.book-box1').hide()
					dq('.book-box2').hide()
					dq('.book-box3').show()
				break;
			}
		})

		// 切换边界 状态 定义状态
		mui('.book-btn').on('tap','.book-in-btn',function(){
			var _this = this;
			var state = _this.getAttribute('data-state')
			if(state == "false"){
				_this.classList.add('border50')
				_this.setAttribute('data-state',true)
			}else{
				_this.classList.remove('border50')
				_this.setAttribute('data-state',false)
			}
		})

		//加载数据
		var apiUrl = "js/erx.json";
		var settingData ;
		var el = "";

		mui.ajax(apiUrl, {
			dataType: 'json', //服务器返回json格式数据
			async: false,
			type: 'get', //HTTP请求类型
			timeout: 10000, //超时时间设置为10秒；
			headers: {
				'Content-Type': 'application/json'
			},
			success: function (data) {
				//服务器返回响应，根据响应结果，分析是否登录成功；
				settingData = data
			},
			error: function (xhr, type, errorThrown) {
				//异常处理；
				console.log(type);
			}
		});
		
		for(let i= 0;i<settingData.length;i++){
			el += `
				<li class="mui-table-view-cell mui-media" data-id=${settingData[i].id}>
					<a class="mui-navigate-right">
						<span class="iconfont ${settingData[i].iconFont} mui-media-object mui-pull-left"></span>
						<div class="mui-media-body">
							<span class="book-box3-in-title">${settingData[i].title}</span>
							<p class="mui-ellipsis">${settingData[i].contont}</p>
						</div>   
					</a>
				</li>
			`
		}
		dq('.book-box3 .mui-table-view').innerHTML = el;

		// 点击车辆设置的 list
		mui('.book-box3-in').on('tap','li',function(){
			var _this = this;
			// console.log(_this.getAttribute("data-id"));
			// mui.openWindow({
			// 	id:`settingView.html?id=${_this.getAttribute("data-id")}`,
			// 	url:`settingView.html?id=${_this.getAttribute("data-id")}`
			// })
			location.href = `settingView.html?id=${_this.getAttribute("data-id")}`
		})
	
		// 折线图
		var date = [];
		var data = [Math.floor(Math.random() * 300)];
		
		var mean = 0;

		for(let i=0;i<20;i++){
			date.push([i,Math.floor(Math.random()*10*i)])
		}
		for (let i = 1; i < 20; i++) {
			let num = Math.round((Math.random() - 0.5) * 20 + data[i - 1])
			data.push(num);
		}
	
		var myChart = echarts.init(document.getElementById('charte'));
		var option = {
			tooltip: {
				trigger: 'axis',
				position: function (pt) {
					return [pt[0], '10%'];
				}
			},
			title: {
				left: 'center',
				text: '大数据量面积图',
			},
			toolbox: {
				feature: {
					dataZoom: {
						yAxisIndex: 'none'
					},
					restore: {},
					saveAsImage: {}
				}
			},
			xAxis: {
				type: 'category',
				boundaryGap: false,
				data: ["250","200","150","100","50","0"],
				axisLabel:{
					textStyle:{
						color:"#fff"
					}
				}
			},
			yAxis: {
				type: 'value',
				boundaryGap: [0, '100%'],
				axisLabel:{
					textStyle:{
						color:"#fff"
					}
				}
			},
			dataZoom: [{
				type: 'inside',
				start: 0,
				end: 10
			}, {
				start: 0,
				end: 10,
				handleSize: '80%',
				handleStyle: {
					color: '#fff',
					shadowBlur: 3,
					shadowColor: 'rgba(0, 0, 0, 0.6)',
					shadowOffsetX: 2,
					shadowOffsetY: 2
				}
			}],
			series: [
				{
					// name:'模拟数据',
					type:'line',
					smooth:true,
					symbol: 'none',
					sampling: 'average',
					itemStyle: {
						color: 'rgb(145, 206, 240)'
					},
					areaStyle: {
						// color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
						// 	offset: 0,
						// 	color: 'rgb(255, 158, 68)'
						// }, 
						// {
						// 	offset: 1,
						// 	color: 'rgb(255, 70, 131)'
						// }])
					},
					data: data
				}
			]
		};
		myChart.setOption(option);


		// 平均值
		for(let i =0;i<data.length;i++){
			mean += data[i]
		}
		mean = mean/data.length
		dq('.mean').innerHTML = mean

	},
	settingViewHtml:function(){
		// 设置高度
		var wh = document.body.clientHeight;
		dq('body').style.height = wh+'px';
		var topH = dq('.contont .headerTitle').clientHeight ;
		// dq('.contont-main').style.height = (wh - topH -50)+'px';

		// 获取
		function GetRequest() {  
			var url = location.search; //获取url中"?"符后的字串  
			var theRequest = new Object();  
			if (url.indexOf("?") != -1) {  
			   var str = url.substr(1);  
			   strs = str.split("&");  
			   for(var i = 0; i < strs.length; i ++) {  
				  theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);  
			   }  
			}  
			// console.log(theRequest)
			return theRequest;  
			
		}  
		var id = GetRequest().id
		console.log(id);
		

		//加载数据
		var apiUrl = "js/settingList.json";
		var settingList ;
		var el = "";

		mui.ajax(apiUrl, {
			dataType: 'json', //服务器返回json格式数据
			async: false,
			type: 'get', //HTTP请求类型
			timeout: 10000, //超时时间设置为10秒；
			headers: {
				'Content-Type': 'application/json'
			},
			success: function (data) {
				//服务器返回响应，根据响应结果，分析是否登录成功；
				settingList = data
			},
			error: function (xhr, type, errorThrown) {
				//异常处理；
				console.log(type);
			}
		});
		// console.log(settingList[id]);
		// 设置头部title
		dq('.headerTitle').innerHTML = `${settingList[id].title}`
		// 循环 数据 加载到页面
		for(let i=0;i<settingList[id].pattern.length;i++){

			switch(settingList[id].pattern[i].state){
				case "btn":
					el += `
						<div class="disFelxRow juContSpBet contBg">
							<div class="text">${settingList[id].pattern[i].text[0]}</div>
							<div class="btn">
								<div class="mui-switch mui-switch-mini mui-active">
									<div class="mui-switch-handle"></div>
								</div>
							</div>
						</div>
					`
				break;

				case "btn2":
					el += `
						<div class="disFelxRow juContSpBet contBg">
							<div class="disFelxColu">
								<div class="text">${settingList[id].pattern[i].text[0]}</div>
								<div class="text2">${settingList[id].pattern[i].text[1]}</div>
							</div>
							
							<div class="btn">
								<div class="mui-switch mui-switch-mini mui-active">
									<div class="mui-switch-handle"></div>
								</div>
							</div>
						</div>
					`
				break;

				case "text":
					el += `
						<div class="disFelxRow juContSpBet contBg">
							<div class="text">${settingList[id].pattern[i].text[0]}</div>
							<div class="view">
								<div>
									<span class="textColor">${settingList[id].pattern[i].text[1]} </span> 
									<span>0</span>
								</div>
							</div>
						</div>
					`
				break;

				case "title":
					el += `
						<div class="title">
							${settingList[id].pattern[i].text}
						</div>
					`
				break;

				case "img":
					el += `
						<div class="contBg">
							<img class="img" src="${settingList[id].pattern[i].url[0]}">
						</div>
					`
				break;

				case "switch":
					el += `
						<div class="contBg">
							<div>${settingList[id].pattern[i].text}</div>
							<div class="mui-input-row mui-input-range disFelxRow juContSpBet alignItemsCenter">
								<span class="iconfont icon-che"></span> <input type="range" min="0" max="100"> <span class="iconfont icon-che"></span>
							</div>
						</div>
					`
				break;
			}

		}

		dq('.contont-main').innerHTML = el
		
	},
	airHtml:function(){
		// 切换tab
		mui('.title').on('tap','div',function(){
			var _this = this;
			for(let i = 0; i<mui('.title div').length;i++){
				mui('.title div')[i].classList.remove('borderBottom')
			}
			_this.classList.add('borderBottom')
			switch(_this.getAttribute('data-id')){
				case '1':
					dq('.air-box1').show()
					dq('.air-box2').hide()
				break;
				case '2':
					dq('.air-box1').hide()
					dq('.air-box2').show()
				break;
			}
		})

		// 切换tab
		mui('.air-tab').on('tap','.yuan',function(){
			var _this = this;
			var state = _this.getAttribute('data-state')
			if(state == "false"){
				_this.classList.add('yuan-active')
				_this.setAttribute('data-state',true)
			}else{
				_this.classList.remove('yuan-active')
				_this.setAttribute('data-state',false)
			}
		})

		// 空时风力 大小
		var windNum = 0;
		mui('.wind-power').on("tap",".icon-fengshan1",function(){
			if(windNum<0){
				return
			}
			windNum --
			mui('.progress span')[windNum+1].classList.remove('progress-active')	
		})

		mui('.wind-power').on("tap",".icon-fengshan2",function(){
			if(windNum>=7){
				return
			}
			windNum ++
			mui('.progress span')[windNum].classList.add('progress-active')
		})


		//调节温度
		mui('.tem-control-box2').on('swipeup','.lineHeight',function(){
			// console.log('向上滑动了');
			adjustTemperature("add")	
		})	
		mui('.tem-control-box2').on('swipedown','.lineHeight',function(){
			// console.log('向下滑动了');
			adjustTemperature("reduce")
		})	
		function adjustTemperature(state){
			var num = dq('.lineHeight span').innerText
			if(state == "add"){
				num ++
			}else{
				num --
			}
			mui('.tem-control-box1 div')[0].innerHTML = num + 1
			mui('.tem-control-box1 div')[1].innerHTML = num + 1

			mui('.lineHeight span')[0].innerHTML = num
			mui('.lineHeight span')[1].innerHTML = num

			mui('.tem-control-box3 div')[0].innerHTML = num - 1
			mui('.tem-control-box3 div')[1].innerHTML = num - 1
		}

		// 座椅加热
		mui('.foot').on('tap','.yuan',function(){
			var _this = this;
			var state = _this.getAttribute('data-state')
			if(state == "false"){
				_this.classList.add('yuan-active')
				_this.setAttribute('data-state',true)
			}else{
				_this.classList.remove('yuan-active')
				_this.setAttribute('data-state',false)
			}
		})

		// 净化器
		var purifierNum = 0;
		mui('.air-box2').on("tap",".icon-yezi1",function(){
			if(purifierNum<0){
				return
			}
			purifierNum --
			mui('.air-box2 .progress span')[purifierNum+1].classList.remove('progress-active')
		})

		mui('.air-box2').on("tap",".icon-yezi2",function(){
			if(purifierNum>=7){
				return
			}
			purifierNum ++
			mui('.air-box2 .progress span')[purifierNum].classList.add('progress-active')
		})

		//  开关和 自动
		mui('.air-box2-three').on('tap','.air-box2-three-close,.air-box2-three-auto',function(){
			var _this = this
			var state = _this.getAttribute('data-state')
			if(state == "0"){
				_this.classList.add('active')
				_this.setAttribute("data-state","1")
			}
			if(state == "1"){
				_this.classList.remove('active')
				_this.setAttribute("data-state","0")
			}
		})

	},
	settingHtml:function(){
		
		// header
		mui('.icon').on("tap",".yuan",function(){
			var _this = this
			var state = _this.getAttribute("data-state")
			if(state == "0"){
				_this.classList.add("yuan-active")
				_this.setAttribute("data-state","1")
			}
			if(state == "1"){
				_this.classList.remove("yuan-active")
				_this.setAttribute("data-state","0")
			}
		})

		// 点击 连接蓝牙
		mui('.main-box').on("tap",".connect",function(){
			var _this = this
			mui.confirm("连接该手机", "提示: 连接", ["确定", "取消"], function(e) {
				if(e.index == 0) {
					mui.toast('正在连接...')
				} else {
					return
				}
			}, {
				type: "div"
			})
		})
		//点击 删除蓝牙
		mui('.main-box').on("tap",".delect",function(){
			var _this = this
			console.log(_this.parentNode.parentNode );
			mui.confirm("删除该选项", "提示: 删除", ["确定", "取消"], function(e) {
				if(e.index == 0) {
					_this.parentNode.parentNode.remove();
				} else {
					return
				}
			}, {
				type: "div"
			})
		})

	},
	keepingCarHTML:function(){
		//切换车辆状况与 故障提醒
		mui('.marginAuto').on('tap','div',function(){
			var _this = this
			console.log(_this.getAttribute('data-id'));
			for(let i=0;i<_this.parentNode.children.length;i++){
				_this.parentNode.children[i].classList.remove('ovActive')
				mui('.ovMain')[i].classList.add('dn')
			}
			_this.classList.add('ovActive')
			mui('.ovMain')[_this.getAttribute('data-id')].classList.remove('dn')
		})

		// 打开浮层
		mui('.content').on('tap','.top',function(){
			let _this = this
			dq('.ovlayer').classList.remove('dn')
		})
		mui('.ovMain').on('tap','.ovMainBtn2',function(){
			let _this = this
			mui('.ovlayer-con')[_this.getAttribute('data-id')].classList.remove('dn')
		})

		
		// 关闭浮层
		mui('.ovlayer').on('tap','.icon-jiantou2',function(){
			let _this = this
			dq('.ovlayer').classList.add('dn')
		})
		mui('.ovlayer-con').on('tap','.icon-jiantou2',function(){
			let _this = this
			_this.parentNode.parentNode.parentNode.classList.add('dn')
		})
		// 打开预约检测页面
		mui('.ovMainBtn').on('tap','.ovMainBtn1',function(){
			dq('.ovlayer-test').classList.remove('dn')
		})
		// 关闭预约页面
		mui('.ovlayer-test').on('tap','.icon-jiantou2',function(){
			dq('.ovlayer-test').classList.add('dn')
		})

		// 打开添加联系人 和电话
		mui('.ovlayer-test').on('tap','.smallBox',function(){
			let _this = this
			// console.log(_this.getAttribute('data-id'));
			// mui('.ovlayer-contacts')
			console.log(mui('.ovlayer-contacts'));
			for(let i=0;i<mui('.ovlayer-contacts').length;i++){
				mui('.ovlayer-contacts')[i].classList.add('dn')
			}
			mui('.ovlayer-contacts')[_this.getAttribute('data-id')].classList.remove('dn')
		})

		mui('.ovlayer-contacts').on('tap','.icon-guanbi',function(){
			let _this = this 
			_this.parentNode.parentNode.parentNode.classList.add('dn')
		})

		mui('.ovlayer-contacts').on('tap','.ok',function(){
			let _this = this 
			
			console.log(_this.getAttribute('data-id'));
			
			if( _this.getAttribute('data-id') == 0){
				let val = dq('.name').value
				dq('.contacts .smallText').innerHTML = val
				_this.parentNode.parentNode.classList.add('dn')
			}else{
				let val = dq('.modeS').value
				dq('.mode .smallText').innerHTML = val
				_this.parentNode.parentNode.classList.add('dn')
			}
		})
		// 打开门店列表
		mui('.ovlayer-test').on('tap','.store',function(){
			dq('.ovlayer-store').classList.remove('dn')
		})
	}

	

}