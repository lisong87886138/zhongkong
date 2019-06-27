Array.prototype.S = String.fromCharCode(2);
Array.prototype.in_array = function (e) {
    var r = new RegExp(this.S + e + this.S);
    return (r.test(this.S + this.join(this.S) + this.S));
};

function parse_Array(arr, word) {
    if (arr.length > 0) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].in_array(word) == true) {
                return i;
            }
        }
    }
    return -1;
}


// websocket 测试
// 连接服务端
var ws;

function connect() {
    // 创建websocket
    ws = new WebSocket("ws://139.196.27.144:7000");
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

    if (typeof (AudioObj) != "undefined" && data.type == 'audio' && AudioObj.data.pageId == 'FM') {
        // FM
        AudioObj.fmWebsocket(data);
    } else if (typeof (map) != "undefined" && data.type == 'map' && mapObj.data.pageId == 'MAP') {
        // MAP
        mapObj.mapWebsocket(data);
    } else if (typeof (mp3) != "undefined" && data.type == 'mp3' && mp3.data.pageId == 'MP3') {
        // MP3
        mp3.mp3Websocket(data)
    } else if (typeof (video) != "undefined" && data.type == 'video' && video.data.pageId == 'VIDEO') {
        // VIDEO
        video.videoWebsocket(data)
    }






    // switch (data.type) {
    //     case 'audio'://FM

    //         if (data.word == "播放") {
    //             AudioObj.playAudio(data.id);
    //         }else if (data.word == "暂停") {
    //             CKobject.getObjectById('ckplayer_a1').playOrPause();
    //             console.log('暂停');
    //         }else if (data.word == "上一个") {
    //             console.log('上一个');
    //             if(data.id<0){
    //                data.id =  list.length -1
    //             }
    //            AudioObj.playAudio(data.id)
    //         }else if (data.word == "下一个") {
    //             console.log('下一个');
    //             if(data.id>=list.length){
    //                 data.id =  0
    //             }
    //             AudioObj.playAudio(data.id)
    //         }else{
    //             console.log('其他');
    //             AudioObj.matchWord(data.word)
    //         }
    //     break;

    //     case 'mp3': //'mp3':
    //         var mp3 = document.getElementById('mp3')
    //         if (data.word == "播放") {
    //             mp3.src = audioList[0].url;
    //             mp3.play();
    //         }else if (data.word == "暂停") {
    //             mp3.pause();
    //         }else if (data.word == "上一个") {
    //             if(data.id<0){
    //                 data.id = audioList.length -1;
    //             }
    //             mp3.src = audioList[data.id].url;
    //             mp3.play();
    //         }else if (data.word == "下一个") {
    //             if(data.id >= audioList.length){
    //                 data.id = 0;
    //             }
    //             mp3.src = audioList[data.id].url;
    //             mp3.play();
    //         }else{
    //             return
    //         }
    //     break;

    //     case 'video'://'video':
    //         var video = document.getElementById('video')
    //         if (data.word == "播放") {
    //             video.src = videoList[0].url;
    //             video.play();
    //         }else if (data.word == "暂停") {
    //             video.pause();
    //         }else if (data.word == "上一个") {
    //             if(data.id<0){
    //                 data.id = videoList.length -1;
    //             }
    //             video.src = videoList[data.id].url;
    //             video.play();
    //         }else if (data.word == "下一个") {
    //             if(data.id >= videoList.length){
    //                 data.id = 0;
    //             }
    //             video.src = videoList[data.id].url;
    //             video.play();
    //         }else{
    //             return
    //         }
    //     break;

    //     case 'map': //map
    //         var inputText = document.getElementById('tipinput');
    //         var routeIcon = document.getElementsByClassName('auto-item');
    //         // console.log(routeIcon);
    //         var indexList = [
    //             ["重新搜索"],
    //             ["一","第一","第一个"],
    //             ["二","第二","第二个"],
    //             ["三","第三","第三个"],
    //             ["四","第四","第四个"],
    //             ["五","第五","第五个"],
    //             ["六","第六","第六个"],
    //             ["七","第七","第七个"],
    //             ["八","第八","第八个"],
    //             ["九","第九","第九个"],
    //             ["十","第十","第十个"]
    //         ];
    //         var index = -1;

    //         if(routeIcon.length>0){
    //             index = parse_Array(indexList,data.word)
    //             //console.log(index);

    //             if(index == 0){
    //                 dq('.amap-sug-result').classList.remove('db')
    //                 dq('.amap-sug-result').innerHTML = "";
    //                 inputText.value = "";
    //                 driving.clear();
    //                 //console.log('index = 0的时候=======>',index);
    //             }else if(index == -1){
    //                 dq('.amap-sug-result').classList.remove('db')
    //                 dq('.amap-sug-result').innerHTML = "";
    //                 inputText.value = data.word; 
    //                // console.log('index = -1的时候=======>',index);
    //             }else{ 
    //                 //console.log('index > 0的时候=======>',index);
    //                 inputText.value = routeIcon[index-1].innerText;
    //                 var _thisDataLng = routeIcon[index-1].getAttribute("data-lng")
    //                 _thisDataLng = _thisDataLng.split(',');
    //                 drivingPointPoute(_thisDataLng[0],_thisDataLng[1])

    //                 dq('.amap-sug-result').classList.remove('db')
    //                 dq('.amap-sug-result').innerHTML = "";
    //             }
    //         }else{
    //             //console.log(data.word);
    //             inputText.value = data.word; 
    //             voicePlan(data.word)
    //         }

    //     break;
    // }

}
connect();