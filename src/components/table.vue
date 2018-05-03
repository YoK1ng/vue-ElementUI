<template>
	<el-col :span="24">
		<el-table :data="tableData" stripe border height="500" style="width: 100%;margin-bottom: 20px;">
			<el-table-column type="selection"></el-table-column>
			<el-table-column type="index" :index="indexMethod"></el-table-column>
			<el-table-column prop="date" label="日期" sortable width="120"></el-table-column>
			<el-table-column prop="name" label="姓名"></el-table-column>
			<el-table-column prop="province" label="省份"></el-table-column>
			<el-table-column prop="city" label="市区"></el-table-column>
			<el-table-column prop="address" label="地址" width="400"></el-table-column>
			<el-table-column prop="zip" label="邮编" width="120"></el-table-column>
			<el-table-column fixed="right" label="操作" width="220">
				<template slot-scope="scope">
					<el-button @click="handleClick(scope.row)" size="mini">查看</el-button>
					<el-button size="mini">编辑</el-button>
					<el-button @click.native.prevent="deleteRow(scope.$index, tableData)" type="danger" size="mini">移除</el-button>
				</template>
			</el-table-column>
		</el-table>

		<el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
	</el-col>
</template>

<script>
	export default {
		name: "vtable",
		data() {
			return {
				tableData: [{
					date: '2016-05-03',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1518 弄',
					zip: 200333
				}, {
					date: '2016-05-02',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1518 弄',
					zip: 200333
				}, {
					date: '2016-05-04',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1518 弄',
					zip: 200333
				}, {
					date: '2016-05-01',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1518 弄',
					zip: 200333
				}, {
					date: '2016-05-02',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1518 弄',
					zip: 200333
				}, {
					date: '2016-05-04',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1518 弄',
					zip: 200333
				}, {
					date: '2016-05-01',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1518 弄',
					zip: 200333
				}, {
					date: '2016-05-02',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1518 弄',
					zip: 200333
				}, {
					date: '2016-05-04',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1518 弄',
					zip: 200333
				}, {
					date: '2016-05-01',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1518 弄',
					zip: 200333
				}]
			}
		},
		methods: {
			handleClick(tab, event) {
				console.log(tab, event);
			},
			deleteRow(index, rows) {
				rows.splice(index, 1);
			},
			indexMethod(index) {
		        return index + 1;
		   	}
		},
	}
</script>

<style>
</style>