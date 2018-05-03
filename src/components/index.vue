<template>
	<div class="main">
		<top></top>
		<router-view />
	</div>
</template>

<script>
	import top from "@/components/top"

	export default {
		name: "index",
		components:{
			top
		}
	}
</script>

<style>
	.main {
		width: 100%;
		position: fixed;
		top: 0px;
		bottom: 0px;
	}
	*{
		padding: 0px;
		margin: 0px;
		text-decoration: none;
		font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
	}
</style>