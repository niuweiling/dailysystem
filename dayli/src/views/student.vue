<template>
	<div>

	<el-container>
		<!--		侧导航-->
		<el-aside width="200px"  style="background-color: #d66b64;min-height: 800px ">
			<div>
			<el-avatar src="../../public/img/图.png'" style="margin-left: 60px;width: 70px;height: 75px;background-image: url('../../public/img/图.png');background-size: 100%"></el-avatar>
			</div>
			<el-menu >


				<el-submenu index="3" style="background-color: #d6856b;">
					<template slot="title">
						<i class="el-icon-message"></i>
						<span style="color: #303133">日报管理</span>
					</template>
					<el-menu-item-group>
						<el-menu-item index="3-1">
						<router-link to="/student/write">
							填写日报
							</router-link>

						</el-menu-item>
						<el-menu-item index="3-2">
								<router-link to="/student/query">查看日报</router-link>
							</el-menu-item>
					</el-menu-item-group>
				</el-submenu>

			</el-menu>

		</el-aside>
		<el-container>
			<!--			头部-->
			<el-header style="text-align: right; font-size: 12px">
				<el-menu style="background: #f5ac80;height: 80px;"  class="el-menu-demo" mode="horizontal">
					<el-menu-item index="1">处理中心</el-menu-item>
					<el-submenu index="2">
						<template slot="title">我的工作台</template>
						<el-menu-item index="2-1">选项1</el-menu-item>
						<el-menu-item index="2-2">选项2</el-menu-item>
						<el-menu-item index="2-3">选项3</el-menu-item>
						<el-submenu index="2-4">
							<template slot="title">选项4</template>
							<el-menu-item index="2-4-1">选项1</el-menu-item>
							<el-menu-item index="2-4-2">选项2</el-menu-item>
							<el-menu-item index="2-4-3">选项3</el-menu-item>
						</el-submenu>
					</el-submenu>
					<el-menu-item index="3" disabled>消息中心</el-menu-item>
					<el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
				</el-menu>
				<div class="line"></div>
			</el-header>
			<!--			主体部分-->
			<el-main>
				<router-view></router-view>
			</el-main>
			<!--			底部-->
			<el-footer>Footer</el-footer>
		</el-container>
	</el-container>
	</div>
</template>

<script>
    export default {
        name: "student",
        data(){
            return{
                user:null
            }
        },
        methods:{
            getuser(){
                this.user=JSON.parse(localStorage.getItem('user'))
            }
        },
        beforeMount(){
            this.getuser();
        }



    }




</script>

<style scoped>

	.router-link-exact-active{
		color: brown;
	}
	a{
		color: #333333;
	}
	.el-header {
		margin: 0;
		padding:0;
		color: #333;
		line-height: 40px;
	}

	.el-aside {

		color: #333;
	}
	.el-header, .el-footer {
		background-color: #ffffff;
		color: #333;
		text-align: center;
		line-height: 60px;
	}


	.el-main {
		background-color: #ffffff;
		color: #333;

	}

	body > .el-container {
		margin-bottom: 20px;
	}


</style>