import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import Echarts from 'echarts'

Vue.use(Echarts);
Vue.use(VueRouter);
Vue.use(ElementUI);


//1、引入组件  全局
import index from "./views/index";
import center from "./views/center";
// import write from "./views/write";
import login from "./views/login";
import studentadd from "./views/student/add";
import studentquery from "./views/student/query";
import studentedit from "./views/student/edit"
import teacheradd from "./views/teacher/add";
import teacherquery from "./views/teacher/query";
//学生主界面
import student from "./views/student";
import write from "./views/daily/write";
import query from "./views/daily/query";
Vue.config.productionTip = false


let router=new VueRouter({
  routes:[
    {path:'/',component:index},
    {path:'/center',component:center,name:'center',
      meta:{title:'学生日报管理系统'},
    children:[
      {path:'studentadd',component:studentadd,
      meta:{title:'学生添加'}
      },
      {path:'studentquery',component:studentquery,
        meta:{title:'学生查看'}
      },
      {path:'studentedit/id',component:studentedit,name:'studentedit',
        meta:{title:'学生编辑'}
      },
      {path:'teacheradd',component:teacheradd},
      {path:'teacherquery',component:teacherquery},
    ]
    },
    // {path:'/write',component:write},
    {path:'/login',component:login,name:'student',
      meta:{title:'登录主界面'},
    },

    {path:'/student',component:student,name:'student', meta:{title:'学生日报管理系统'},
      children:[
        {path:'write',component:write,name:'studentwrite',
          meta:{title:'学生填写日报'}
        },
        {path:'query',component:query,name:'studentquery',
          meta:{title:'学生查看日报'}
        }
      ]





    },
  ]
});
//导航守卫
//组件切换   设置文档标题
//1、监听组件切换 router.beforeEach   2、当前组件标题 meta.title  3、设置文档标题document.title
router.beforeEach((to ,from,next)=>{

  let title=to.meta.title;
  document.title=title;
  next();
})


new Vue({
  router,
  render: h => h(App),

}).$mount('#app')


