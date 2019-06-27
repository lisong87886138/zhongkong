// websocket 测试


// 登录
// {"ctype":202,"data":{"group_id":1,"username":"test","idnumber":25,"grade_name":"一班","uid":25}}
// modelx 1200*1920
// model3 1920*1200
// 荣威ERX5 1920*1280
// 蔚来ES6  1600*1400
// 蔚来ES8 1600*1200
// 选车型 选车 119 modelx ,120 model3 ,407 ERX5,408 腾势500,409 蔚来ES8
// {"ctype":"205","data":{"selectcartype":119}}

// 操作
// {"ctype":"204","data":{"operation_id":"BatteryGroup"}}  .Rw_BatteryGroup
// 
// {"ctype":"201","data":{"type":uniqueid,"state":0}}

//1： 未处理问题：第一次登陆还没选车型，已有登陆信息 ，页面上不显示



// 连接服务端
var ws;
var indexBool = true;

function connect() {
  // 创建websocket
  ws = new WebSocket("ws://172.16.0.222:7000");
  // 当socket连接打开时，输入用户名
  ws.onopen = onopen;
  // 当有消息时根据消息类型显示不同信息
  ws.onmessage = onmessage;
  ws.onclose = function () {
    console.log("连接关闭，定时重连");
    connect();
  };
  ws.onerror = function () {
    console.log("出现错误");
  };
}

function onopen() {
  console.log('已连接');
  localStorage.removeItem("info");

  // removeLocalStorage('info')
  ws.send('{"ctype":202,"data":{}}');
}

function onmessage(event) {
  var data = JSON.parse(event.data);
  console.log(data);
  // console.log(data.ctype);
  switch ('' + data.ctype) {
    case '201':
      console.log(123);

      break

    case '202':
      // 登录信息// 第一步 登录 ----> 接收消息 -----> 进入对应车的中控
      // console.log("=====>" , getLocalStorage("info"));

      if (data.data.client_type == 1) {

      } else {
        var info = {
          ctype: data.ctype,
          grade_name: data.data.grade_name,
          group_id: data.data.group_id,
          place_name: data.data.place_name,
          uid: data.data.uid,
          username: data.data.username,
          selectcartype: data.data.selectcartype,
          operation_id: data.data.operation_id ? data.data.operation_id : ''
        }
        // 把信息加入localStorage中
        setLocalStorage('info', JSON.stringify(info))
      }
      setConputerList(data.data.client_list)
      break;
    case "203":


      break;
    case '204':


      break;
    case '205':

      break;
    case 'logout':
      // 清除localStorage
      // localStorage.removeItem("info");
      console.log('===>', data);

      var oinfo = getLocalStorage('info');

      // 退出登录 清空数据
      if (oinfo.place_name == data.data.place_name) {
        $('#' + data.data.place_name).attr('src', '../images/icon10.png')
        $('#' + data.data.place_name).attr('data-state', '0')
        $('#' + data.data.place_name).attr('data-name', '')
        $('#' + data.data.place_name).attr('data-idnumber', '')
        $('#' + data.data.place_name).attr('data-grade_name', '')
        $('#' + data.data.place_name).attr('data-login', '0')
      }
      break;
  }


}

connect();



// 设置 电脑 页面的数据效果
function setConputerList(data) {
  for (let p in data) {
    
    if (data[p].length == 0) {

    } else if (data[p].uid != null) {
      $('#' + data[p].place_name).attr('src', '../images/icon12.png')
      $('#' + data[p].place_name + '-' + data[p].place_name).attr('disabled', false)
      $('#' + data[p].place_name).attr('data-name', data[p].username)
      $('#' + data[p].place_name).attr('data-idnumber', data[p].idnumber)
      $('#' + data[p].place_name).attr('data-grade_name', data[p].grade_name)
      $('#' + data[p].place_name).attr('data-login', '1')
    }
  }
}

