<template>
	<div>
	<div>
<!--父自定义事件-->
		<my-btn :type="info" :num="number">成功</my-btn>
		<my-btn type="success">失败</my-btn>
<!--		<my-btn></my-btn>-->
<!--		<my-btn></my-btn>-->
	</div>

	</div>
</template>

<script>
	import MyBtn from '../components/my-btn'
    export default {
        name: "write",
		components:{
            MyBtn
		},



    }
</script>

<style scoped>
	@import url("https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css");
</style>