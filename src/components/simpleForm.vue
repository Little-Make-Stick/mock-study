<template>
    <div class="simple-form-component-container">
        <!-- 普通表单 -->
        <el-form label-width="9rem" :model="formData" :rules="rules">
            <el-form-item
                v-for="item in formItems"
                :key="item.prop"
                :label="item.label"
                :prop="item.prop"
                :class="item.type"
            >
                <!-- 下拉选择 -->
                <template v-if="item.type == 'select'">
                    <el-select
                        v-model="formData[item.prop]"
                        :disabled="mode == 'DETAIL'"
                        :placeholder="item.placeholder"
                    >
                        <el-option
                            v-for="opt in item.options"
                            :key="opt[item.valueProp] || opt.value"
                            :label="opt[item.labelProp] || opt.label"
                            :value="opt[item.valueProp] || opt.value"
                        ></el-option>
                    </el-select>
                </template>
                <template v-else-if="item.type == 'point'">
                    <el-input v-model="formData[item.prop].x" :disabled="mode == 'DETAIL'"></el-input>-
                    <el-input v-model="formData[item.prop].y" :disabled="mode == 'DETAIL'"></el-input>
                    <el-button v-if="item.handlerOpt && mode != 'DETAIL'" @click.native="item.handlerOpt(mode == 'ADD' ? null :formData)">在图纸上选择</el-button>
                </template>
                <template v-else-if="item.type == 'unit'">
                    <el-input
                        v-model="formData[item.prop]"
                        :placeholder="item.placeholder"
                        :disabled="mode == 'DETAIL'"
                    >
                        <template slot="append">
                            <el-select
                                v-if="item.options.length"
                                :disabled="mode == 'DETAIL'"
                                v-model="item.unit"
                                placeholder="请选择"
                            >
                                <el-option
                                    v-for="opt in item.options"
                                    :key="opt[item.valueProp] || opt.value"
                                    :label="opt[item.labelProp] || opt.label"
                                    :value="opt[item.valueProp] || opt.value"
                                ></el-option>
                            </el-select>
                            <template v-else>
                                {{ item.unit }}
                            </template>
                        </template>
                    </el-input>
                </template>
                <!-- 密码输入框 -->
                <template v-else-if="item.type == 'password'">
                    <el-input
                        v-model="formData[item.prop]"
                        :placeholder="item.placeholder"
                        :disabled="mode == 'DETAIL'"
                        show-password
                    ></el-input>
                </template>
                <!-- 输入框 -->
                <template v-else>
                    <el-input
                        v-model="formData[item.prop]"
                        :placeholder="item.placeholder"
                        :disabled="mode == 'DETAIL'"
                    ></el-input>
                </template>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    props: {
        formData: { type: Object, require: true },
        rules: { type: Object, require: true },
        formItems: { type: Array, require: true },
        mode: { type: String, default: 'EDIT' },
    },
    data() {
        return {}
    },
    created() {},
    methods: {},
    components: {},
}
</script>

<style lang="less" scoped>
.simple-form-component-container {
    position: relative;
    width: 100%;
    .el-form {
        position: relative;
        width: 100%;
        .el-form-item {
            position: relative;
            width: 100%;
            .el-select,
            .el-input {
                width: 90%;
            }
            /deep/.el-input-group__append {
                width: 80px;
                padding: 0;
                .el-select {
                    width: 100%;
                    margin: 0;
                }
            }
            &.point{
                .el-form-item__label{}
                /deep/.el-form-item__content{
                    display: flex;
                    &>*{
                        margin: 0 .5rem;
                    }
                }
            }
        }
    }
}
</style>
