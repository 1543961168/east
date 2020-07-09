const Home = () =>
    import ( /* webpackChunkName: "group-foo" */ 'Pages/home/index.vue')
const Login = () =>
    import ( /* webpackChunkName: "group-foo" */ 'Pages/login/index.vue')
const Community = () =>
    import ( /* webpackChunkName: "group-foo" */ 'Pages/community/index.vue')
export default [{
        path: '/',
        redirect: '/home'
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/home',
        component: Home,
        name: 'Home',
        // children:[
        //   {path:'/home',component:Home},
        // ],
    },
    {
        path: '/community',
        component: Community,
        name: 'Community'
    }
]