一、准备 
    node 安装配置
        配置镜像服务器：npm config set registry https://registry.npm.taobao.org 
    vue 安装：npm install --global vue-cli
    检测：vue -V 2.9.6


1: vue-cli脚手架初始化项目。
2.node + webpack + 淘宝镜像

3. vue -V 查看版本号

4. vue create [name] 通过脚手架创建项目 默认 vue2

二、项目框架 介绍:
    node_modules文件夹：项目依赖文件夹

    public文件夹：一般放置一些静态资源（图片），需要注意，放在public文件夹中的静态资源，webpack进行打包的时候，会原封不动打包到dist文件夹中。
    
    src文件夹（程序员源代码文件夹）：
        assets文件夹：一般也是放置的静态资源（一般放置多个组件共用的静态资源），需要注意，放置在assets文件夹里面的静态资源，在webpack打包的时候，webpack会把静态资源发当作一个模块，打包到JS文件夹里面。
        
        components文件夹：一般放置的是非路由组件（全局组件）。

        App.vue：唯一的根组件

        main.js：程序入口文件，也是整个程序中最先执行的文件
    
    babel.config.js：配置文件（babel相关）

    package-lock.json：缓存性的一个文件

    package.json文件：认为是项目的‘身份证’，记录项目叫做什么，项目当中有哪些依赖，项目怎么运行。

三、项目的其他配置
    1.项目运行起来的时候浏览器自动打开
        ①   package.json
            "scripts": {
                "serve": "vue-cli-service serve --open",    //  -- open      
                "build": "vue-cli-service build",
                "lint": "vue-cli-service lint"
             },
        ②   vue.config.js
            devServer: { host: 'localhost', port: 8080} 

    2.eslint校验功能关闭
    ---在根目录下创建一个vue.config.js文件
    //关闭 eslint
        lintOnSave:false

    3. src文件简写方法，配置别名
    jsconfig.json配置别名@提示【@代表的是src文件夹，这样将来文件过多，找的时候方便很多】
    {
        "compilerOptions": {
            "baseUrl": "./",
            "paths": {
                 "@/*": [
                   "src/*"        // 给src配置别名 @ 代表src文件夹，这样将来文件过多，找的时候方便很多
                ],
            "exclude":["node_modules","dist"],  // 表示在node_modules,dist文件夹下不能使用@代替src
        }
    }

四、项目的路由分析
    vue-router
    前端所谓路由：KV键值对。
    key：URL（地址栏中的路径）
    value：相应的路由组件
    注意： 项目上中下结构

    路由组件：
    Home首页 路由组件、Search路由组件、login登录路由、register注册路由
    非路由组件：
    Header[首页、搜索页]
    Footer [首页、搜索页]，但是在登陆页面、注册页面是没有的

五、完成非路由组件Header与Footer业务
    在项目中，不在以HTML+ CSS为主，主要搞业务、逻辑
    在开发项目的时候：
        1. 书写静态页面（HTML+CSS）
        2. 拆分组件
        3. 获取服务器的数据动态展示
        4. 完成相应的动态业务逻辑

    注意1：创建组件的时候，组件结构 + 组件的样式 + 图片资源

    注意2：咱们项目采用的less样式，浏览器不识别less样式，需要通过less、less-loader进行处理less，把less样式转换为css样式，浏览器才可以识别。

    注意3：如果想让组件识别less样式，需要在style标签的身上加上lang=less

    1. 使用组件的步骤（非路由组件）
    -创建或定义
    -引入
    -注册
    -使用

六、完成路由组建的搭建
    1.  路由组件应该有四个：Home、Search、Login、Register
        pages | views 文件夹 经常放置 路由组件

        配置 路由组件： 项目当中配置的路由一般放置在router文件夹当中

    2.  总结：
            路由组件与非路由组件的区别？
                1.路由组件一般放在pages|views 文件夹，非路由组件一般放在component文件夹中
                2.路由组件一般需要在router文件夹中进行注册（使用的即为组件的名字），非路由组件在使用的时候，一般都是以标签的形式使用
                3. 注册完路由，不管是路由组件还是非路由组件，身上都有$route和$router属性。

                $route: 一般获取路由信息【路径 、 query、params等等】
                $router: 一般进行编程式导航进行路由跳转【push|replace】
    3.  路由的跳转：
            路由跳转的两种方式：
                ① 声明式导航 router-linker，可以进行路由的跳转
                ② 编程式导航 push|replace，可以进行跳转
            声明式导航能做的，编程式导航都能做，编程式导航除了进行路由跳转，还可以做一些其他的业务逻辑

七、组件的显示或隐藏  v-if | v-show
    Footer组件：在Home、Search显示Footer组件
    Footer组件：在login、register时是隐藏的

    配置路由的时候，可以给路由配置路由元信息【meta】,路由需要配置对象，它的key不能乱写

    面试题：
    v-if 和 v-show的区别？
        v-show:通过样式display控制
        v-if：通过元素上树与下树进行操作
    面试题:开发项目的时候，优化手段有哪些?
        1:v-show|v-if
        2:按需加载

八、路由传参
    1. 路由跳转方式：
        ① 声明式导航 router-linker（要有 to 属性），可以进行路由的跳转
        ② 编程式导航 利用的是组件实例的$router.push|replace 方法，可以实现路由的跳转（在跳转之前可以书写自己的业务）
    2. 路由传参 ： 参数的几种写法：
        params参数：属于路径当中的一部分，需要注意：在配置路由的时候，需要占位。
        query参数：不属于路径当中的一部分，类似于ajax当中的queryString /home?k=v的形式。
    
    