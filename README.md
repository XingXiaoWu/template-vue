# 文件夹目录
```
.
├── README.md           readme
├── babel.config.js     babel
├── jsconfig.json       vscode读取的项目配置
├── package-lock.json   锁文件
├── package.json        依赖配置
├── public              public文件夹
│   ├── favicon.ico
│   └── index.html
├── src                 代码文件夹
│   ├── App.vue         入口
│   ├── api             请求
│   │   └── index.js
│   ├── assets                  资源文件
│   │   └── images
│   │       ├── login
│   │       │   ├── 1.png
│   │       │   ├── 2.jpg
│   │       │   └── 3.jpg
│   │       └── logo
│   │           └── logo.png
│   ├── components              组件
│   │   ├── Copyright
│   │   │   └── index.vue
│   │   ├── Dialog
│   │   │   └── index.vue
│   │   ├── LoginOut
│   │   │   └── index.vue
│   │   ├── Logo
│   │   │   └── index.vue
│   │   ├── Pagination
│   │   │   ├── index.vue
│   │   │   └── logic.js
│   │   ├── SidebarItem
│   │   │   └── index.vue
│   │   ├── TableContant
│   │   │   └── index.vue
│   │   ├── UserMenu
│   │   │   └── index.vue
│   │   └── autoRegister.js     自动注册组件
│   ├── layouts                 样式布局
│   │   ├── LayoutEmpty
│   │   │   └── index.vue
│   │   └── LayoutMain
│   │       └── index.vue
│   ├── main.js                 入口函数
│   ├── router                  vuex-router
│   │   ├── index.js            路由入口
│   │   ├── modules             子路由
│   │   │   ├── errorRoute.js
│   │   │   ├── moreRoute.js
│   │   │   └── todoListRoute.js
│   │   └── routeHooks.js       vue-router的钩子
│   ├── setting.js              配置相关
│   ├── store                   vuex
│   │   ├── index.js            入口
│   │   └── modules             子集
│   │       ├── routerStore.js
│   │       └── userStore.js
│   ├── styles
│   │   ├── base.less           基础样式
│   │   ├── element-global.less ele的全局变化样式
│   │   ├── element-theme       引入的ele主题包,不要可以删掉
│   │   │   ├── config.json
│   │   │   └── theme
│   │   │       ├── fonts
│   │   │       │   ├── element-icons.ttf
│   │   │       │   └── element-icons.woff
│   │   │       └── index.css   
│   │   ├── iconfont.less   iconfont默认样式,前缀是el-ali-icon
│   │   ├── index.less      全局样式入口
│   │   ├── reset.less      移除默认样式
│   │   └── variables.less  全局css变量
│   ├── utils               工具类
│   │   ├── regular.js      正则相关
│   │   └── rules.js        表单校验规则
│   └── views               都是页面
│       ├── 404.vue
│       ├── Home
│       │   └── index.vue
│       ├── Login
│       │   └── index.vue
│       ├── MoreRoutes
│       │   ├── index.vue
│       │   └── level2
│       │       ├── index.vue
│       │       └── level3
│       │           ├── index1.vue
│       │           └── index2.vue
│       └── TodoList
│           └── index.vue
└── vue.config.js       配置相关

```

# 配置相关
## 1.store
所有分包store写入

/store/modules

文件夹下

index中引入了所有store,并且要求sotre中需要开始命名空间隔离

调用action的时候,需要加上文件名做前缀
```
exampleStore中的action:increment
使用时,调用为
store.dispatch('exampleStore/increment')
commit同理
```

## 2.css相关
使用less

/styles/index.less

为默认每个文件引入,配置在vue.config.js里

变量在variables.less里

## 3.router
下次记起来在写

## 4.utils
放一些工具类

# Vue实例默认挂载
.api => 指向api文件夹下的请求
.dayjs => 指向dayjs

