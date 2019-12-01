<template>
<!--	子组件-->
	<button :class="['btn','btn-'+type]" @click="countclick">{{type}}{{num}}</button>
</template>

<script>
    export default {
        name: "my-btn",
//   data(){
//             return{
//                 content:{}
//             }
// },
// props:['type'],
props:{
type:{
                default:'primary'
            },


	num:{
    require:true,
    type:Number,
	}
},
data:function () {
return {
    count:1,
                msg:'hhh',
}
        },
methods:{
            countclick(){
                this.count+1;
            }
}
    }
</script>

<style scoped>
	@import url("https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css");
</style>