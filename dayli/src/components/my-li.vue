<template>
	<li class="list-group-item" :class="'list-group-item-'+classname">
		<input type="checkbox">
		{{content}}{{status}}
		<button class="btn btn-success" @click="lidelete">x</button>
	</li>
</template>

<script>
    export default {
        name: "my-li",
        props:{//接收
            content:{
                required:true,
                type:String,
            },
            status:{
                default:true,
                type:Boolean,
            },
           id:{
                required:true,
                type:Number,
           }
        },
        computed:{//计算属性 判断状态
            classname(){
             return this.status?'success':'danger';
            }
         },
        methods:{
            lidelete(){
                this.$emit('listdelete',this.id)
            }
        }

    }
</script>

<style scoped>
	@import url("https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css");
</style>