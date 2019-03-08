# vue-manager
> 后台管理

> Vue.js project

### eslint规则配置
- `.exlintrc.js`
```js
// rules
'space-before-function-paren':0
```

### webpack配置
- `webpack.base.conf.js`
```js
// resolve
// 别名配置
resolve: {
  extensions: ['.js', '.vue', '.json'],
  alias: {
    'vue$': 'vue/dist/vue.esm.js',
    '@': resolve('src'),
    'assets': resolve('src/assets'),
    'components': resolve('src/components')
  }
},
```

### [sass](https://www.sass.hk/docs/)
1. 安装：`cnpm i -D sass-loader style-loader css-loader node-sass`
2. 配置：build下的webpack.base.conf.js
```js
// 之后某个vue-cli版本之后可以不用手动配了
{
  test: /\.scss$/,
  loaders: ["style-loader", "css-loader", "sass-loader"]
},
```
3. 应用
```html
<style scoped="" lang="scss">
.txt{
  .info{
    color: #f00;
  }
}
</style>
```
4. 重启：`ctrl + c`,重新运行`npm run dev`


### [bootstarp](https://v3.bootcss.com/components/)
1. 直接配置`package.json`
```js
"bootstrap": "^3.3.4",
"jquery": "^3.3.1",
```
2. `cnpm install`
3. main.js 导入
```js
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
```
4. 配置`webpack.base.conf.js`
```js
const webpack = require('webpack')
plugins: [
  new webpack.ProvidePlugin({
    "$": "jquery",
    "jQuery": "jquery",
    "window.jQuery": "jquery"
  })
],
```
5. 测试效果
```html
<button type="button" class="btn btn-default">button</button>
```


### [Highcharts](https://api.hcharts.cn/highcharts)
1. 安装`vue-highcharts`，`highcharts`
```js
npm install --save highcharts
npm install --save vue-highcharts
```
2. main.js页面引入Vue-hightcharts
```js
import VueHighcharts from 'vue-highcharts'
Vue.use(VueHighcharts)
```
3. 在需要渲染的页面引入使用
```js
// var HighCharts = require('highcharts')
import HighCharts from 'highcharts'
```
4. 配置数据呈现图表


### [vuex](https://vuex.vuejs.org/zh/installation.html)
- 全局状态管理
- 登录token,用户信息,一些全局个人偏好设置
- 除此以外vues的应用
  - [电商网站项目总结：Vuex 带来全新的编程体验](https://juejin.im/post/5c3c911ce51d455231347a7a?utm_source=gold_browser_extension)
  - [我为什么要用vuex](https://mp.weixin.qq.com/s/rnNFgGKFBajxiB0MyqHJog)

### [axios](https://github.com/axios/axios)
#### 文档注意
- Axios发送请求时params和data的区别
  - params是添加到url的请求字符串中的，用于get请求
  - data是添加到请求体（body）中的，用于post请求
1. 安装引入
```js
npm install axios --save
// main.js
import axios from 'axios'
Vue.prototype.$axios = axios
```
2. 处理跨域
```js
// config/index.js
proxyTable: {
  '/api': {
    target: 'http://api.tgatv.qq.com/app/match/',
    changeOrigin: true,
    pathRewrite: {
      '^/api': ''
    }
  }
}
```
#### [封装通用需求-axios](https://juejin.im/post/5c6e71acf265da2dda694b27?utm_source=gold_browser_extension)
```js
import axios from 'axios'

// The http header that carries the xsrf token value { X-XSRF-TOKEN: '' }
const csrfConfig = {
  'X-XSRF-TOKEN': ''
}
// Build uniform request
async function buildRequest(method, url, params, options) {
  let param = {}
  let config = {}
  if (method === 'get') {
    param = { params, ...options }
  } else {
    param = JSON.stringify(params)
    config = {
      headers: {
        ...csrfConfig
      }
    }
    config = Object.assign({}, config, options)
  }
  return axios[method](url, param, config)
}

export const get = (url, params = {}, options) => buildRequest('get', url, params, options)
export const post = (url, params = {}, options) => buildRequest('post', url, params, options)
// 这样的话，我们对外就暴露出 get 和 post 的方法，其他请求类似，在此只用 get 和 post 作为示例，入参分别是 API地址，数据 和 扩展配置。
```

### MongoDB
- [Mongoose基础入门](http://www.cnblogs.com/xiaohuochai/p/7215067.html?utm_source=itdadao&utm_medium=referral)

### [Mockjs](http://mockjs.com)
1. 安装
```bash
npm install mockjs --save-dev
```
2. 引入配置
```js
// src下新建mock.js并引用与配置数据
import Mock from 'mockjs'
// 获取 mock.Random 对象
const Random = Mock.Random;
// mock一组数据
const produceNewsData = function() {
    let articles = [];
    for (let i = 0; i < 5; i++) {
        let newArticleObject = {
            title: Random.csentence(5, 30), //  Random.csentence( min, max )
            thumbnail_pic_s: Random.dataImage('300x250', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
            author_name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
            date: Random.date() + ' ' + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
        }
        articles.push(newArticleObject)
    }

    return {
        articles: articles
    }
}

// Mock.mock( url, post/get , 返回的数据)；
Mock.mock('news', 'get', produceNewsData);
```
3. 发起请求响应数据[配置路径需要匹配如：`news`]
```js
mounted(){
  this.$axios.get('news', {
      params: {}
    })
    .then(res => {
      console.log(res);
    })
    .catch(error => {
      console.log(error);
    });
}
```
4. 

### 重构优化
- 拦截器封装
  - [博文参见](https://juejin.im/post/5b55c118f265da0f6f1aa354)
  - [博文参见](https://juejin.im/post/5bfb63e86fb9a049c30ae96d)
- API 提取
- 接口管理
#### 重构进行时形成博文
- [最佳实践](https://github.com/wangyupo/vue-vuex-router)
- 通过博文记录
  - 找出不足，当个方面或者多个方面
  - 给解决方案，思考过程，考虑哪些东西，即设计理念
- 记录中再思考(输出过程中)
- 来回优化
- 进而进阶



### [localStorage](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/localStorage)
- 存取字符串数组




#### 备注
-  计算属性传值
-  用户组件，添加用户的数据怎么更新到用户管理页面去
```
vuex进行状态管理
```
-  动态组件 & 异步组件
-  vue.set(object,prop,value)
-  $nextTick
-  搜索-[条件帅选](https://cn.vuejs.org/v2/guide/filters.html#ad)
-  过滤器


#### 注意
- clone下来之后`cnpm install`
```bash
at Error (native)
npminstall version: 2.2.1
npminstall args: C:\Program Files\nodejs\node.exe C:\Users\duang\AppData\Roaming\npm\node_modules\cnpm\node_modules\npminstall\bin\install.js --china --userconfig=C:\Users\duang\.cnpmrc --disturl=https://npm.taobao.org/mirrors/node --registry=https://registry.npm.taobao.org
```
- 解决方案，权限
```bash
点击开始-------右键命令提示符cmd--------以管理员身份运行--------cd进入到项目----执行npm install | cnpm install
```


### 项目参考
- https://github.com/lavyun/vue-demo-kugou



### es6
- 模块
  - 方式1
  ```js
  // module.js
  // 导出
  export default getPlayerGloryRank
  // 引入
  import getPlayerGloryRank from '@/api/getPlayerGloryRank'
  ```
  - 方式2
  ```js
  // module.js
  // 导出
  export getPlayerGloryRank1
  export getPlayerGloryRank2
  // 引入
  import {getPlayerGloryRank1, getPlayerGloryRank2} from '@/api/getPlayerGloryRank'
  ```
- 箭头函数
```js
let show = (str) => {return 'str:'+str;}
/**
 * 一个参数括号可以省略
 * 不要花括号即为 return 值
 */
let show = str => 'str:'+str;
// 高阶函数，箭头>=2
function fn(m){
  retunr function(n){
    return m + n;
  }
}
let fn = (m) => {
  return (n) => {
    return m + n;
  }
}
let fn = m => n => m + n;
// 返回值为json时注意
const r = (r)=>{
  return{
    r:r,
    l:2*r*3.14,
    s:3.14*r*2
  }
}
console.log(r(5));
// 不加 return 时候，{} 要加圆括号()
const r = (r)=>({
  r:r,
  l:2*r*3.14,
  s:3.14*r*2
})
console.log(r(5));
```

- 字符串操作符
  - `str.repeat(10)`
  - `str.startWith('ossweb-img')`
  - `str.endWith('.shtml')`
  - `str.includes('a20180102lol')`
- 数组实例的 entries() ， keys() 和 values()
> ES6 提供三个新的方法 —— entries()，keys()和values() —— 用于遍历数组。它们都返回一个遍历器对象，可以用for...of循环进行遍历，唯一的区别是keys()是对键名的遍历、values()是对键值的遍历，entries()是对键值对的遍历

- 字符串新增
```js
// 补零的时候
new Date().getDate().toString().padStart(2, '0')
```


#### TODO
- [ ] 登录注册模块
- [ ] vuex全局状态-loading-消息提示(新用户进入)
- [ ] vuex-处理页面头部加载状态条
- [ ] 首页漏洞修复提示状态在各个页面都需要获取
```js
// 如userInfo父组件用到,别的子组件也用到,孙组件也用动
// prpos-传参-但是项目庞大的时候难以维护
// 复杂的数据共享情况,即用vuex较易维护
```
- [ ] 每一个请求都是要带 token 来验证权限的
- [ ] [按需更换UI](http://element.eleme.io)
- [ ] [数据模拟Mockjs](http://mockjs.com)
- [ ] 大搜车[EasyMock](https://easy-mock.com/docs)
> Easy Mock 引入了 Mock.js
- [ ] 处理分页
- [ ] [打包webapp](http://mint-ui.github.io/#!/zh-cn)
- [ ] SSR-服务端渲染，SEO优化
  - express
  - vue-server-renderer
  - nuxt




#### vue源码理解
- [Vue.js 技术揭秘](https://ustbhuangyi.github.io/vue-analysis/)
- [Vue技术内幕](http://hcysun.me/vue-design/)
- MVVM框架基本原理
  - 数据代理
  - 模板解析
  - 数据绑定


#### 基础知识补充
- `--save-dev`和`--save`
> `--save-dev`表示添加一个“开发依赖”,`--save`表示添加运行依赖
- 
- arr
```js
// 将伪数组转换成真数组
var lis = document.querySelectorAll('li');
// 伪数组,本质是对象,但是拥有length和通过下标可以索引到的特性
console.log(lis instanceof Array);// false
var arr = [].slice.call(lis);
console.log(arr instanceof Array);// true
```
- vue核心用到[`Object.defineProperty(obj, prop, descriptor)`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)
```
// Object.defineProperty(obj, prop, descriptor)
// 不支持IE8，所以vue也无法支持IE8
```
- [Object.keys(obj)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)
```
// 得到对象自身可枚举属性组成的数组
```
- [DocumentFragment](https://developer.mozilla.org/zh-CN/docs/Web/API/DocumentFragment)
> 文档碎片(高效批量更新多个节点)
- 数据代理
1. 数据代理：通过一个对象代理另一个对象中属性的操作(读/写)
2. vue数据代理；通过vm对象来代理data对象中所有属性的操作
3. 好处：更方便操作data中的数据
4. 基本实现流程
  - 通过Object.defineProperty()给vm添加与data对象的属性对应的属性描述符
  - 所有添加的属性都包含getter/setter
  - getter/setter内部去操作data中对应的属性数据

### 踩坑-最佳实践
- [vue 开发中遇到的问题汇总-踩坑指南](https://segmentfault.com/a/1190000010794839)
```
1. props单向绑定
vue中的props是单向绑定的，父组件的属性变化时会传递给子组件，子组件内部不应改变props的值，否则控制台会给出警告。
但如果props的类型为数组或者对象时，在子组件内部改变props的值控制台不会警告。因为数组或对象是地址引用，vue不会检测到props发生改变。所以有的情况需要在子组件内部改变父组件的值，可以将属性定义为数组或者对象类型传入。
但官方不建议在子组件内改变父组件的值，因为这违反了vue中props单向绑定的思想。

2. 给对象赋值
由1可以引申出，地址引用类型的数据，例如对象obj ={a:1},如果想要修改obj中的a属性，通过obj.a = 2这样赋值，页面不会更新，需使用vue.set方法更改才会起作用， Vue.set(this,obj,a,2);
同样，如果要给obj增加一个新属性，如果该属性未在data中声明，页面也不会刷新。也就是vue文档中声明的“Vue 不能检测到对象属性的添加或删除”，同样需要使用vue.set方法进行赋值才好使。

3. 深拷贝数组或对象
对象或数组的简单赋值，修改新值也会改变原值。这时我们需要获取原值的深拷贝对象。
对于对象，可以通过newObj = JSON.parse(JSON.stringfy(obj))实现。
对于数组，可以通过 newArr = […arr]或者newArr = arr.slice(0)来实现。

6. 引用图片
图片引用问题。直接把本地图片地址放在src里没问题。但如果把地址提取出来写在data里或者通过method动态给src赋值则引用不到。
因为放在template模板里会被webpack打包所以可以，而放在data或者动态赋值，图片路径只是一个字符串webpack不会处理所以引用不到。
解决办法：通过import或者required引入。import src from ‘../../img.png’或者data:{img:require(‘../../img.png’)}

7. 父组件传值
在子组件使用父组件传入的值时，最好复制出一份props的值，通过data或者computed进行赋值。
data赋值与computed赋值的区别：
data赋值：data:{return {aaa: this.aaa}如果是在data中进行赋值，当父组件的aaa值发生改变时，不会在重新赋给子组件中的aaa。
computed赋值：如果想让子组件跟着父组件修改，需要将赋值操作写在computed中。computed:{aaa(){return this.aaa}

8. 对象数组深度监听
后端传过来的数组是一个数组对象，页面中绑定对象中某一具体的属性，当该值变化时调用某个函数，自然想到就是watch方法。但如何watch数组对象中某一个具体的属性，显然不可能一个个属性写watch。
解决办法：
1.watch整个对象，设置deep为true，当该对象发生改变时，调用处理函数。
2.将页面中绑定的属性写在computed函数中，watch这个computed中的函数，当对象值改变时会进入computed函数中，进而进入watch函数中，再调用处理函数。
```


#### 待处理
- [ ] 面向数据
- [ ] 目录结构定义components和page
- [ ] 组件只接受数据传入而不做逻辑处理，以便更多次复用
- [ ] 头部分别引入而不是引入到layout
- [ ] Koa应用生成器`koa-generator`
```js
// 配置子路由(层级路由)
// user.js
const router = require('koa-router')()
router.get('/',(ctx)=>{
  ctx.body = 'user 首页'
})
router.get('/edit',(ctx)=>{
  ctx.body = 'user edit 页'
})
module.exports = router

// app.js
const user = require('user.js')
router.use('/user', user.routes()) // 里面的即为'/user'开头 ['/user'=>'/user'+'/'=>'user 首页','/user/edit'=>'/user'+'/edit'=>'user edit 页']
```