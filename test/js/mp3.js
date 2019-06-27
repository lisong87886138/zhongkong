var audioList = [
    {
        "id":1,
        "name":'小幸运',
        "url":'audio/xxy.mp3'
    },
    {
        "id":2,
        "name":'告白气球',
        "url":'audio/gbqq.mp3'
    },
    {
        "id":3,
        "name":'匆匆那年',
        "url":'audio/ccnn.mp3'
    }
];


var mp3 = {
    data: {
        "type": "",
        "word": "",
        "id": "",
        "pageId":"MP3"
    }, 
    verifyWord: function (word) {
        mp3.data.type = 'mp3';
        console.log(word, mp3.data.type);
        
        if (word.search("播放") != -1) {
            mp3.data.word = '播放';
            mp3.data.id = 0;
        } else if (word.search("暂停") != -1) {
            mp3.data.word = '暂停';
        } else if (word.search("上一个") != -1) {
            mp3.data.word = '上一个';
            let id = mp3.data.id - 1;
            mp3.data.id = id;
        } else if (word.search("下一个") != -1) {
            mp3.data.word = '下一个';
            let id = mp3.data.id + 1;
            mp3.data.id = (id);
        } else {
            mp3.data.word = word;
        }
        console.log(mp3.data.word);
        
        if (mp3.data.word) {
            ws.send(JSON.stringify(mp3.data)); 
        }
    },
    mp3Websocket:function(data){
        console.log('=====>',data);
        var mp3 = document.getElementById('mp3')
        if (data.word == "播放") {
            mp3.src = audioList[0].url;
            mp3.play();
        } else if (data.word == "暂停") {
            mp3.pause();
        } else if (data.word == "上一个") {
            if (data.id < 0) {
                data.id = audioList.length - 1;
            }
            mp3.src = audioList[data.id].url;
            mp3.play();
        } else if (data.word == "下一个") {
            if (data.id >= audioList.length) {
                data.id = 0;
            }
            mp3.src = audioList[data.id].url;
            mp3.play();
        } else {
            return
        }
    }
   
}