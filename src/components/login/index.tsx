import { Form, Input, Button, Checkbox } from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons'

import './indec.scss'

function Login(props: any) {
  const onFinish = (values: any) => {
    // todo-可从接口获取用户信息等
    if (values) {
      const { username } = values
      window.location.href = '/'
      let userInfo = {
        userauth: username === 'admin' ? 'admin_auth' : null,
        username: username,
      }
      // @ts-ignore
      localStorage.setItem('userInfo', JSON.stringify(userInfo))
    }
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }
  return (
    <section className="login-wapper">
      <div className="login-inner-bg">
        <div className="login-inner">
          <h3 className="title-welcome">欢迎登陆</h3>
          <Form
            className="form-inner"
            name="basic"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label=""
              name="username"
              rules={[{ required: true, message: '请输入用户名' }]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="admin/any"
              />
            </Form.Item>

            <Form.Item
              label=""
              name="password"
              rules={[{ required: true, message: '请输入密码' }]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                placeholder="any"
              />
            </Form.Item>

            <Form.Item>
              <Button type="primary" className="login-btn" htmlType="submit">
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </section>
  )
}

export default Login
