var list = [
    {
        "id": 1,
        "name": "中央台中国之声在线收听",
        "url": "http://rtmpcnr001.cnr.cn/live/zgzs/playlist.m3u8"
    },
    {
        "id": 2,
        "name": "中央台中华之声在线收听",
        "url": "http://rtmpcnr005.cnr.cn/live/zhzs/playlist.m3u8"
    },
    {
        "id": 3,
        "name": "天津滨海音乐广播在线收听",
        "url": "http://60.30.52.41/live/FM100.5/playlist.m3u8"
    },
    {
        "id": 4,
        "name": "河南音乐广播在线收听",
        "url": "http://stream.hndt.com/live/yinyue/playlist.m3u8"
    },
    {
        "id": 5,
        "name": "江苏音乐广播在线收听",
        "url": "http://lzlive.vojs.cn/jAmO6Ng/92/live.m3u8"
    },
    {
        "id": 6,
        "name": "南京音乐广播在线收听",
        "url": "http://hls.njgb.com/live_hls/4/playlist.m3u8"
    },
    {
        "id": 7,
        "name": "北京交通广播在线收听",
        "url": "http://cnlive.cnr.cn/hls/bjjtgb.m3u8"
    },
    {
        "id": 8,
        "name": "北京交通广播在线收听",
        "url": "http://satellitepull.cnr.cn/live/wxahjtgb/playlist.m3u8"
    },
    {
        "id": 9,
        "name": "济南交通广播在线收听",
        "url": "http://ts1.ijntv.cn/jnjtpl/sd/live.m3u8"
    },
    {
        "id": 10,
        "name": "北京新闻广播在线收听",
        "url": "http://cnlive.cnr.cn/hls/bjxwgb.m3u8"
    },
    {
        "id": 11,
        "name": "重庆之声重庆新闻广播在线收听",
        "url": "http://satellitepull.cnr.cn/live/wxcqxwgb/playlist.m3u8"
    },
    {
        "id": 12,
        "name": "山东广播新闻频道在线收听",
        "url": "http://cnlive.cnr.cn/hls/sdxwgb.m3u8"
    },
    {
        "id": 13,
        "name": "济南新闻广播在线收听",
        "url": "http://ts1.ijntv.cn/jnxwpl/sd/live.m3u8"
    },
    {
        "id": 14,
        "name": "中央台经济之声在线收听",
        "url": "http://rtmpcnr002.cnr.cn/live/jjzs/playlist.m3u8"
    },
    {
        "id": 15,
        "name": "重庆经济广播在线收听",
        "url": "http://satellitepull.cnr.cn/live/wxcqjjgb/playlist.m3u8"
    },
    {
        "id": 16,
        "name": "山东广播经济频道在线收听",
        "url": "http://cnlive.cnr.cn/hls/sdjjgb.m3u8"
    },
    {
        "id": 17,
        "name": "北京交通广播在线收听",
        "url": "http://satellitepull.cnr.cn/live/wxahjtgb/playlist.m3u8"
    },
    {
        "id": 18,
        "name": "济南经济广播在线收听",
        "url": "http://ts1.ijntv.cn/jnjjpl/sd/live.m3u8"
    },
    {
        "id": 19,
        "name": "南京经济广播在线收听",
        "url": "http://hls.njgb.com/live_hls/5/playlist.m3u8"
    },
    {
        "id": 20,
        "name": "中央台神州之声在线收听",
        "url": "http://rtmpcnr006.cnr.cn/live/szzs/playlist.m3u8"
    },
    {
        "id": 21,
        "name": "北京文艺广播在线收听",
        "url": "http://cnlive.cnr.cn/hls/bjwygb.m3u8"
    },
    {
        "id": 22,
        "name": "FM99.6浙江民生广播在线收听",
        "url": "http://yf.m.l.cztv.com/channels/lantian/audio03/128k.m3u8"
    },
    {
        "id": 23,
        "name": "中央台都市之声在线收听",
        "url": "http://rtmpcnr004.cnr.cn/live/dszs/playlist.m3u8"
    },
    {
        "id": 24,
        "name": "东方都市广播在线收听",
        "url": "http://satellitepull.cnr.cn/live/wx32dfgbdt/playlist.m3u8"
    },
    {
        "id": 25,
        "name": "重庆都市广播在线收听",
        "url": "http://satellitepull.cnr.cn/live/wxcqdsgb/playlist.m3u8"
    },
    {
        "id": 26,
        "name": "浙江城市之声在线收听",
        "url": "http://yf.m.l.cztv.com/channels/lantian/audio06/128k.m3u8"
    }

];


var AudioObj = {
    data: {
        "type": "audio",
        "word": "",
        "id": "",
        "pageId":"FM"
    },
    currentId:0,
    playAudio: function (id) {
        console.log('id', id);
        if (id >= 0) {
            AudioObj.currentId = id;
            var flashvars = {
                f: 'ckplayer/m3u8.swf',
                a: list[id]['url'],
                c: 0,
                p: 1,
                s: 4,
                lv: 1,
                v: 10,
                loaded: 'loadedHandler'
            };
            var video = [list[id]['url']];
            CKobject.embed('ckplayer/ckplayer.swf', 'a1', 'ckplayer_a1', '336', '70', false, flashvars, video);
        }
    },
    verifyWord: function (word) {
        AudioObj.data.type = 'audio';
        if (word.search("播放") != -1) {
            AudioObj.data.word = '播放';
            AudioObj.data.id = 0;
        } else if (word.search("暂停") != -1) {
            AudioObj.data.word = '暂停';
        } else if (word.search("上一个") != -1) {
            AudioObj.data.word = '上一个';
            let id = AudioObj.data.id - 1;
            AudioObj.data.id = id;
        } else if (word.search("下一个") != -1) {
            AudioObj.data.word = '下一个';
            let id = AudioObj.data.id + 1;
            AudioObj.data.id = (id);
        } else {
            AudioObj.data.word = word;
        }
        if (AudioObj.data.word) {
            ws.send(JSON.stringify(AudioObj.data)); 
        }
    },
    matchWord: function (word) {
        word = word.replace("。","");
        // var word = "中国之声";
        for (let i = 0; i < list.length; i++) {
            // console.log(list[i]);
            if (list[i].name.search(word) != -1) {
                console.log('匹配到了', list[i].id);
                AudioObj.playAudio(list[i].id);
            }
        }
    },
    fmWebsocket:function(data){
        if (data.word == "播放") {
            AudioObj.playAudio(data.id);
        } else if (data.word == "暂停") {
            CKobject.getObjectById('ckplayer_a1').playOrPause();
            console.log('暂停');
        } else if (data.word == "上一个") {
            console.log('上一个');
            if (data.id < 0) {
                data.id = list.length - 1
            }
            AudioObj.playAudio(data.id)
        } else if (data.word == "下一个") {
            console.log('下一个');
            if (data.id >= list.length) {
                data.id = 0
            }
            AudioObj.playAudio(data.id)
        } else {
            console.log('其他');
            AudioObj.matchWord(data.word)
        }
    }

};