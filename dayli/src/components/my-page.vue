<template>
	<div>
		<ul class="pages">
			<li :class="{active:current==i}" v-for="i in pageNumber" :key="i"
               @click="pagechange(i)">
             {{i}}
			</li>
		</ul>
	</div>
</template>

<script>
    export default {
        name: "my-page",
           props:{//验证
            total:{required:true,type:Number,},
            pagesize:{type:Number,default:3},


        },
        computed:{//计算属性
            pageNumber(){  //页数
                return  Math.ceil(this.total/this.pagesize);


            }
        },

        data(){
            return{
              current:1  //目前默认页码
            }
         },
        methods:{
            pagechange(n){  //当前页数---当前按钮被选中---选中后加一个active改变颜色
                // if (this.current=n){
                //     return;
                // }
                // this.current=n;
                this.$emit('changepage',n)
            }
        }
    }
</script>

<style scoped>
	ul,li{
		list-style: none;
	}
.pages{
	width: 100%;
	height: 30px;
	display: flex;

}
	.pages>li{
		width: 30px;
		height: 28px;
		text-align: center;
		line-height: 28px;
		border-radius: 2px;
		margin-left: 10px;
		background: #B3C0D1;
		cursor: pointer;
	}
	.pages>li.active{
		background-color: brown;
	}
</style>