import { Layout, Menu } from 'antd'
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from '@ant-design/icons'

import { navMeuns } from '../router'
const { Sider } = Layout
const { SubMenu } = Menu

function siderMeuns(props: any) {
  const showMeuns = (meunsArr: any[]) => {
    console.log('')
    console.log(meunsArr)
    return meunsArr.map((i: any) => {
      return (
        <SubMenu key={i.key} title={i.title}>
          {i.children &&
            i.children.map((k: any) =>
              k.children ? (
                showMeuns([k])
              ) : (
                <Menu.Item key={k.key}>{k.title}</Menu.Item>
              )
            )}
        </SubMenu>
      )
    })
  }
  return (
    <Sider width={200} className="site-layout-background">
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%', borderRight: 0 }}
      >
        {showMeuns(navMeuns)}
      </Menu>
    </Sider>
  )
}

export default siderMeuns
