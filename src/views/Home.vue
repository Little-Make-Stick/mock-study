<template>
    <div class="type-md-page-container">
        <byte-md :modelValue="value" @handleChange="handleChange"></byte-md>
        <el-button @click="handleRelease">release</el-button>
    </div>
</template>

<script>
import byteMd from '@/components/byteMd'
import markdownText from '@/assets/json/mdText.md'
import marked from 'marked'
// import mdMock from '@/mock/index.js'



export default {
    components: { byteMd },
    data() {
        return {
            value: 'hello world'
        }
    },
    created(){
        // console.log(markdownText);  
        this.value = markdownText
    },
    methods: {
        handleChange(val) {
            this.value = val
        },
        async handleRelease() {
            let data = {
                content: this.value
            }
            // let res = await this.$axios.post('/test/rebackTest', data)
            let res = await this.$axios.post('/md', data)

            console.log('发送md', res);
            this.value = res.content
        }
    },
}
</script>

<style lang="less" scoped>
.type-md-page-container {
    height: 100%;
    overflow: hidden;
    position: relative;
    .type-md-component-container {
        height: calc(100% - 50px);
    }
}
</style>
