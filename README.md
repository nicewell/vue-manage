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




#### 备注
-  计算属性传值
-  用户组件，添加用户的数据怎么更新到用户管理页面去
```
vuex进行状态管理
```


- 完整项目描述
  - [vue+vuex+axios+echarts画一个动态更新的中国地图](https://github.com/mazeyqian/vue-china-map)
  - https://juejin.im/post/5b5938325188251ac771cc17?utm_source=gold_browser_extension



  - 接口
  - http://yz.lol.qq.com/v1/zh_cn/search/index.json
  - http://yz.lol.qq.com/v1/zh_cn/explore/index.json
  - http://yz.lol.qq.com/v1/zh_cn/featured-modules/index.json
  - http://yz.lol.qq.com/v1/zh_cn/champions/masteryi/index.json