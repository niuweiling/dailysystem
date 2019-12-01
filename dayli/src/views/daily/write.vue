<template>

<div>
	<div style="text-align: center;font-size: 26px">填写学生日报</div>
	<el-form :model="daily" ref="myform" >
		<el-form-item label="座右铭">
			<el-input v-model="daily.motto" placeholder="座右铭"
             minlength="1" maxlength="5" show-word-limit="">

			</el-input>
		</el-form-item>
		<el-form-item label="完成情况">
			<el-input v-model="daily.finish" placeholder="完成情况"
             show-word-limit="">

			</el-input>
		</el-form-item>
		<el-form-item label="心得体会">
			<el-input v-model="daily.feeling" placeholder="心得体会"
             show-word-limit="">

			</el-input>
		</el-form-item>
		<el-form-item label="遇到问题">
			<el-input v-model="daily.problem" placeholder="遇到问题">

			</el-input>
		</el-form-item>
		<el-form-item label="学习内容">
			<el-input type="textarea" :rows="4" v-model="daily.content" placeholder="学习内容">
			</el-input>
		</el-form-item>
		<el-form-item label="建议">
			<el-input v-model="daily.suggest" placeholder="建议"
             show-word-limit="">

			</el-input>
		</el-form-item>
		<el-form-item label="其他">
			<el-input v-model="daily.other" placeholder="其他"
              show-word-limit="">

			</el-input>
		</el-form-item>
		<el-form-item >
			<el-button class="btn btn-success" @click="submitdaily">
                提交
			</el-button>
			<el-button class="btn btn-info" @click="resetdaily('myform')">
				重置
			</el-button>
		</el-form-item>

	</el-form>
</div>
</template>

<script>
    export default {
        name: "write",
        data(){
            return{
                daily:{
                    names:'',
                    classes:'wuif1907-2',
                    motto:'',
                    content:'',
                    finish:'',
                    problem:'',
                    feeling:'',
                    suggest:'',
                    other:'',

                }
            }
        },
         methods:{
            submitdaily(){
                this.daily.names=JSON.parse(localStorage.user).username;
                //前台数据向后台发送请求 fetch
                // fetch('http://www.daily-end.com/api/index', {   GET请求
                //     .then(res=>res.json())
                //         .then(data=>{
                //             console.log(data);
                //         })
                // })
                fetch('http://www.daily-end.com/index/index/index',{
                    method:'POST',
                    body:JSON.stringify(this.daily),
                    headers:new Headers({
                        'content-type':'application/json'
                    })
                 })
                     .then(res=>res.json())
                     .then(data=>{
                         if (data.code==200){
                             this.$message.success(data.msg);
                             // this.$refs.myform.resetfields();
                         }else {
                             this.$message.fail(data.msg)
                         }
                         console.log(data);
                     })
            },

             resetdaily(myform){
                this.$refs[myform].resetdaily();
             }
         }
    }
</script>

<style scoped>

</style>