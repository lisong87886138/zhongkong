
var videoList = [
    {
        "id":1,
        "name":'小幸运',
        "url":'audio/video.mp4'
    }
]


var video = {
    data: {
        "type": "",
        "word": "",
        "id": "",
        "pageId":"VIDEO"
    }, 
    verifyWord: function (word) {
        video.data.type = 'video';
        console.log(word, video.data.type);
        
        if (word.search("播放") != -1) {
            video.data.word = '播放';
            video.data.id = 0;
        } else if (word.search("暂停") != -1) {
            video.data.word = '暂停';
        } else if (word.search("上一个") != -1) {
            video.data.word = '上一个';
            let id = video.data.id - 1;
            video.data.id = id;
        } else if (word.search("下一个") != -1) {
            video.data.word = '下一个';
            let id = video.data.id + 1;
            video.data.id = (id);
        } else {
            video.data.word = word;
        }
        console.log(video.data.word);
        
        if (video.data.word) {
            ws.send(JSON.stringify(video.data)); 
        }
    },
    videoWebsocket:function(data){
        console.log('=====>',data);
        var video = document.getElementById('video')
        if (data.word == "播放") {
            video.src = videoList[0].url;
            video.play();
        } else if (data.word == "暂停") {
            video.pause();
        } else if (data.word == "上一个") {
            if (data.id < 0) {
                data.id = videoList.length - 1;
            }
            video.src = videoList[data.id].url;
            video.play();
        } else if (data.word == "下一个") {
            if (data.id >= videoList.length) {
                data.id = 0;
            }
            video.src = videoList[data.id].url;
            video.play();
        } else {
            return
        }
    }
   
}