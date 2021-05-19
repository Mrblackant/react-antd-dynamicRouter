import { Layout, Menu, Dropdown } from 'antd'
import { useEffect, useState } from 'react'

import {
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons'
import { LayoutContext } from './index'

const { Header } = Layout

function HeaderCom(props: any) {
  const [useInfo, setUseInfo] = useState({ username: '' })
  const signOut = () => {
    window.location.href = '/login'
  }
  const menu = (
    <Menu>
      <Menu.ItemGroup title="用户设置">
        <Menu.Divider />
        <Menu.Item onClick={signOut}>
          {' '}
          <LogoutOutlined /> 退出登录
        </Menu.Item>
      </Menu.ItemGroup>
    </Menu>
  )
  useEffect(() => {
    try {
      // @ts-ignore
      setUseInfo(JSON.parse(localStorage.getItem('userInfo')) || {})
    } catch (err) {
      console.log(err)
    }
  }, [])

  return (
    <div className="Head">
      <LayoutContext.Consumer>
        {(value: any) => {
          const { menuToggle, setMenuToggle } = value
          return (
            <Header className="header">
              <div className="logo-line" style={{ color: '#fff' }}>
                <p>
                  <span>GAIA-DEMO</span>
                  <span className="top-toggle-icon">
                    {menuToggle ? (
                      <MenuUnfoldOutlined
                        onClick={() => {
                          setMenuToggle(!menuToggle)
                        }}
                      />
                    ) : (
                      <MenuFoldOutlined
                        onClick={() => {
                          setMenuToggle(!menuToggle)
                        }}
                      />
                    )}
                  </span>
                </p>
                <Dropdown overlay={menu} overlayStyle={{ width: '10rem' }}>
                  <span className="meun-top">
                    {useInfo?.username || '用户名'}
                  </span>
                </Dropdown>
              </div>
            </Header>
          )
        }}
      </LayoutContext.Consumer>
    </div>
  )
}

export default HeaderCom
