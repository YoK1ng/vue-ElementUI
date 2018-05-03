<template>
	<div class="top">
		<div class="logo" :class="menuitemClasses">
			<router-link :to="{name:'home'}">{{logo}}</router-link>
			<i class="el-icon-menu" @click="handleClick"></i>
		</div>

		<el-dropdown class="bt">
			<el-button type="success" size="medium" circle>
		    	<i class="el-icon-bell"></i>
		  	</el-button>
		  	<el-dropdown-menu slot="dropdown">
			    <el-dropdown-item>修改密码</el-dropdown-item>
			    <el-dropdown-item @click.native="esc">退出登录</el-dropdown-item>
		  	</el-dropdown-menu>
		</el-dropdown>

		<el-badge :value="12" class="item">
		  	<el-button :value="12" type="danger" @click="open" icon="el-icon-message" circle></el-button>
		</el-badge>

		<el-dropdown>
			<el-button size="medium">
		    	菜单<i class="el-icon-arrow-down el-icon--right"></i>
		  	</el-button>
		  	<el-dropdown-menu slot="dropdown">
			    <el-dropdown-item>未更新</el-dropdown-item>
			    <el-dropdown-item>未审核</el-dropdown-item>
		  	</el-dropdown-menu>
		</el-dropdown>

		<el-input placeholder="请输入内容" v-model="input5" size="medium" class="input-with-select">
	    	<el-select v-model="select" slot="prepend" placeholder="请选择">
	      		<el-option label="内容" value="1"></el-option>
	      		<el-option label="用户" value="2"></el-option>
	    	</el-select>
	    	<el-button slot="append" icon="el-icon-search"></el-button>
	  </el-input>
	</div>
</template>

<script>
	import {bus} from "@/bus.js"

	export default {
		name: "top",
		data(){
			return{
				logo:"vue-Element",
				input3: '',
			 	input4: '',
			 	input5: '',
			 	select: '',
			 	data: ''
			}
		},
		methods: {
	      	handleClick() {
	        	bus.$emit("handle")
	      	},
	      	open(){
	      		this.$alert('这是一段内容', '最新信息', {
		          	confirmButtonText: '确定',
		          	callback: action => {
		            	this.$message({
		              		type: 'info',
		              		message: `action: ${ action }`
		            	});
		          	}
		        });
	      	},
	      	esc(){
	      		this.$alert('', '确定退出？', {
		          	confirmButtonText: '确定',
		          	callback: action => {
		            	this.$message({
		              		type: 'info',
		              		message: `action: ${ action }`
		            	});
		          	}
		        });
	      	}
	   	},
	   	computed:{
			menuitemClasses(){
				return [
					"logo",
					this.data ? "logobt" : "",
				]
			}
		},
	   	created(){
	   		var _this = this
	   		bus.$on("isCollapse" , function(data){
				this.data = data
			}.bind(this));
	   	}
	}
</script>

<style scoped="">
	.top{
		height: 80px;
	    background: #409EFF;
	    color: #fff;
	    width: 100%;
	    position: fixed;
	    z-index: 900;
	    top: 0;
	}
	.logo {
	    width: 201px;
	    height: 80px;
	    background: #328be6;
	    color: #fff;
	    position: relative;
	    float: left;
	    text-align: left;
	    box-sizing: border-box;
	    padding: 0px 20px;
	}
	.logo a{
    	color: #fff;
	    font-size: 18px;
	    font-weight: bold;
	    text-transform: uppercase;
	    float: left;
	    line-height: 80px;
	}
	.logo i{
		float: right;
		color: #fff;
	    font-size: 18px;
	    line-height: 80px;
	    cursor: pointer;
	}
	.logobt{
		width: 65px;
	}
	.logobt a{
		display: none;
	}
	.logobt i{
		float: left;
	}
	.el-input{
		float: left;
		width: auto;
		margin: 22px 0px 0px 20px;
	}
	.el-dropdown{
		float: right;
		margin: 22px 20px 0px 0px;
	}
	.item{
		float: right;
		margin: 20px 20px 0px 0px;
	}
</style>