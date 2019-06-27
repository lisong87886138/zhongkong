


// 请求数据
var apiUrl = "api/model.json";
var dataAll;
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
		dataAll = data
	},
	error: function (xhr, type, errorThrown) {
		//异常处理；
		console.log(type);
	}
});

// 初始化 数据+页面
for (var i = 0; i < dataAll.length; i++) {
	el += `<li class="borderBottom" data-id="${dataAll[i].id}" data-index="${dataAll[i].id}">${dataAll[i].title}<span class="iconfont icon-arrow-up _rotate90"></span></li>`
}
dq('.oneTitle ul').innerHTML = el
dq('.twoTitle ul').innerHTML = `<li class="borderBottom" data-id="0" data-index="0">内部简介</li><li class="borderBottom" data-id="0" data-index="1">外观简介</li>`
dq('.book-text').innerHTML = `<p>${dataAll[0].contont[0]}</p>`
mui('.oneTitle li')[0].classList.add('textColorAndBg')
mui('.twoTitle li')[0].classList.add('textColorAndBg')


// 点击左侧li
mui('.oneTitle').on('tap', 'li', function (event) {
	var _this = this;
	for (let i = 0; i < dq('.oneTitle ul').children.length; i++) {
		dq('.oneTitle ul').children[i].classList.remove('textColorAndBg')
	}
	_this.classList.add('textColorAndBg')
	var thisDataId = _this.getAttribute("data-id")
	var el2 = '';
	for (let i = 0; i < dataAll[thisDataId].smallTitle.length; i++) {
		el2 += `<li class="borderBottom" data-id="${dataAll[thisDataId].id}" data-index="${i}">${dataAll[thisDataId].smallTitle[i]}</li>`
	}
	dq('.twoTitle ul').innerHTML = el2
	mui('.twoTitle li')[0].classList.add('textColorAndBg')
	dq('.book-text').innerHTML = dataAll[thisDataId].contont[0]
})
// 点击右侧li
mui('.twoTitle').on('tap', 'li', function () {
	var _this = this
	var thisDataId = _this.getAttribute("data-id")
	var thisDataIndex = _this.getAttribute("data-index")

	for (let i = 0; i < dq('.twoTitle ul').children.length; i++) {
		dq('.twoTitle ul').children[i].classList.remove('textColorAndBg')
	}
	_this.classList.add('textColorAndBg')

	dq('.book-text').innerHTML = dataAll[thisDataId].contont[thisDataIndex]
})

// 点击更多 箭头
var bookState = true;
mui('.book-main1').on('tap', '.more', function () {
	if (bookState) {
		dq('.book-main1').style.height = "22%"
		dq('.book-main2').style.height = "62.5%"
		dq('.more span').classList.add('_rotate180')
		bookState = false
	} else {
		dq('.book-main1').style.height = "37.5%"
		dq('.book-main2').style.height = "40.5%"
		dq('.more span').classList.remove('_rotate180')
		bookState = true
	}
})

