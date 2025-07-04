# vue-starter

Vue-starter is a powerful admin template built especially for front-end developers, it is user-friendly and straightforward, making it fast and simple to get started.

## Team members

产品：武则天  
设计：妲己  
前端：鲁班七号、后裔  
后端：东皇太一、亚瑟  
测试：蔡文姬

## Useful links

Vue-CLI Docs：[https://cli.vuejs.org/zh/config/](https://cli.vuejs.org/zh/config/)  
Product Docs：  
BackAPI Docs：

## How to use

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run serve

# build for production with minification
npm run build

# analysis your dist files
npm run analysis

# deploy your application
npm run deploy

```

## Tech stack

- Vue @ 2.6.10
- Vue-Router
- Vuex
- @Vue/cli
- ES6
- Axios
- Element-UI @ 2.13.1
- ECharts @ 5.0.1
- Sass
- MockJS
- Yarn
- video.js (视频直播插件)

## Notes

1. 借助 deploy.sh 实现一键部署。
2. 使用前，请先仔细阅读 Readme 文档并完善上面的必要信息。
3. 路由使用的是 hash 模式。
4. 如需修改 webpack 配置，请修改 vue.config.js 文件。
5. 为方便定制化组件库样式，选择 Sass 作为 CSS 预处理器。
6. assets/css/element-variables.scss 全局覆盖饿了么的样式变量。
7. 个别页面设计风格抄袭了[Vuexy](https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/landing/)。
8. 部署前，先修改 vue.config.js 里面的配置项 publicPath。
9. 默认开发模式下，接口请求被 mock.js 拦截，可以修改/src/mock/modules/下面的文件。
10. .env.* 文件中的环境变量控制是否使用 mock 数据。
11. mock.js暂时被绑定到vue原型上了
12. 调用设备摄像头需要先争取用户同意，然后才能获得摄像头列表
13. 在https协议或localhost下，才可以调用摄像头
14. CCTV-1直播链接不支持https协议，需要部署在http协议下