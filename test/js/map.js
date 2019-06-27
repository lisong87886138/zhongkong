

var mapObj = {
    data: {
        "type": "",
        "word": "",
        "id": "",
        "pageId":"MAP"
    },
    
    voiceSearch:function(word){
        mapObj.data.type = 'map';
        mapObj.data.word = word.replace("。",'');
        console.log(word,mapObj.data.type,mapObj.data);
        ws.send(JSON.stringify(mapObj.data)); 
    },
    mapWebsocket:function(data){
        console.log('=====>',data);
        var inputText = document.getElementById('tipinput');
        var routeIcon = document.getElementsByClassName('auto-item');
        // console.log(routeIcon);
        var indexList = [
            ["重新搜索"],
            ["一", "第一", "第一个"],
            ["二", "第二", "第二个"],
            ["三", "第三", "第三个"],
            ["四", "第四", "第四个"],
            ["五", "第五", "第五个"],
            ["六", "第六", "第六个"],
            ["七", "第七", "第七个"],
            ["八", "第八", "第八个"],
            ["九", "第九", "第九个"],
            ["十", "第十", "第十个"]
        ];
        var index = -1;

        if (routeIcon.length > 0) {
            index = parse_Array(indexList, data.word)
            //console.log(index);

            if (index == 0) {
                dq('.amap-sug-result').classList.remove('db')
                dq('.amap-sug-result').innerHTML = "";
                inputText.value = "";
                driving.clear();
                //console.log('index = 0的时候=======>',index);
            } else if (index == -1) {
                dq('.amap-sug-result').classList.remove('db')
                dq('.amap-sug-result').innerHTML = "";
                inputText.value = data.word;
                // console.log('index = -1的时候=======>',index);
            } else {
                //console.log('index > 0的时候=======>',index);
                inputText.value = routeIcon[index - 1].innerText;
                var _thisDataLng = routeIcon[index - 1].getAttribute("data-lng")
                _thisDataLng = _thisDataLng.split(',');
                drivingPointPoute(_thisDataLng[0], _thisDataLng[1])

                dq('.amap-sug-result').classList.remove('db')
                dq('.amap-sug-result').innerHTML = "";
            }
        } else {
            //console.log(data.word);
            inputText.value = data.word;
            voicePlan(data.word)
        }
    }


};
