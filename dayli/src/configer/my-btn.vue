<template>
	<div>
		<ul class="pages">
			<li v-for="i in pageNumber" :key="i">{{i}}</li>
		</ul>
	</div>
</template>

<script>
    export default {
        name: "my-btn",
        props:{
            total:{
                required:true,
                type:Number
            },
            pagesize:{
                type:Number,
			default:3
            }
		},
        computed:{
            pageNumber(){
                this.ceil
				return Math.ceil(this.total/this.pagesize)
            }
        }
    }
</script>

<style scoped>

</style>