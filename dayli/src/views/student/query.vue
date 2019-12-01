<template>
	<div >
		<el-table :data="students">
			<el-table-column prop="id" label="ID"></el-table-column>
			<el-table-column prop="username" label="姓名"></el-table-column>
			<el-table-column prop="sex" label="性别"></el-table-column>
			<el-table-column prop="age" label="年龄"></el-table-column>
			<el-table-column prop="classes" label="班级"></el-table-column>
			<el-table-column prop="num" label="学号"></el-table-column>
			<el-table-column
					fixed="right"
					label="操作"
					width="100">
				<template  slot-scope="scope">
					<el-button  type="text" size="small" class="btn btn-success">
<!--					<router-link to="/center/studentedit">编辑</router-link>-->
							<router-link :to="{name:'studentedit',params:{id:scope.row.id}}" tag="el-button "  >编辑</router-link>
					</el-button>
				</template>
			</el-table-column>
			<el-table-column
					fixed="right"
					label="操作"
					width="100">
				<template slot-scope="scope">
					<el-button @click="deletestudent(scope.row.id)" type="text" size="small" class="btn btn-danger">删除</el-button>
				</template>
			</el-table-column>

		</el-table>



	</div>
</template>

<script>
	import students from '../../data/student';

    export default {
        name: "query",
         data(){
            return{
                students:[]
            }
        },
        methods:{
            getstudent(){
                //request发送请求
                let student=JSON.parse(localStorage.getItem('form'));
                students.push(student);
                this.students=students;
            },
            deletestudent(id) {
                // 方法一   findIndex   splice     删除当前id所在行
                // let index = this.students.findIndex(ele=>ele.id=id);
                //     this.students.splice(index, 1);
                //方法二    filter
                this.students=this.students.filter(ele=>ele.id!=id)

            },
            // removeDomain(id) {
            //     var index = this.students.indexOf(ele=>ele.id=id)
            //     if (index !== -1) {
            //         this.students.splice(index, 1)
            //     }
            // },

         },

         //生命周期函数
         mounted(){
            this.getstudent();
        },
    }
</script>

<style scoped>

</style>