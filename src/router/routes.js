// import Home from '../pages/Home.vue'
// import About from '../pages/About.vue'
const Home = () => import('../pages/Home')
const About = () => import('../pages/About')
import News from '../pages/News.vue'
import Message from '../pages/Message.vue'
import MessageDetail from '../pages/MessageDetail.vue'

export default [
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: 'news',
        component: News
      },
      {
        path: 'message',
        component: Message,
        children: [
          {
            name: 'MessageDetail',
            path: 'detail/:id',
            component: MessageDetail,
            // props参数
            // 方式一   布尔值    将所有params参数映射成props中传入，只能是params数据
            // props: true,
            // 方式二   对象    将对象中所有属性映射成props中传入   只能是自定义数据
            // props: { id: 11,name:'aaa'}
            // 方式三    函数   将函数返回对象中所有属性映射为props传入，   可以是params,query,自定义数据
            props: route => ({
              id: route.params.id,
              title: route.query.title,
              name: 'tom'
            })
          }
        ]
      }
    ]
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/',
    redirect: '/home'
  }
]
