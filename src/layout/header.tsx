import { Layout, Menu, Dropdown } from 'antd'
import { useEffect } from 'react'
const { Header } = Layout

function HeaderCom(props: any) {
  const signOut = () => {
    window.location.href = '/login'
  }
  const menu = (
    <Menu>
      {' '}
      <Menu.Item onClick={signOut}> 退出 </Menu.Item>
    </Menu>
  )
  // @ts-ignore
  const useInfo: any = JSON.parse(localStorage.getItem('userInfo'))

  return (
    <div className="Head">
      <Header className="header">
        <div className="logo-line" style={{ color: '#fff' }}>
          路由生成-DEMO
          <Dropdown overlay={menu} placement="bottomCenter" arrow>
            <span>{useInfo?.username || '用户名'}</span>
          </Dropdown>
        </div>
      </Header>
    </div>
  )
}

export default HeaderCom
