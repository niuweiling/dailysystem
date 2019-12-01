
<template>
<!--	首页      父组件-->
	<div class="container" >
		<div class="row">
			<div class="col-lg-6 col-lg-offset-3">
				<my-nav @submit="insertlist"></my-nav>
				<my-list @deletelist="deletelist" :lists="todolist" scene="success"></my-list>
                <template v-slot:default="props">
                      <div>{{props.msg}}{{props.title}}</div>
                </template>
			</div>
		</div>
	</div>
</template>

<script>
import MyNav from '../components/my-nav';
import MyList from '../components/my-list';

    export default {
        name: "index",
        components:{//引组件
            MyNav,MyList
        },
      props:{
            lists:{
                required:true,
                type:Array,
            }
        },
        data: function () {
            return{
                todolist:[
                    {id:1,content:'开题报告---下周一',status:false},
                    {id:2,content:'简历---下周4',status:false},
                    {id:3,content:'协同开发---下周一',status:false},
                    {id:4,content:'下周评审---下周六',status:false},
                    {id:5,content:'过程化项目',status:true}
                ],
                content:''
            }
        },
           methods:{
               indexdelete:{
                   required:true,
               },
            insertlist(){
                let obj={};
                obj.id=this.todolist[this.todolist.length-1].id+1;
                obj.content=this.content;
                obj.status=false;
                this.todolist.push(obj)
            },
            deletelist(id){
                let index=this.todolist.findIndex(ele=>ele.id=id);
                 this.todolist.splice(index,1);
             },
           savelist(){
                this.todolist;

                localStorage.todolist=JSON.stringify(this.todolist);//存到本地
                 },

              },
             watch:{
            //监听

            // todolist(){
            //     this.savelist();
            // },
           todolist:{
               handler:function () {
                 this.savelist()
                },
                deep:true
                },
            content(newv,oldv){
                console.log(newv, oldv);
            }
        },



}
</script>

<style scoped>
	@import url("https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css");
.panner{
	width:300px;
	height: auto;
	border: antiquewhite 1px solid;
}
	ul,li{
		list-style: none;
	}

</style>