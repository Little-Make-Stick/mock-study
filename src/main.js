import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 默认语言为 en-US，所以如果需要使用其他语言，推荐在入口文件全局设置 locale
import moment from 'moment'
import 'moment/locale/zh-cn'
moment.locale('zh-cn')

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import ElEmpty from 'element-ui'
Vue.use(ElEmpty)
// Vue.config.productionTip = false

import echarts from 'echarts'
import 'echarts/map/js/china'
Vue.prototype.$echarts = echarts

import fetch_ from '@/utils/request.js'
Vue.prototype.$axios = fetch_

import '@/assets/iconfont/iconfont.css'
import '@/assets/iconfont/iconfont.js'

import 'bytemd/dist/index.css'
import 'highlight.js/styles/vs.css'
import 'github-markdown-css' // placed after highlight styles to override `code` padding
import 'katex/dist/katex.css'

require('@/mock')  

import globalData from '@/utils/globalData'
import utils from '@/utils/utils'
// 混入公共的vue属性  
Vue.mixin({
    data() {  
        return { 
            ...globalData,
        }  
    },
    methods: {
        ...utils,
    },
})

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app')
