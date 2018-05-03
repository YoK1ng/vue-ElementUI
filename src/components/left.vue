<template>
	<div class="container">
		<div class="left">
			<el-menu class="el-menu-vertical-demo" :class="menuitemClasses" v-model="isCollapse">
				<el-menu-item index="1">
					<i class="el-icon-star-off"></i>
					<span slot="title"><router-link :to="{name:'home'}">首页</router-link></span>
				</el-menu-item>

				<el-submenu index="2">
		          	<template slot="title">
		          		<i class="el-icon-date"></i>
						<span slot="title">组件</span>
		          	</template>
		          	<el-menu-item index="2-1">
						<router-link :to="{name:'form'}">表单</router-link>
					</el-menu-item>
					<el-menu-item index="2-2">
						<router-link :to="{name:'table'}">表格</router-link>
					</el-menu-item>
		        </el-submenu>

		        <el-submenu index="3">
		          	<template slot="title">
		          		<i class="el-icon-news"></i>
						<span slot="title">插件</span>
		          	</template>
		          	<el-menu-item index="3-1">
						<router-link :to="{name:'echarts'}">图表</router-link>
					</el-menu-item>
					<el-menu-item index="3-2">
						<router-link :to="{name:'editor'}">编辑器</router-link>
					</el-menu-item>
		        </el-submenu>
			</el-menu>
		</div>

		<div class="right">
			<transition name="el-zoom-in-center">
				<router-view/>
			</transition>
		</div>
	</div>
</template>

<script>
	import {bus} from "@/bus.js"

	export default {
		name: "left",
		data(){
			return{
				isCollapse : false
			}
		},
		computed:{
			menuitemClasses(){
				return [
					"el-menu-vertical-demo",
					this.isCollapse ? "el-menu--collapse" : ""
				]
			}
		},
		created(){
			bus.$on("handle" , function(){
				this.isCollapse = !this.isCollapse
			}.bind(this));
		},
		watch:{
			isCollapse(){
				bus.$emit("isCollapse", this.isCollapse)
			}
		}
	}
</script>

<style scoped="">
	.container {
		width: 100%;
		float: left;
		position: fixed;
		top: 80px;
		bottom: 0px;
		z-index: 901;
	}

	.left {
		height: 100%;
		float: left;
	}

	.el-menu-vertical-demo:not(.el-menu--collapse) {
		width: 200px;
	}

	.el-menu {
		height: 100%;
	}

	.el-submenu .el-menu-item {
		padding: 0px;
		position: relative;
	}

	.el-menu-item span{
		width: 100%;
		height: 100%;
		display: block;
		position: absolute;
		left: 9px;
		top: 2px;
	}

	.el-menu-item a{
		color: #444;
		width: 100%;
		height: 100%;
		display: block;
		padding: 0 45px;
		position: absolute;
		left: 0px;
		box-sizing: border-box;
	}

	.right {
		height: 100%;
		overflow: hidden;
		word-break: break-all;
		padding: 20px;
		box-sizing: border-box;
		overflow-y: auto;
	}
</style>