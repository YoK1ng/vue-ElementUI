<template>
	<el-row :gutter="24">
		<el-col :span="12">
			<el-card class="box-card">
				<div slot="header" class="clearfix">
					<span>柱状图</span>
				</div>
					<div id="myChart1" :style="{width: '100%', height: '300px'}"></div>
			</el-card>
		</el-col>
	  	<el-col :span="12">
			<el-card class="box-card">
				<div slot="header" class="clearfix">
					<span>饼状图</span>
				</div>
				<div id="myChart2" :style="{width: '100%', height: '300px'}"></div>
			</el-card>
		</el-col>
	</el-row>
</template>

<script>
	export default {
		name: "echarts",
		mounted() {
			this.Bar();
			this.Pie();
		},
		methods: {
			Bar() {
				let myChart = this.$echarts.init(document.getElementById('myChart1'))
				// 绘制图表
				myChart.setOption({
					// echarts实例dom粘贴这里，不要option = {}
					xAxis: {
						type: 'category',
						data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
					},
					yAxis: {
						type: 'value'
					},
					series: [{
						data: [120, 200, 150, 80, 70, 110, 130],
						type: 'bar'
					}]
				});
			},
			Pie() {
				let myChart = this.$echarts.init(document.getElementById('myChart2'))
				// 绘制图表
				myChart.setOption({
					// echarts实例dom粘贴这里，不要option = {}
				    tooltip : {
				        trigger: 'item',
				        formatter: "{a} <br/>{b} : {c} ({d}%)"
				    },
				    legend: {
				        orient: 'vertical',
				        left: 'left',
				        data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
				    },
				    series : [
				        {
				            name: '访问来源',
				            type: 'pie',
				            radius : '55%',
				            center: ['50%', '60%'],
				            data:[
				                {value:335, name:'直接访问'},
				                {value:310, name:'邮件营销'},
				                {value:234, name:'联盟广告'},
				                {value:135, name:'视频广告'},
				                {value:1548, name:'搜索引擎'}
				            ],
				            itemStyle: {
				                emphasis: {
				                    shadowBlur: 10,
				                    shadowOffsetX: 0,
				                    shadowColor: 'rgba(0, 0, 0, 0.5)'
				                }
				            }
				        }
				    ]
				});
			}
		}
	}
</script>

<style>

</style>