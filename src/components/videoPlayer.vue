<template>
    <div class="video-player-component-container">
        <!-- 视频画布 -->
        <div id="container" ref="video_container" style="width: 100%; height: 100%; ">
            <!-- 视频控制按钮组 -->
            <div class="buttons-div" ref="buttonsBox">
                <div class="buttons-div-left">
                    <span>监控</span>
                    <!-- 注销当前监控 -->
                    <i class="iconfont icon-close player-btn" title="清空" @click="destroy"></i>
                    <!-- 暂停当前监控 -->
                    <i v-show="playing" class="iconfont icon-stop player-btn" title="暂停" @click="pause"></i>
                    <!-- 继续播放当前监控 -->
                    <i
                        v-show="!playing"
                        class="iconfont icon-video_light player-btn"
                        title="播放"
                        @click="playBtnClick"
                    ></i>
                </div>
                <div class="buttons-div-right">
                    <!-- 显示网速 -->
                    <span>{{ kBps }} kb/s</span>
                    <!-- 屏幕截图 -->
                    <!-- <i
                        v-if="playing"
                        class="iconfont icon-Screenshot player-btn"
                        title="屏幕截图"
                        @click="screenShot"
                    ></i> -->
                    <!-- 视频录制 -->
                    <!-- <i
                        v-if="playing && !recording"
                        class="iconfont icon-video player-btn"
                        title="录制"
                        @click="startRecord"
                    ></i> -->
                    <!-- <i
                        v-if="playing && recording"
                        class="iconfont icon-stop-circle-line player-btn"
                        title="暂停录制"
                        @click="stopAndSaveRecord"
                    ></i> -->
                    <!-- 音量 -->
                    <!-- <i
                        v-if="playing"
                        class="iconfont icon-24gl-volumeHigh player-btn"
                        title="音量"
                        @click="volumeChange"
                    ></i> -->
                    <!-- 全屏播放 -->
                    <i
                        v-if="playing && !fullscreen"
                        class="iconfont icon-full-screen player-btn"
                        title="全屏"
                        @click="fullscreenSwitch"
                    ></i>
                    <!-- 退出全屏播放 -->
                    <i
                        v-if="playing && fullscreen"
                        class="iconfont icon-full-screen-off player-btn"
                        title="退出全屏"
                        @click="fullscreenSwitch"
                    ></i>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            videoTitle: '',
            videoUrl: null,
            player: null,
            btnDom: null,
            playing: false,
            fullscreen: false,
            volume: 0, //音量
            kBps: 0.0,
            vod: true, // 点播
            supportDblclickFullscreen: true, // 是否支持屏幕的双击事件，触发全屏，取消全屏事件。
            recording: false, // 录制中
        }
    },
    mounted() {
        this.player = this.createPlayer()
        this.btnDom = this.$refs.buttonsBox
    },
    beforeDestroy() {
        console.log('*****player destroy*******')
        if (this.player) {
            // 关闭视频，释放底层资源
            this.player.destroy()
        }
    },

    methods: {
        /**
         * 销毁当前播放的监控
         */
        destroy() {
            this.videoUrl = null
            if (this.player) {
                // 关闭视频，释放底层资源
                this.player.destroy()
                this.$refs.video_container.appendChild(this.btnDom)
            }
            this.playing = false
            this.player = null
            this.videoTitle = ''
            this.$message({
                message: '已注销播放器，请重新选择通道加载播放器播放',
            })
        },
        /**
         * 返回监控的播放状态
         */
        isPlaying() {
            //  返回是否正在播放中状态。
            // return this.player.isPlaying()
            return this.playing
        },
        /**
         * 继续播放
         */
        playBtnClick() {
            if (this.player) {
                // this.play(this.videoUrl)
                // 播放视频
                this.player.play()
            }
            this.playing = true
        },
        /**
         * 暂停播放
         */
        pause() {
            if (this.player) {
                // 暂停播放
                this.player.pause()
            }
            this.playing = false
        },
        /**
         * 首次载入播放
         */
        play(videoUrl, title = null) {
            let _this = this
            title && (_this.videoTitle = title)
            if (videoUrl === _this.videoUrl && _this.playing == true) {
                return
            }
            _this.videoUrl = videoUrl
            if (_this.player) {
                // 关闭视频，释放底层资源
                _this.player.destroy()
                _this.$refs.video_container.appendChild(_this.btnDom)
            }
            _this.playing = true
            _this.player = _this.createPlayer()
        },
        /**
         * 调整音量
         */
        volumeChange() {
            this.jessibuca.setVolume(this.volume)
        },
        /**
         * 切换静音/非静音
         */
        muteSwitch() {
            if (this.player.isMute()) {
                this.jessibuca.cancelMute()
            } else {
                this.jessibuca.mute()
            }
        },
        /**
         * 切换全屏/非全屏
         */
        fullscreenSwitch() {
            let isFull = this.isFullscreen()
            this.player.setFullscreen(!isFull)
            this.fullscreen = !isFull
        },
        /**
         * 返回当前是否全屏
         */
        isFullscreen() {
            return (
                document.fullscreenElement ||
                document.msFullscreenElement ||
                document.mozFullScreenElement ||
                document.webkitFullscreenElement ||
                false
            )
        },
        /**
         * 开始录制
         */
        startRecord() {
            const time = new Date().getTime()
            this.player.startRecord(time, 'webm')
        },
        /**
         * 结束录制并保存
         */
        stopAndSaveRecord() {
            this.player.stopRecordAndSave()
        },
        /**
         * 屏幕截图
         */
        screenShot() {
            this.player.screenshot()
        },
        /**
         * 初始化播放器
         */
        createPlayer() {
            let _this = this
            let options = {}
            let jplayer = new window.Jessibuca(
                Object.assign(
                    {
                        container: _this.$refs.video_container,
                        videoBuffer: 0.2, // 最大缓冲时长，单位秒
                        isResize: false,
                        isFlv: true,
                        decoder: process.env.BASE_URL + 'jessibuca/index.js',
                        text: '', //"TN-28181",
                        // background: "bg.jpg",
                        loadingText: '加载中',
                        hasAudio: false, //typeof (this.hasAudio) =="undefined"? true: this.hasAudio,
                        debug: false,
                        supportDblclickFullscreen: _this.supportDblclickFullscreen,
                        operateBtns: {
                            fullscreen: false,
                            screenshot: false,
                            play: false,
                            audio: false,
                        },
                        record: 'record',
                        vod: _this.vod,
                        forceNoOffscreen: false, //this.forceNoOffscreen,
                        isNotMute: false, //this.isNotMute,
                    },
                    options
                )
            )
            // 监听 jessibuca 初始化事件
            jplayer.on('load', () => {
                console.log('on load init')
                console.log(this.videoUrl)
                if (this.videoUrl) {
                    jplayer.play(this.videoUrl)
                }
            })
            // 渲染开始
            jplayer.on('start', () => {
                console.log('on start')
            })
            // 触发暂停事件
            jplayer.on('pause', () => {
                console.log('on pause ')
                this.playing = false
            })
            // 触发播放事件
            jplayer.on('play', () => {
                console.log('on play')
                this.playing = true
            })
            // 信息，包含错误信息
            jplayer.on('log', (msg) => {
                console.log('on log', msg)
            })
            // 错误信息
            jplayer.on('error', (error) => {
                console.log('on error', error)
            })
            // 录制开始的事件
            jplayer.on('recordStart', () => {
                console.log('record start')
            })
            // 录制结束的事件
            jplayer.on('recordEnd', () => {
                console.log('record end')
            })
            // 录制的时候，返回的录制时长，1s一次
            jplayer.on('recordingTimestamp', (timestamp) => {
                console.log('录制时长', timestamp)
            })
            // 监听调用play方法 经过 初始化-> 网络请求-> 解封装 -> 解码 -> 渲染 一系列过程的时间消耗
            jplayer.on('playToRenderTimes', (times) => {
                console.log('时间消耗', times)
            })
            jplayer.on('record', (msg) => {
                console.log('on record:', msg)
            })
            // 当前是否全屏
            jplayer.on('fullscreen', (msg) => {
                console.log('on fullscreen', msg)
                _this.fullscreen = msg
            })
            // 触发静音事件，返回boolean值
            jplayer.on('mute', (msg) => {
                console.log('on mute', msg)
                //_this.isNotMute = !msg;
            })
            // 当解析出音频信息时回调, { numOfChannels:声频通道, sampleRate:采样率 }
            jplayer.on('audioInfo', (data) => {
                console.log('on audioInfo', data)
            })
            // 当解析出视频信息时回调, { width, height }
            jplayer.on('videoInfo', (data) => {
                //this.videoInfo = msg;
                console.log('on videoInfo', data)
            })

            jplayer.on('bps', (bps) => {
                console.log('on bps', bps)
            })
            // 视频播放持续时间, 单位ms
            let _ts = 0
            jplayer.on('timeUpdate', (ts) => {
                // console.log('timeUpdate,old,new,timestamp', _ts, ts, ts - _ts);
                _ts = ts
            })
            // 当设定的超时时间内无数据返回,则回调
            jplayer.on('timeout', () => {
                console.log('on timeout')
            })

            // 渲染性能统计，流开始播放后回调，每秒1次。
            jplayer.on('performance', (performance) => {
                let show = '卡顿'
                if (performance === 2) {
                    show = '非常流畅'
                } else if (performance === 1) {
                    show = '流畅'
                }
                console.log('on performance', show)
                //_this.performance = show;
            })
            jplayer.on('buffer', (buffer) => {
                console.log('on buffer', buffer)
            })
            // 流状态统计，流开始播放后回调，每秒1次。
            jplayer.on('stats', (stats) => {
                console.log('on stats', stats)
            })
            // 当前网速， 单位KB 每秒1次,
            jplayer.on('kBps', (kBps) => {
                console.log('on kBps', kBps)
                _this.kBps = Math.round(kBps)
            })
            // 显示时间戳 PTS
            jplayer.on('videoFrame', () => {
                console.log('on videoFrame')
            })
            //
            jplayer.on('metadata', () => {
                console.log('on metadata')
            })
            return jplayer
        },
    },
}
</script>
<style lang="less" scoped>
.video-player-component-container {
    width: 100%;
    height: 95%;
    #container {
        background-color: #eee;
        .buttons-div {
            width: 100%;
            height: 2rem;
            background-color: rgba(0, 0, 0, 0.98);
            position: relative;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            left: 0;
            top: calc(100% - 2rem);
            user-select: none;
            z-index: 10;
            .buttons-div-left {
                height: 100%;
                position: absolute;
                left: 0;
                display: flex;
                align-items: center;
                span {
                    color: rgb(255, 255, 255);
                    padding: 0 0.5rem;
                }
                .player-btn {
                    width: 1rem;
                    color: rgb(255, 255, 255);
                    margin: 0px 5px;
                    padding: 0px 2px;
                    cursor: pointer;
                    text-align: center;
                }
            }
            .buttons-div-right {
                height: 100%;
                position: absolute;
                right: 0;
                display: flex;
                align-items: center;
                span {
                    color: rgb(255, 255, 255);
                    padding: 0 0.5rem;
                }
                .player-btn {
                    width: 2rem;
                    color: rgb(255, 255, 255);
                    margin: 0px 5px;
                    padding: 0px 2px;
                    cursor: pointer;
                    text-align: center;
                }
            }
        }
    }
}
</style>
