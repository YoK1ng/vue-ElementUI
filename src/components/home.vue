<template>
	<el-col :span="24">
		<el-row :gutter="24">
			<el-col :span="24">
				<el-carousel :interval="4000" type="card" height="300px">
					<el-carousel-item v-for="item in list" :key="item.id">
						<img :src="item.pic">
					</el-carousel-item>
				</el-carousel>
			</el-col>
		</el-row>

		<el-card class="box-card">
			<div slot="header" class="clearfix">
				<span>组件</span>
			</div>
			<el-row>
				<el-button icon="el-icon-search" circle></el-button>
				<el-button type="primary" icon="el-icon-edit" circle></el-button>
				<el-button type="success" icon="el-icon-check" circle></el-button>
				<el-button type="info" icon="el-icon-message" circle></el-button>
				<el-button type="warning" icon="el-icon-star-off" circle></el-button>
				<el-button type="danger" icon="el-icon-delete" circle></el-button>
			</el-row>
			<el-row style="margin-top: 20px;">
				<el-tag>标签一</el-tag>
				<el-tag type="success">标签二</el-tag>
				<el-tag type="info">标签三</el-tag>
				<el-tag type="warning">标签四</el-tag>
				<el-tag type="danger">标签五</el-tag>
			</el-row>
			<el-row style="margin-top: 20px;">
				<el-progress :percentage="0"></el-progress>
				<el-progress :percentage="70"></el-progress>
				<el-progress :percentage="80" color="#8e71c7"></el-progress>
				<el-progress :percentage="100" status="success"></el-progress>
				<el-progress :percentage="50" status="exception"></el-progress>
			</el-row>
			<el-steps :space="200" :active="3" finish-status="success" style="margin-top: 20px;">
			  	<el-step title="已完成"></el-step>
			  	<el-step title="进行中"></el-step>
			  	<el-step title="步骤 3"></el-step>
			  	<el-step title="步骤 4"></el-step>
			  	<el-step title="步骤 5"></el-step>
			</el-steps>
		</el-card>
	</el-col>
</template>

<script>
	export default {
		name: "home",
		data() {
			return {
				list: [{
						pic: 'http://preview.new.55.la/banner_more_pic/admin_view_pic/21491.gif'
					},
					{
						pic: 'http://preview.new.55.la/banner_more_pic/admin_view_pic/21488.gif'
					},
					{
						pic: 'http://preview.new.55.la/banner_more_pic/admin_view_pic/21476.gif'
					},
					{
						pic: 'http://preview.new.55.la/banner_more_pic/admin_view_pic/21470.gif'
					},
				]

			}
		}
	}
</script>

<style scoped="">

</style>