const CODE_SUCCESS = 0
const CODE_ERROR = 1
let wholeData
let url = 'http://172.16.0.222:84/facepp/tests/test_client.php'

const vm = new Vue({
    el: '#app',
    data: {
        info: '',
        state: false,
        img1: ''
    },
    mounted() {
        this._intiMedia()
    },
    methods: {
        _intiMedia() {
            let constraints = {
                audio: false,
                video: {
                    width: 300,
                    height: 300
                }
            }

            let _this = this
            navigator.mediaDevices.getUserMedia({
                    video: true
                })
                .then((mediaStream) => {
                    _this.video = this.$refs.video
                    _this.video.srcObject = mediaStream
                    _this.video.onloadedmetadata = function (e) {
                        _this.video.play()
                    }
                })
                .catch((err) => {
                    console.log(err.name + ":" + err.message)
                })
        },
        handleSubmit() {
            //200 注册成功
            //201 注册失败，未找到人脸
            //202 接口错误
            this.info = ''
            let base64Str = this._captureImg()
            this.info = '正在注册...'

            $.ajax({
                url: url,
                type: 'post',
                async: true,
                data: {
                    type: 'register',
                    imgBase64: base64Str
                },
                success: function (resp) {
                    console.log(resp);
                    let code = JSON.parse(resp).code
                    let message = JSON.parse(resp).message
                    switch (code) {
                        case 200:
                            vm.info = '注册成功'
                            break;
                        case 201:
                            vm.info = '注册失败，未找到人脸'
                            break;

                        case 202:
                            vm.info = message
                            break;
                    }
                },
                error: function (error) {
                    console.log('err', error)
                }
            })
        },
        loginSubmit() {
            //200 登录成功
            //201 登录失败，未匹配成功
            //202 接口错误
            //203 登录失败，不是本人
            this.info = ''
            let base64Str = this._captureImg()
            this.info = '正在登录...'

            $.ajax({
                url: url,
                type: 'post',
                async: true,
                data: {
                    type: 'search',
                    imgBase64: base64Str
                },
                success: function (resp) {
                    console.log(resp);
                    let code = JSON.parse(resp).code
                    let message = JSON.parse(resp).message

                    switch (code) {
                        case 200:
                            vm.info = '登录成功'
                            break;

                        case 201:
                            vm.info = '登录失败，未匹配成功'
                            break;

                        case 202:
                            vm.info = message
                            break;

                        case 203:
                            vm.info = '不是本人'
                            break;
                    }
                },
                error: function (error) {
                    console.log('err', error)
                }
            })



        },
        testingSubmit() {
            // 200 不带眼睛 睁眼 
            // 201 不带眼睛 闭眼 
            // 202 带眼睛 睁眼  
            // 203 带眼睛 闭眼 
            // 204 未找到人脸
            // 205 接口错误

            this.info = ''

            this.info = '请眨眨眼...'

            let res = []
            let res2 = []


            let i = 0;

            function fn1() {

                i++
                vm.img1 = vm._captureImg()

                $.ajax({
                    url: url,
                    type: 'post',
                    async: true,
                    data: {
                        type: 'facedetail',
                        imgBase64: vm.img1
                    },
                    success: function (resp) {
                        wholeData = resp

                        if (i > 5) {
                            i = 0
                            vm.info = "检测失败，请重新开始检测"
                            clearInterval(timeCupImg)
                            // res == ''
                            // timeCupImg =  setInterval(fn1,500)
                        } else {
                            if (res == '') {
                                //第一秒执行
                                res = JSON.parse(wholeData)
                            } else {
                                //第二秒后执行
                                res2 = JSON.parse(wholeData)
                                console.log(res.code, res2.code);
                                if (res.code == 202 && res2.code == 203 || res.code == 203 && res2.code == 202 || res.code == 200 && res2.code == 201 || res.code == 201 && res2.code == 200) {
                                    // console.log('-->检测成功'); 
                                    vm.info = '检测成功'
                                    clearInterval(timeCupImg)
                                    return
                                } else if (res.code == 204 || res2.code == 204) {
                                    vm.info = '未检测到人脸'
                                    // console.log('==>未检测到人脸');
                                } else if (res.code == 200 && res2.code == 200 || res.code == 201 && res2.code == 201 || res.code == 202 && res2.code == 202 || res.code == 203 && res2.code == 203) {
                                    vm.info = '检测失败，继续检测'
                                    // console.log('-=->检测失败');
                                } else if (res.code == 205 || res2.code == 205) {
                                    // console.log('-=->接口错误');
                                    vm.info = '接口错误'
                                }
                            }
                        }
                    },
                    error: function (error) {
                        console.log('', error)
                    }
                })
            }

            let timeCupImg = setInterval(fn1, 500)

        },
        _captureImg() {
            // 取到 canvas
            this.canvas = this.$refs.canvas;
            // 获取 canvas 上下文
            let ctx = this.canvas.getContext('2d')
            // 截图
            ctx.drawImage(this.video, 0, 0, 300, 300)
            // 将截图转换成 base64
            this.image = this.canvas.toDataURL('image/png')
            // 只保留 base64 部分
            let base64Str = this.image.split('base64,')[1]

            // console.log(base64Str)
            return base64Str
        },
        searchSubmit() {
            $.ajax({
                url: 'http://172.16.0.222:84/facepp/tests/test_client.php',
                type: 'post',
                async: true,
                data: {
                    type: ''
                },
                success: function (resp) {
                    console.log('----->', resp)

                },
                error: function (error) {
                    console.log('err', error)
                }
            })
        }
    }

})