<template>
    <div class="my-chart-component-container">
        <div
            ref="myChart"
            class="myChart"
            style="width: 100%;"
            :style="{ height: chartHeight }"
            v-loading="chartLoading"
        ></div>
    </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
    props: {
        // 调色板
        color: { type: Array },
        chartHeight: { type: String, default: '500px' },
        legendData: { type: Array, required: true },
        xAxisData: { type: Array, required: true },
        yAxisData: { type: Array },
        seriesData: { type: Array, required: true },
        chartLoading: { type: Boolean, default: false },
    },
    data() {
        return {
            myChart: '',
            option: {
                color: this.color || ['#ffb352', '#ff6d6d'],
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow',
                    },
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true,
                },
                legend: {
                    data: this.legendData,
                },
                xAxis: {
                    type: 'category',
                    data: this.xAxisData,
                    axisTick: {
                        alignWithLabel: true,
                    },
                },
                yAxis: this.yAxisData || {
                    type: 'value',
                },
                series: this.seriesData,
            },
        }
    },
    created() {
        this.$nextTick(() => {
            this.myChart = echarts.init(this.$refs['myChart'])
            this.option && this.myChart.setOption(this.option)
        })
    },
    methods: {},
    components: {},
}
</script>

<style lang="less" scoped>
.my-chart-component-container {
}
</style>
