<template>
    <div class="pager-table-component-container">
        <el-table
            :data="tableData"
            border
            style="width: 100%"
            :cell-class-name="tableConfig.cellClassName"
            :height="tableHeight"
            v-loading="tableLoading"
        >
            <el-table-column v-if="tableSelection" type="selection" fixed="left" width="55"> </el-table-column>
            <el-table-column
                v-for="col in tableColumns"
                :key="col.prop"
                :prop="col.prop"
                :label="col.label"
                :width="col.width"
                :class-name="col.className"
            >
                <template slot-scope="scope">
                    <div v-if="col.type == 'link'">
                        <el-button v-if="scope.row[col.prop]" type="text" @click="col.operation(true, scope.row)">
                            查看
                        </el-button>
                        <span v-else>无</span>
                    </div>
                    <div v-if="col.type == 'switch'">
                        <el-switch v-model="scope.row[col.prop]" active-color="#13ce66" inactive-color="#ff4949" disabled> </el-switch>
                    </div>
                    <div v-else>
                        <span>{{ (col.formatter && col.formatter(scope.row)) || scope.row[col.prop] || '无' }}</span>
                    </div>
                </template>
            </el-table-column>
            <el-table-column v-if="tableOperation" fixed="right" label="操作" width="100">
                <template slot-scope="scope">
                    <el-button
                        type="text"
                        class="detail-btn"
                        icon="el-icon-document"
                        @click="handleRowDetail(scope.row)"
                    ></el-button>
                    <el-button
                        type="text"
                        class="edit-btn"
                        icon="el-icon-edit-outline"
                        @click="handleEditRow(scope.row)"
                    ></el-button>
                    <el-button
                        type="text"
                        class="delete-btn"
                        icon="el-icon-delete"
                        @click="handleDelRow(scope.row)"
                    ></el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination
            v-if="tableConfig.currentPage"
            @size-change="handlerSizeChange"
            @current-change="handlerCurrentChange"
            :current-page="tableConfig.currentPage"
            :page-sizes="[5, 20, 50, 100, 200]"
            :page-size="tableConfig.pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="tableConfig.tableTotalData"
        >
        </el-pagination>
    </div>
</template>

<script>
export default {
    props: {
        tableHeight: { type: Number },
        tableColumns: { type: Array, required: true },
        tableData: { type: Array, required: true },
        tableLoading: { type: Boolean, default: false },
        tableSelection: { type: Boolean },
        tableConfig: { type: Object },
        tableOperation: { type: Boolean },
        _handlerRowDetail: { type: Function },
        _handleEditRow: { type: Function },
        _handleDelRow: { type: Function },
    },
    data() {
        return {}
    },
    methods: {
        handlerSizeChange(val) {
            this.tableConfig.pageSize = val
        },
        handlerCurrentChange(val) {
            this.tableConfig.currentPage = val
        },
        handleRowDetail(row) {
            // console.log(this.$router.currentRoute.path)
            !this._handlerRowDetail && this.$router.push(`${this.$router.currentRoute.path}-detail/${row.id}`)
            this._handlerRowDetail && this._handlerRowDetail(row)
        },
        handleEditRow(row) {
            // console.log(this.$router.currentRoute.path)
            !this._handleEditRow && this.$router.push(`${this.$router.currentRoute.path}-edit/${row.id}`)
            this._handleEditRow && this._handleEditRow(row)
        },
        handleDelRow(row) {
            this.$confirm('此操作将永久删除数据, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'error',
            })
                .then(() => {
                    this._handleDelRow && this._handleDelRow(row)
                })
                .catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除',
                    })
                })
        },
    },
    components: {},
}
</script>

<style lang="less" scoped>
.pager-table-component-container {
    .el-table {
        .el-table-column {
        }
        /deep/.el-table__body {
            .danger-cell {
                color: tomato;
            }
            .warn-cell {
                color: #ff9f00;
            }
            .safe-cell {
                color: #14cc67;
            }
            .disabled-cell {
                color: #ccc;
            }
        }
        .cell {
            span {
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 3;
                overflow: hidden;
            }
        }
    }
    .el-pagination {
        text-align: right;
        padding: 1rem 0;
    }
}
</style>
