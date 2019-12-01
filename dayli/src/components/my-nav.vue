<template>
	<nav class="nav">
		<input type="text">
		<button class="btn btn-success" @click="submit">插入</button>
	</nav>
</template>

<script>
    export default {
        name: "my-nav",
          data(){
            return{
                content:{}
            }
},
        methods:{
            submit(){
                this.$emit('insert',this.content);
            }
        }
    }
</script>

<style scoped>
	@import url("https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css");
</style>