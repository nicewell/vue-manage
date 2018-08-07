# vue-manager
> 后台管理

> Vue.js project



### [sass](https://www.sass.hk/docs/)
1. 安装：`cnpm i -D sass-loader style-loader css-loader node-sass`
2. 配置：build下的webpack.base.conf.js
```
{
    test: /\.scss$/,
    loaders: ["style-loader", "css-loader", "sass-loader"]
},
```
3. 应用
```
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
```
"bootstrap": "^3.3.4",
"jquery": "^3.3.1",
```
2. `cnpm install`
3. main.js 导入
```
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
```
4. 配置`webpack.base.conf.js`
```
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
```
<button type="button" class="btn btn-default">button</button>
```


### [Highcharts](https://api.hcharts.cn/highcharts)
1. 安装`vue-highcharts`，`highcharts`
```
npm install --save highcharts
npm install --save vue-highcharts
```
2. main.js页面引入Vue-hightcharts
```
import VueHighcharts from 'vue-highcharts'
Vue.use(VueHighcharts)
```
3. 在需要渲染的页面引入使用
```
// var HighCharts = require('highcharts')
import HighCharts from 'highcharts'
```
4. 配置数据呈现图表


### [vuex](https://vuex.vuejs.org/zh/installation.html)

### [axios](https://github.com/axios/axios)
1. 安装引入
```
npm install axios --save
// main.js
import axios from 'axios'
Vue.prototype.$axios = axios
```
2. 处理跨域
```
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


#### 注意
- clone下来之后`cnpm install`
```
at Error (native)
npminstall version: 2.2.1
npminstall args: C:\Program Files\nodejs\node.exe C:\Users\duang\AppData\Roaming\npm\node_modules\cnpm\node_modules\npminstall\bin\install.js --china --userconfig=C:\Users\duang\.cnpmrc --disturl=https://npm.taobao.org/mirrors/node --registry=https://registry.npm.taobao.org
```
- 解决方案，权限
```
点击开始-------右键命令提示符cmd--------以管理员身份运行--------cd进入到项目----执行npm install | cnpm install
```


### 项目参考
- https://github.com/lavyun/vue-demo-kugou

