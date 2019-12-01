<template>
	<div class="pannel" :class="'panner-'+scene">

		<ul class="list-group">
			<slot msg="hsdfhgsd" title="gghhhj"></slot>
<!--			<my-li class="list-group-item" v-for="item in lists"-->
<!--			:key="item.id" :content="item.content" :status="item.status"-->
<!--               id="item.id"-->
<!--                 @listdelete="listdelete">-->
<!--               {{item.content}}-->
<!--			</my-li>-->
		</ul>
	</div>
</template>

<script>
    // import MyLi from '../components/my-li';
    export default {
        name: "my-list",
         components:{
            // MyLi
         },
        props:{//接收
            lists:{
                required:true,
                type:Array,
                default:function () {
                   return [];
                 //设置默认值用一个函数，如果是数组--return返回一个数组
                },
               scene:{
                    type:String,
                     default:"info"
                  }
            }
        },
         methods:{
            listdelete(id){
                this.$emit('deletelist',id)//通知
            }
         }
    }
</script>

<style scoped>
	@import url("https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css");
</style>