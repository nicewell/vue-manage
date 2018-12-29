# vue-manager
> 后台管理

> Vue.js project



### [sass](https://www.sass.hk/docs/)
1. 安装：`cnpm i -D sass-loader style-loader css-loader node-sass`
2. 配置：build下的webpack.base.conf.js
```js
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
4. 关闭重启：`ctrl + c`,`ctrl + d`重新运行`npm run dev`


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

### [axios](https://github.com/axios/axios)
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

- let为解决for
- const定义常量，可以用来定义函数，函数的参数会变，但是函数基本不会变
- 字符串操作符
  - `str.repeat(10)`
  - `str.startWith('ossweb-img')`
  - `str.endWith('.shtml')`
  - `str.includes('a20180102lol')`
- 数组实例的 entries() ， keys() 和 values()
> ES6 提供三个新的方法 —— entries()，keys()和values() —— 用于遍历数组。它们都返回一个遍历器对象，可以用for...of循环进行遍历，唯一的区别是keys()是对键名的遍历、values()是对键值的遍历，entries()是对键值对的遍历

- 




#### TODO
- [ ] 登录注册模块
- [ ] vuex全局状态-loading-消息提示(新用户进入)
- [ ] vuex-处理页面头部加载状态条
- [ ] 首页漏洞修复提示状态在各个页面都需要获取
```
如userInfo父组件用到,别的子组件也用到,孙组件也用动
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
