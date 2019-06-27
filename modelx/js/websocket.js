
// websocket 测试
// 连接服务端
var ws;

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
}

function onmessage(event) {
    var data = JSON.parse(event.data);
    console.log(data);

}
connect();