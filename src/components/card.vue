<template>
    <div class="card-component-container">
        <el-card>
            <div slot="header" class="clearfix">
                <span>{{ cardTitle || $route.meta.title }}</span>
                <div class="operation">
                    <slot name="operation"></slot>
                </div>
            </div>
            <slot name="body"></slot>
        </el-card>
    </div>
</template>

<script>
export default {
    props: {
        cardTitle: { type: String },
    },
    data() {
        return {}
    },
    methods: {},
    components: {},
}
</script>

<style lang="less" scoped>
.card-component-container {
    /deep/.el-card {
        .el-card__header {
            width: 100%;
            .clearfix {
                display: flex;
                justify-content: space-between;
                .operation{
                    *{
                        font-size: .8rem;
                    }
                    .el-form {
                        display: flex;
                        .el-form-item {
                            margin: 0 0.3rem;
                        }
                    }
                }
            }

            span {
                font-size: 1.2rem;
            }
        }
    }
}
</style>
