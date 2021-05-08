# 基于 react+antd 生成的动态路由后台管理系统

> 不同角色的用户进入系统看到的菜单不同,本项目是个最基本的 demo,可基于此项目进行拓展;

### 本项目实现动态路由的思路

1. 先配置好项目的路由、菜单表(/router/config.ts),后续用此配置生成路由、左侧菜单;
2. 用户在/login 页进行登录,并拿到用户信息,例如权限(userauth)、username,用户信息存放到 localStorage;
3. /router/auth.config.ts 进行用户的权限配置,如用户权限 userauth 为 admin_auth 的才能看到一些页面;
4. 在入口文件 App.js 里将用户信息的权限、权限配置、路由表进行判断处理,最终生成当前用户能看到的左侧菜单,即动态路由;

### 依赖

1. react-loadable 路由懒加载,会将每个页面分割成独立的 js;
2. react-router-dom react 路由,此项目中特在 App.js 里将 url 的参数注入到了组件的 props 里,具体可看/queryParams 页面;
3. antd;

### 启动

    cd react-antd-dynamicRouter
    npm install
    npm run start
