<template>
    <div class="type-md-component-container">
        <Editor
            class="byte-editor"
            ref="byte-editor"
            :plugins="plugins"
            :value="value"
            :previewDebounce="1000"
            @change="handleChange"
            :uploadImages="(files) => uploadImages(files)"
        ></Editor>
        <!-- <Viewer :value="value"></Viewer> -->
    </div>
</template>

<script>
import { Editor, Viewer } from '@bytemd/vue'

import breaks from '@bytemd/plugin-breaks'
import footnotes from '@bytemd/plugin-footnotes'
import frontmatter from '@bytemd/plugin-frontmatter'
import gemoji from '@bytemd/plugin-gemoji'
import gfm from '@bytemd/plugin-gfm'
import highlight from '@bytemd/plugin-highlight'
// import highlightSsr from '@bytemd/plugin-highlight-ssr'
import math from '@bytemd/plugin-math'
// import mathSsr from '@bytemd/plugin-math-ssr'
import mediumZoom from '@bytemd/plugin-medium-zoom'
import mermaid from '@bytemd/plugin-mermaid'

// import * as mdTool from 'marked'

// import Turndown from 'turndown'

const plugins = [
    // 支持中断
    breaks(),
    // 支持脚注(列在一页末了的附注)
    footnotes(),
    // 解析(出版)前页(扉页、版权页、目次等)
    frontmatter(),
    // 支持gemoji短代码
    gemoji(),
    // 支持gfm（自动链接文字、删除线、表格、任务列表）
    gfm(),
    // highlight代码块
    highlight(),
    // highlight代码块（与ssr兼容）
    // highlightSsr(),
    // 支持数学公式
    math(),
    // 支持数学公式（与ssr兼容）
    // mathSsr(),
    // 中等缩放图像
    mediumZoom(),
    // 文档图形(流程图、 时序图、甘特图)
    mermaid(),
]
export default {
    components: { Editor, Viewer },
    props: {
        modelValue: { type: String },
        // handleChange: { type: Function },
    },
    data() {
        return {
            editor: null,
            value: '',
            plugins: plugins,
        }
    },
    created() {
        // const turndown = new Turndown()
        // const markdown = turndown.turndown(this.modelValue)
        // this.value = markdown
        this.plugins = plugins
        this.value = this.modelValue
    },
    mounted() {},
    methods: {
        handleChange(v) {
            this.value = v
            this.$emit('handleChange', v)
        },
        // 上传图片

        async upload(files) {
            const formData = new FormData()

            formData.append('file', files) // 这里替换成自己的上传地址，

            const res = await this.$axios.post('/file/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    WIKI_USER_TOKEN: window.sessionStorage.getItem('token'),
                },
            })

            return res.data
        },

        // 上传完图片后拿到相应的服务器地址

        async uploadImages(files) {
            const imgs = []

            for (const file of files) {
                const img = await this.upload(file)

                imgs.push({
                    url: this.BASE_URL + img,
                })
            }

            return imgs
        },
        // 粘贴， html转md
        // async pasteTxt(ev) {
        //     ev.preventDefault()

        //     const data = ev.clipboardData.items

        //     for (let i = 0; i < data.length; i += 1) {
        //         if (data[i].kind === 'string' && data[i].type.match('^text/html')) {
        //             // Drag data item is HTML

        //             const h = await new Promise((t) => data[i].getAsString((e) => t(e)))

        //             const param = {
        //                 text: h,
        //             }
        //             console.log('markdown', h)

        //             const turndownService = new TurndownService()

        //             this.value = turndownService.turndown(h)
        //         }
        //     }
        // },
    },
}
</script>

<style lang="less" scoped>
// @import url('bytemd/dist/index.css');
/deep/h1 {
    font-size: 2em;
    border-bottom: 1px solid #eee;
}
/deep/h2 {
    font-size: 1.5em;
    border-bottom: 1px solid #eee;
}
.type-md-component-container {
    height: 100%;
    position: relative;
    /deep/.byte-editor {
        height: 100%;
        position: relative;
        .bytemd {
            height: 100%;
        }
    }
}
</style>
