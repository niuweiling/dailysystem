<template>

	<el-form  :model="form" :rules="rules" ref="form" label-width="80px" class="demo-ruleForm">
		<el-form-item label="姓名" prop="username">
			<el-input v-model="form.username" placeholder="username" clearable>
				<i slot="prefix" class="el-input-icon el-icon-user"></i>
			</el-input>
		</el-form-item>
		<el-form-item label="性别" prop="sex">
			<el-radio v-model="form.sex" label="男" ></el-radio>
			<el-radio v-model="form.sex" label="女" ></el-radio>
		</el-form-item>
		<el-form-item label="班级" prop="classes">
			<el-select v-model="form.classes" placeholder="请选择" >
				<el-option
						:value="item.cname"
						:label="item.cname"
						v-for="(item,cid) in classes"
						:key="cid">
				</el-option>
			</el-select>
		</el-form-item>
		<el-form-item label="年龄" prop="age">
			<el-input v-model="form.age" placeholder="username" clearable prefix-icon="el-icon-">
				<i slot="prefix" class="el-input-icon el-icon-s-promotion"></i>
			</el-input>
		</el-form-item>
		<el-form-item label="学号" prop="num">
			<el-input v-model="form.num" placeholder="username" clearable>
				<i slot="prefix" class="el-input-icon el-icon-edit-outline"></i>
			</el-input>
		</el-form-item>
		<el-form-item label="密码" prop="password">
			<el-input v-model="form.password" placeholder="username" clearable>
				<i slot="prefix" class="el-input-icon el-icon-mobile-phone"></i>
			</el-input>
		</el-form-item>
		<el-form-item label="电话" prop="tell">
			<el-input v-model="form.tell" placeholder="username" clearable prefix-icon="el-icon-phone-outline">
			</el-input>
		</el-form-item>
		<el-form-item>
			<el-button type="primary" @click="submitForm('form')">提交</el-button>
			<el-button @click="resetForm('form')">重置</el-button>
		</el-form-item>
	</el-form>

</template>

<script>
    export default {
        name: "add",
        data:function() {
            return {
                form:{
                    id:'',
                    username:'',
                    age:'',
                    sex:'',
                    classes:'',
                    num:'',
                    tell:'',
                    password:'',
                },
                classes:[
                    {cid:1,cname:'niu1'},
                    {cid:2,cname:'niu2'},
                    {cid:3,cname:'niu3'},
                ],
                rules: {
                    username: [
                        { required: true, message: '请输入用户名', trigger: 'blur' },
                        { min:3, max: 6, message: '长度在 0 到 6 个字符', trigger: 'blur' }
                        //验证：必填  信息   失去焦点   值发生改变
                    ],
                    age: [
                        { required: true, message: '请输入年龄', trigger: 'blur' }
                    ],
                    sex: [
                        { required: true, message: '请选择性别', trigger: 'blur' }
                    ],
                    tell: [
                        { required: true, message: '请输入电话', trigger: 'blur' }
                    ],
                    num: [
                        { required: true, message: '请输入学号', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                    ],
                    classes: [
                        { required: true, message: '请选择班级', trigger: 'blur' }
                    ],

                },

            }
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.form.id=Date.now()
                        let form=this.form;
                        localStorage.form=JSON.stringify(form);
                        this.$router.push('/center/teacherquery')
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>

<style scoped>

</style>