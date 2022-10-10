<template>
    <div class="notice-item-component-container">
        <div class="notice-item">
            <el-row>
                <el-col :span="12" class="left">
                    <div
                        v-if="notice.type"
                        class="type"
                        :class="{
                            'is-danger': notice.type == '报警',
                            'is-warn': notice.type == '预警',
                        }"
                    >
                        【{{ notice.type }}】
                    </div>
                    <div class="title">{{ notice.title }}</div>
                </el-col>
                <el-col :span="12" class="right">
                    <div class="release-time">{{ notice.releaseTime }}</div>
                </el-col>
            </el-row>
            <el-row>
                <div class="bubble-box">
                    <div class="bubble">
                        {{ notice.releaseContent }}
                        <div class="operation" v-if="notice.operation">
                            <el-button type="text" @click.native="notice.handlerDetail(notice)">查看详情&gt;</el-button>
                        </div>
                    </div>
                </div>
            </el-row>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        notice: { type: Object },
    },
    data() {
        return {}
    },
    methods: {},
    components: {},
}
</script>

<style lang="less" scoped>
.notice-item-component-container {
    .notice-item {
        line-height: 2.4rem;
        padding: 0.5rem 0;
        .el-row {
            .left {
                text-align: left;
                display: flex;
                .type {
                    padding-right: 1.5rem;
                    // font-weight: bold;
                    &.is-danger {
                        color: #ff2626;
                    }
                    &.is-warn {
                        color: #ff9f00;
                    }
                }
            }
            .right {
                text-align: right;
                .release-time {
                    display: inline-block;
                    position: relative;
                    &:before {
                        content: '';
                        position: absolute;
                        left: -2rem;
                        top: 50%;
                        transform: translateY(-50%);
                        border: 4px solid #ff2626;
                        border-radius: 50%;
                    }
                }
            }
            .bubble-box {
                padding-left: 1.4rem;
                .bubble {
                    background-color: #eee;
                    padding: 0.3rem 1rem;
                    border-radius: 4px;
                    position: relative;
                    font-size: .8rem;
                    display: flex;
                    justify-content: space-between;
                    &:before {
                        content: '';
                        border: 8px solid #eee;
                        position: absolute;
                        left: -16px;
                        top: 50%;
                        transform: translateY(-50%) scaleX(1.2);
                        border-left-color: transparent;
                        border-top-color: transparent;
                        border-bottom-color: transparent;
                    }
                }
            }
        }
    }
}
</style>
