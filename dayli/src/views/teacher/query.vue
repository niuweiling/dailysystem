<template>
	<div>
		<el-table :data="teachers">
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
				<template slot-scope="scope">
					<el-button @click="handleClick(scope.row)" type="text" size="small" class="btn btn-success">查看</el-button>
				</template>
			</el-table-column>
			<el-table-column
					fixed="right"
					label="操作"
					width="100">
				<template >
					<el-button @click="removeDomain" type="text" size="small" class="btn btn-danger">删除</el-button>
				</template>
			</el-table-column>

		</el-table>



	</div>
</template>

<script>
    import teachers from '../../data/teacher';

    export default {
        name: "query",
        data(){
            return{
                teachers:[]
            }
        },
        methods:{
            getstudent(){

                let teacher=JSON.parse(localStorage.getItem('form'));
                teachers.push(teacher);
                this.teachers=teachers;
            },
            removeDomain(id) {
                let index = this.teachers.findIndex(ele=>ele.id=id);

                this.teachers.splice(index, 1)

            },
            // removeDomain(id) {
            //     var index = this.students.indexOf(ele=>ele.id=id)
            //     if (index !== -1) {
            //         this.students.splice(index, 1)
            //     }
            // },

        },

        //声明周期函数
        mounted(){
            this.getstudent();
        },
    }
</script>

<style scoped>

</style>