/*配置的权限列表，key即/router/config.ts路由表中的key，value即对应的身份
例如:当前登录用户身份权限为admin_auth，才能看到pages、extension下的页面
*/
const authConfig = {
  pages: 'admin_auth',
  extension:'admin_auth'
}

export default authConfig
