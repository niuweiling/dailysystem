<template>
<!--	登录页面-->
<div class="bj">


	<el-form id="box" :model="form" :rules="rules" ref="form" label-width="100px" class="demo-form"  prop="username">

		<el-form-item  label="用户名" prop="username" >
			<el-input v-model="form.username" placeholder="username" clearable  suffix-icon="el-icon-user" ></el-input>
		</el-form-item>
		<el-form-item label="密码" prop="password">
			<el-input type="password" v-model="form.password" placeholder="password" clearable  suffix-icon="el-icon-lock">
			</el-input>
		</el-form-item>
		<el-form-item label="角色" prop="role" >
			<el-radio v-model="form.role" :label="item" v-for="(item,index) in role" :key="index">{{item}}</el-radio>

		</el-form-item>
		<el-form-item>
			<el-button type="primary" @click="submitForm('form')">提交</el-button>
			<el-button @click="resetForm('form')">重置</el-button>
		</el-form-item>


	</el-form>
</div>
</template>

<script>
import admin from '../data/admin'
import student from '../data/student'
import teacher from '../data/teacher'
    export default {
        name: "login",
        data:function () {
            return{
                form:{
                    username:'',
                    password:'',
                    role:'',
                },
                role:['admin','teacher','student'],
                rules: {
                    username: [
                        { required: true, message: '请输入用户名', trigger: 'blur' },
                        { min:3, max: 6, message: '长度在 0 到 6 个字符', trigger: 'blur' }
                        //验证：必填  信息   失去焦点   值发生改变
                    ],
                    password: [
                        { required: true, message: '请选择密码', trigger: 'blur' }
                    ],
                    role: [
                        { required: true, message: '请选择角色', trigger: 'change' }
                    ],
                },

            }

        },
        methods: {
            submitForm(formName) {
                // let that=this;  方法1：改变this指向:        方法2：if（{}.bind（this））绑定this
                this.$refs[formName].validate((valid) => { //验证方法    方法3：箭头函数改变this指向   ref可以获取该组件的方法
                    if (valid) {
                        let role=this.form.role;
                        let model=null;
                        if(role=="admin"){
                            model=admin
                        }else if (role=="student"){
                            model=student
                        } else {
                            model=teacher
                        }
                        let flag=model.filter(ele=>ele.username==this.form.username&&ele.password==this.form.password);
                        if (flag) {
                               // localStorage.user=this.form;
                                localStorage.user=JSON.stringify(flag[0]);
                               if (role=='student'){
                                   this.$router.push({name:'studentwrite'});  //路由跳转
                                   // location.replace("center");
                               }else {
                                   this.$router.push({name:'center'});  //路由跳转
                               }

                           alert('登录成功！')
                        }
                     else {
                        this.$message.warning({
                            message: '用户名密码不匹配',
                            type: 'success'
                        });
                       // alert('error submit!!');
                       //  return false;
                    }
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }



</script>
<style>
/*<!--	全局样式-->*/
	html,body{
		width: 100%;
		height: 100%;

	}

</style>
<style scoped>
/*<!--	局部组件样式-->*/
/*    #content{*/
/*	    position: absolute;*/
/*	    top: 0;*/
/*	    bottom: 0;*/
/*	    left: 0;*/
/*	    right: 0;*/
/*	    background-image: url("../../public/img/111.jpg");*/
/*    }*/
    #box{
position: absolute;
width: 350px;
height:300px;
left: 50%;
top: 50%;
transform: translate(-50%,-50%);

    }
.bj{
	background-image: url("/111.jpg");
	width: 100%;
	height: 100%;
}
	.el-header, .el-footer {
		background-color: #B3C0D1;
		color: #333;
		text-align: center;
		line-height: 60px;
	}

	.el-aside {
		background-color: #D3DCE6;
		color: #333;
		text-align: center;
		line-height: 50px;
	}

	.el-main {
		background-color: #E9EEF3;
		color: #333;
		text-align: center;
		line-height: 50px;
	}

	body > .el-container {
		margin-bottom: 40px;
	}

	.el-container:nth-child(5) .el-aside,
	.el-container:nth-child(6) .el-aside {
		line-height: 260px;
	}

	.el-container:nth-child(7) .el-aside {
		line-height: 320px;
	}
</style>