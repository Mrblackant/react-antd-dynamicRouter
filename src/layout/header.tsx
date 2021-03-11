import { Layout, Menu, Breadcrumb } from 'antd'
const { SubMenu } = Menu
const { Header, Content, Sider } = Layout

function HeaderCom() {
  return (
    <div className="Head">
      <Header className="header">
        <div className="logo" style={{ color: '#fff' }}>
          GAIA-DEMO
        </div>

        {/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu> */}
      </Header>
    </div>
  )
}

export default HeaderCom