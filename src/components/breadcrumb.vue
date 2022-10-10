<template>
    <div class="breadcrumb-component-container">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item> {{ $route.meta.title }} </el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    },
    methods: {},
    components: {},
}
</script>

<style lang="less" scoped>
.breadcrumb-component-container{

    /deep/.el-breadcrumb{
        padding-bottom: 1rem;
        .el-breadcrumb__item{
            &:not(:first-child){
                span{
                    color: #069AFE;
                }
            }
        }
    }
    
}
</style>
