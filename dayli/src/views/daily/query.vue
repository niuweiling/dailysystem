<template>
	<div>
<div style="text-align: center;font-size: 26px">查看学生日报</div>
          <el-form :model="form" :inline="true">
               <el-form-item label="内容">
                   <el-input  v-model="form.content">
                   </el-input>
                </el-form-item>
               <el-form-item label="时间">
                   <el-date-picker
                           v-model="form.datetime"
                           align="right"
                           type="date"
                           placeholder="选择日期"
                         >
                   </el-date-picker>
              </el-form-item>
               <el-form-item>
                <el-button type="primary" icon="el-icon-search">搜索</el-button>
                 </el-form-item>
          </el-form>

	<el-table :data="dailyArr">
		<el-table-column prop="motto" label="座右铭"></el-table-column>
		<el-table-column prop="content" label="内容"></el-table-column>
		<el-table-column prop="finish" label="完成度"></el-table-column>
		<el-table-column prop="suggest" label="建议"></el-table-column>
		<el-table-column prop="problem" label="问题"></el-table-column>
		<el-table-column prop="feeling" label="心得体会"></el-table-column>
		<el-table-column prop="other" label="其他"></el-table-column>
		<el-table-column prop="datetime" label="提交时间"></el-table-column>
	</el-table>
        <my-page :total="total" :page-size="num"
        @changepage="changepage"
        ></my-page>

	</div>

</template>

<script>
	import {SUCCESS,FALE,HOSTNAME} from "../../configer/node";
	import MyPage from '../../components/my-page';

    export default {
        name: "query",
         data(){
            return{
                dailyArr:[],
                user:null,
                limit:1,
                total:0,
                num:3,
                  form:{
                    content:'',
                    datetime:''
                  }
            }
        },
        //通过对象拼字符串
            computed:{
            objTransformQS(){
                let str='';
                for (let i in this.form){
                    let val=this.form[i];
                    if (val!=''){
                       str+='&'+i+'='+val
                    }
                }
                return str;
            }
           },
             methods:{
            changepage(i){
                // HOSTNAME+`/index/index/query?names=`+user&limit&pages`;
            this.getdaily(i)
            },
            getdaily(i){
                let user=this.user.username;
                 let qs='?names='+user+'&page='+i+'&limit='+this.limit+this.objTransformQS;
                fetch(HOSTNAME+'/index/index/query'+qs)
                       .then(res=>res.json())
                       .then(data=>{
                    if(data.code==SUCCESS){
                        this.dailyArr=data.data;
                        this.total=data.count;
                        // console.log(data);
                    }else if(data.code==FALE){
                        console.log(data);

                    }
                })
            },
             getuser(){
                this.user=JSON.parse(localStorage.user);
            },

          },

        beforeMount(){
            this.getuser();
            this.getdaily();
        },


       components:{
            MyPage
   },
    }
</script>

<style scoped>

</style>