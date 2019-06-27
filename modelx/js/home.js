// 设置高度
var ww = document.body.clientWidth
var wh = document.body.clientHeight
// dq('body').style.width = ww+'px'
// dq('body').style.height = wh+'px'


// 初始化底部组件
function footer() {
  var foot = `
          <ul class="footerSeetingUl">
          <li class="li1">
              <div class="flexColumn alignItemsCenter">
                  <img class="icon01" src="img/wish/footer/icon01.png" >
                  <span>控制</span>
              </div>
          </li>
          <li class="li2">
              <div class="flexColumn alignItemsCenter">
                  <img class="icon02" src="img/wish/footer/icon02.png" >
                  <img class="icon03" src="img/wish/footer/icon03.png" >
                  <span class="leftSeatTemperature">13</span>
                  <img class="icon04" src="img/wish/footer/icon04.png" >
              </div>
          </li>
          <li class="li3">
              <div>
                  <img class="icon05 leftTemperature" src="img/wish/footer/icon05.png" onclick="temperature('leftAirconditionTemperature','add')">
                  <span class="textBox"><span class="leftAirconditionTemperature">21</span>.0</span>
                  <img class="icon06" src="img/wish/footer/icon06.png" onclick="temperature('leftAirconditionTemperature','reduce')">
              </div>
              
          </li>
          <li class="li4 alignItemsCenter">
              <img class="icon07" src="img/wish/footer/icon07.png" >
          </li>
          <li class="li5">
              <div class="flexRow justifyContentSpaceAround">
                  <span>前</span>
                  <img class="icon15" src="img/wish/footer/icon15.png" >
                  <span>后</span>
              </div>
              <div class="flexColumn alignItemsCenter">
                  <img class="icon08" src="img/wish/footer/icon08.png" >
                  <span>温度控制</span>
              </div>         
          </li>
          <li class="li6 alignItemsCenter">
              <img  class="icon09" src="img/wish/footer/icon09.png" >
          </li>
          <li class="li7">
              <div>
                  <img class="icon05" src="img/wish/footer/icon05.png" onclick="temperature('rightAirconditionTemperature','add')">
                  <span class="textBox"><span class="rightAirconditionTemperature">21</span>.0</span>
                  <img class="icon06" src="img/wish/footer/icon06.png" onclick="temperature('rightAirconditionTemperature','reduce')">
              </div>
              
          </li>
          <li class="li8">
              <div class="flexColumn alignItemsCenter">
                  <img class="icon11" src="img/wish/footer/icon11.png" >
                  <span class="rightSeatTemperature">13</span>
                  <img class="icon10" src="img/wish/footer/icon10.png" >
                  <img class="icon04" src="img/wish/footer/icon04.png" >
              </div>
          </li>
          <li class="li9">
              <div class="flexColumn alignItemsCenter">
                  <img class="icon13" src="img/wish/footer/icon13.png" >
                  <img class="icon12" src="img/wish/footer/icon12.png" >
                  <img class="icon14" src="img/wish/footer/icon14.png" >
              </div>
          </li>
      </ul>
  `
  dq('.footerSeeting').innerHTML = foot
}

// 初始化充电信息 组件 
function charge() {
  var headerTop = `
      <div class="headerTopBlock1">
          <span class="iconfont icon-tongsuokai"></span>
          <span class="iconfont icon-lighting"></span>
          <span class="iconfont icon-sousuoyemiantubiao"></span>
      </div>
      <div class="headerTopBlock2">
          <span class="iconfont icon-tesila"></span>
          <span class="iconfont icon-shijian"></span>
          <span class="iconfont icon-lanya"></span>
          <span class="iconfont icon-ico-"></span>
      </div>
      <div class="headerTopBlock3">
          <span>17 : 30</span>
      </div>
  `
  dq('.headerTop').innerHTML = headerTop
  var charge = `
      <div class="charge-main">
          <div class="charge-box1">
              <div class="charge-head">
                  <span class="iconfont icon-guanbi" onclick="onChargeTap()"></span>
                  <div class="charge-head-text" onclick="onOpenTap('open')">解锁充电接口</div>
              </div>
              <div class="charge-ready">
                  准备充电
              </div>
              <div class="charge-kilometre">
                  396km
              </div>
              <div class="charge-car">
                  <div class="charge-amount"></div>
                  <span class="iconfont icon-tongsuoguan" onclick="onOpenTap('close')"></span>
                  <img src="images/charge-car_03.png" alt="">
              </div>
              <div class="charge-inbtn">
                  <div class="charge-btn">设置限制</div>
              </div>
          </div>
          <div class="charge-box2">
              <div class="charge-power">
                  <div>
                      <span class="iconfont icon-locatefuben"></span>
                      充电电流
                  </div>
                  <div>
                      <span class="iconfont icon-locatefuben"></span>
                      定时充电
                  </div>
                  <div>
                      超级充电中
                  </div>
              </div>

              <div class="charge-inbtn">
                  <div class="charge-ele">
                      <span class="iconfont icon-jianhao" onclick="temperature('charge-e','reduce')"></span>
                      <div class="charge-ele-num"><span class="charge-e">24</span>A</div>
                      <span class="iconfont icon-iconfont7" onclick="temperature('charge-e','add')"></span>
                  </div>

                  <div class="charge-time">
                      <div class="mui-switch mui-switch-mini">
                          <div class="mui-switch-handle"></div>
                      </div>
                      <div class="charge-ele textActive">
                          <span class="iconfont icon-jianhao" onclick="chargeTimeTap('reduce',10)"></span>
                          <div class="charge-ele-num"><span class="charge-timeS">0</span>:<span class="charge-timeM">0</span></div>
                          <span class="iconfont icon-iconfont7" onclick="chargeTimeTap('add',10)"></span>
                      </div>
                  </div>

                  <div class="charge-sup">最近未进行超级充电</div>
              </div>
          </div>
      </div>
  `
  dq('.charge').innerHTML = charge
}

footer();
charge();

//切换 charge页面
// function onChargeTap() {
//   var nowState = dq(".li3").getAttribute('data-state');
//   if (nowState == "false") {
//       dq(".charge").show();
//       dq(".li3").setAttribute('data-state', "true")
//   } else {
//       dq(".charge").hide();
//       dq(".li3").setAttribute('data-state', "false")
//   }
// }



// 增加温度, 降低温度封装方法
function temperature(className, state) {
  // console.log(state)
  var temp = document.getElementsByClassName(className);
  var num = parseFloat(temp[0].innerHTML);
  if (state == "add") {
      num++;
  } else {
      num--;
  }
  temp[0].innerText = num;
}

// 点击 解锁充电接口
function onOpenTap(state) {
  if (state == 'open') {
      dq('.charge-car .iconfont').classList.remove('icon-tongsuoguan')
      dq('.charge-car .iconfont').classList.add('icon-tongsuokai')
  } else {
      dq('.charge-car .iconfont').classList.remove('icon-tongsuokai')
      dq('.charge-car .iconfont').classList.add('icon-tongsuoguan')
  }
}

// 定时充电 切换按钮 允许和取消点击
dq(".mui-switch").addEventListener("toggle", function (event) {
  if (event.detail.isActive) {
      // console.log("你启动了开关");
      dq('.charge-time .charge-ele').classList.remove("textActive")
      dq(".charge-time .mui-switch").setAttribute('data-switch', "0")
  } else {
      //console.log("你关闭了开关");
      dq('.charge-time .charge-ele').classList.add("textActive")
      dq(".charge-time .mui-switch").setAttribute('data-switch', "1")
  }
})
// 定时充电
function chargeTimeTap(state, setTime) {
  var numS = dq('.charge-timeS').innerHTML
  var numM = dq('.charge-timeM').innerHTML
  var switchNum = dq(".charge-time .mui-switch").getAttribute("data-switch")
  if (switchNum == 1) {
      return;
  }
  if (state == "add") {
      if (numM == (60 - setTime)) {
          numM = 0
          numS == 23 ? numS = 0 : numS++
      } else {
          numM = Number(numM) + setTime
      }
  } else {
      if (numM <= 0) {
          numM = (60 - setTime)
          numS == 0 ? numS = 23 : numS--
      } else {
          numM = Number(numM) - setTime
      }
  }
  dq('.charge-timeS').innerHTML = numS
  dq('.charge-timeM').innerHTML = numM
}

mui('.threePieces').on('tap', '.bookBox', function () {
  // jtFn.openWindow('book.html')
  location.href = 'book.html';
})


// 跳转页面到 控制页

$(document).on('click' , '.footerSeetingUl .li1' , function(){
  let _this = this
  // jtFn.openWindow('model.html')
  switch (_this.className) {
      case 'li1':
          location.href = 'model.html';
          // jtFn.openWindow('model.html')
      break;

  }
})
