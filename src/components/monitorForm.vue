<template>
    <div class="monitor-form-component-container">
        <el-form class="monitor-params-form" v-if="monitorTabs && monitorTabs.length">
            <el-tabs type="border-card" v-model="activeMonitorTab">
                <el-tab-pane
                    v-for="monitorTab in monitorTabs"
                    :key="monitorTab.index"
                    :label="monitorTab.label"
                    :name="monitorTab.index"
                >
                    <div v-if="monitorNodeList && monitorNodeList.length">
                        <el-row class="add-btn--wrapper">
                            <el-button class="add-btn" @click="handlerAdd" type="primary">
                                添加阈值
                            </el-button>
                            <i
                                class="el-icon-warning-outline warning-data-formatter-tip"
                                @click="handlerDialogVisible"
                            ></i>
                        </el-row>
                        <el-col :span="12" v-for="(obj, index) in datas" :key="index">
                            <el-form class="form">
                                <el-form-item label="监测点:">
                                    <el-select
                                        v-model="obj.nodeIds"
                                        :key="monitorNodeListKey"
                                        placeholder="请选择监测点"
                                        multiple
                                    >
                                        <el-option
                                            v-for="opt in monitorNodeList"
                                            :key="opt.id"
                                            :label="opt.name"
                                            :value="opt.id"
                                        ></el-option>
                                    </el-select>
                                </el-form-item>
                                <div
                                    class="param--wrapper"
                                    v-for="param in obj.warningSwitchDetails"
                                    :key="param.fieldName"
                                >
                                    <div class="param-label">{{ param.label }}:</div>
                                    <div class="param-warning" style="display: flex">
                                        <el-form-item>
                                            <el-input
                                                v-model="param.warningFormula1"
                                                placeholder="一级阈值(-10,0);(0,10)"
                                            >
                                                <template slot="append">{{ param.unit }}</template>
                                            </el-input>
                                        </el-form-item>
                                        <el-form-item>
                                            <el-input
                                                v-model="param.warningFormula2"
                                                placeholder="二级阈值(-20,-10);(10,20)"
                                            >
                                                <template slot="append">{{ param.unit }}</template>
                                            </el-input>
                                        </el-form-item>
                                        <el-form-item>
                                            <el-input
                                                v-model="param.warningFormula3"
                                                placeholder="三级阈值(-,-20);(20,+)"
                                            >
                                                <template slot="append">{{ param.unit }}</template>
                                            </el-input>
                                        </el-form-item>
                                    </div>
                                </div>
                                <el-form-item>
                                    <el-button type="primary" @click="handlerSaveThresholdGroup(obj)">保存</el-button>
                                    <el-button
                                        class="del-btn"
                                        v-if="obj.warningSwitch"
                                        type="danger"
                                        @click="handlerDelThresholdGroup(obj)"
                                    >
                                        删除
                                    </el-button>
                                    <el-button
                                        v-else
                                        class="cancel-btn"
                                        @click="handlerCancelThresholdGroup(obj, index)"
                                    >
                                        取消
                                    </el-button>
                                </el-form-item>
                            </el-form>
                        </el-col>
                    </div>

                    <el-empty v-else description="此监测项下暂无监测点">
                        <el-button type="text" @click="$router.push('/project-point')">
                            前往添加监测点<i class="el-icon-right"></i>
                        </el-button>
                    </el-empty>
                </el-tab-pane>
            </el-tabs>
        </el-form>
        <!-- 无监测项 -->
        <el-empty v-else description="此项目下暂无监测项">
            <el-button type="text" @click="$router.push('/project-monitor')">
                前往添加监测项<i class="el-icon-right"></i>
            </el-button>
        </el-empty>
        <!-- 阈值公式弹窗 -->
        <el-dialog
            class="formatter-dialog-wrapper"
            title="阈值公式格式"
            :visible.sync="dialogConfig.visible"
            width="50%"
        >
            <p class="tip-text">
                请在英文状态下填写阈值,阈值格式为:
                开区间,多个区间以;隔开,但区间不能重叠。其中,正无穷用+表示,负无穷用-表示
            </p>
            <el-table :data="dialogConfig.tableData" style="width: 100%">
                <el-table-column
                    border
                    v-for="col in dialogConfig.tableColumns"
                    :key="col.prop"
                    :label="col.label"
                    :prop="col.prop"
                >
                </el-table-column>
            </el-table>
        </el-dialog>
    </div>
</template>

<script>
export default {
    props: {
        monitorTabs: { type: Array },
        deciceData: { type: Array },
        monitorData: { type: Array },
        monitorModel: { type: Object },
    },
    components: {},
    data() {
        return {
            activeMonitorTab: '',
            activeMonitorId: '',
            monitorNodeList: [],
            monitorNodeListKey: +new Date(),
            formItems: [],
            datas: [],
            model: {
                nodeIds: [],
                warningSwitchDetails: [],
            },
            dialogConfig: {
                visible: false,
                tableColumns: [
                    {
                        label: '阈值等级',
                        prop: 'level',
                    },
                    {
                        label: '测量值',
                        prop: 'value',
                    },
                    {
                        label: '阈值配置',
                        prop: 'setting',
                    },
                ],
                tableData: [
                    {
                        level: '一级阈值',
                        value: 'v<=-100或v>100',
                        setting: '(-,-100);(100,+)',
                    },
                    {
                        level: '二级阈值',
                        value: '-100<v<=55.5',
                        setting: '(-100,-55.5)',
                    },
                    {
                        level: '三级阈值',
                        value: '-55.5<v<=-20',
                        setting: '(-55.5,-20)',
                    },
                ],
            },
        }
    },
    watch: {
        activeMonitorTab(newV) {
            this.activeMonitorTab = newV
            this.activeMonitorId = this.activeMonitorTab.split('-')[1]

            this.handlerData()
        },
    },
    created() {
        this.$nextTick(() => {
            this.monitorTabs[0] && (this.activeMonitorTab = this.monitorTabs[0].index)
            this.monitorTabs[0] && (this.activeMonitorId = this.activeMonitorTab.split('-')[1])
        })
    },
    methods: {
        handlerData() {
            this.monitorNodeList = []
            this.activeMonitorId && this.handlerThresholdParams()
            this.activeMonitorId && this.handlerMonitorNodeList()
            this.activeMonitorId && this.handlerThresholdGroupList()
        },
        /**
         * 获取阈值组列表
         */
        async handlerThresholdGroupList() {
            this.datas = []
            let params = {
                monitoringId: Number(this.activeMonitorId),
            }
            let res = await this.$axios.get(this.THRESHOLD_GROUP_LIST, { params })
            console.log('[监测项' + this.activeMonitorId + '的阈值组列表]', res)

            res.forEach((group) => {
                let index = this.datas.length

                this.datas.push({
                    nodeIds: group.nodes.map((row) => row.id),
                    warningSwitch: {
                        desc: group.desc,
                        id: group.id,
                        monitoringId: group.monitoringId,
                    },
                    warningSwitchDetails: [],
                })
                this.handlerThresholdGroupDetail(group.id, index)
            })
        },
        /**
         * 获取阈值组明细
         */
        async handlerThresholdGroupDetail(warningSwitchId, index) {
            this.datas[index].warningSwitchDetails = []
            let params = {
                warningSwitchId,
            }
            let res = await this.$axios.get(this.THRESHOLD_DETAIL_LIST, { params })
            console.log('[阈值组' + warningSwitchId + '的阈值明细]', res)
            res.forEach((row) => {
                this.datas[index].warningSwitchDetails.push({
                    label: row.fieldDesc,
                    unit: row.unit,
                    fieldName: row.fieldName,
                    id: row.id,
                    warningFormula1: row.warningFormula1,
                    warningFormula2: row.warningFormula2,
                    warningFormula3: row.warningFormula3,
                    warningSwitchId: row.warningSwitchId,
                })
            })
        },
        /**
         * 添加阈值组编辑
         */
        handlerAdd() {
            let arr = []
            for (let i = 0; i < this.model.warningSwitchDetails.length; i++) {
                arr.push(Object.assign({}, this.model.warningSwitchDetails[i]))
            }
            this.datas.push(Object.assign({}, this.model))
            this.datas[this.datas.length - 1].warningSwitchDetails = arr

            console.log(this.datas)
        },
        /**
         * 查询监测项下的监测点列表
         */
        async handlerMonitorNodeList() {
            let res = await this.$axios.get(`${this.PROJECT_SENSORS_LIST_URL}/${this.activeMonitorId}`)
            console.log('项目监测项', this.activeMonitorId, '的监测点列表', res)
            this.monitorNodeList = res
            this.monitorNodeListKey = +new Date()
        },
        /**
         * 查询监测项的阈值字段列表
         */
        async handlerThresholdParams() {
            let params = {
                monitoringId: Number(this.activeMonitorId),
            }
            let res = await this.$axios.get(`${this.THRESHOLD_PARAMS_LIST}`, { params })
            console.log('项目监测项', this.activeMonitorId, '的参数列表', res)
            // 保证切换时监测项的阈值组数值不串
            this.datas = []
            // 切换时监测项时更新参数组
            this.model.warningSwitchDetails = []
            res.forEach((param) => {
                let obj = {
                    label: param.desc,
                    fieldName: param.name,
                    unit: param.unit,
                    warningFormula1: '',
                    warningFormula2: '',
                    warningFormula3: '',
                }
                this.model.warningSwitchDetails.push(obj)
            })
        },
        /**
         * 保存阈值组
         */
        async handlerSaveThresholdGroup(data) {
            if (data.warningSwitch) {
                let res = await this.$axios.post(this.UPDATE_THRESHOLD_GROUP, data)
                console.log('[编辑数据]', data, res)
            } else {
                this.$set(data, 'warningSwitch', { monitoringId: Number(this.activeMonitorId) })
                let res = await this.$axios.post(this.ADD_THRESHOLD_GROUP, data)
                console.log('[新增数据]', data, res)
            }
            this.handlerThresholdGroupList()
        },
        /**
         * 删除阈值组
         */
        async handlerDelThresholdGroup(data) {
            let res = await this.$axios.post(this.DELETE_THRESHOLD_GROUP, {
                warningSwitchId: data.warningSwitchDetails.warningSwitchId,
            })
            console.log('[删除数据]', res)
        },
        /**
         * 取消新增阈值组
         */
        handlerCancelThresholdGroup(data, index) {
            this.datas.splice(index, 1)
        },
        handlerDialogVisible() {
            this.dialogConfig.visible = !this.dialogConfig.visible
        },
    },
}
</script>

<style lang="less" scoped>
.monitor-form-component-container {
    margin: 2rem 0;
    .monitor-params-form {
        .el-tabs {
            .el-tab-pane {
                .add-btn--wrapper {
                    padding-bottom: 1rem;
                    display: flex;
                    align-items: center;
                    .warning-data-formatter-tip {
                        color: #409eff;
                        font-size: 1.4rem;
                        font-weight: bold;
                        padding-left: 1rem;
                    }
                }

                .el-col {
                    padding: 0 2rem;
                }
                .el-form-item {
                    display: flex;
                    padding: 0rem 0.3rem;
                    &:last-child {
                        padding-bottom: 0.5rem;
                        border-bottom: 1px solid #eee;
                    }
                    /deep/.el-form-item__content {
                        display: flex;
                        flex: 1;
                        width: 100%;
                        .form-item--wrapper {
                            display: flex;
                            white-space: nowrap;
                            margin: 0 1.2rem;
                            .form-item--label {
                                margin-right: 1.2rem;
                            }
                        }
                    }
                    /deep/.el-input-group {
                        height: 0.8rem;
                    }
                }
            }
        }
        .footer-operation {
            margin-top: 2rem;
        }
    }
    .formatter-dialog-wrapper {
        .tip-text {
            line-height: 1.5rem;
            color: green;
            font-weight: 800;
        }
        /deep/.el-table {
            margin-top: 1rem;
            .el-table__header {
                th {
                    background-color: #e1e8ef;
                }
            }
        }
    }
}
</style>
