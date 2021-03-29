import { Layout, Menu } from 'antd'
import { withRouter } from 'react-router-dom'
import { navMeuns } from '../router/config'
import _ from 'lodash'
import { useEffect, useState } from 'react'
import { LayoutContext } from './index'

const { Sider } = Layout
const { SubMenu } = Menu
interface Iprops {
  history?: any
}
type Imeun = {
  key: string
}
console.log(navMeuns)
function SiderMeuns(props: Iprops) {
  const { history } = props
  const { location } = history
  const [openKeys, setOpenKeys]: any[] = useState([])

  useEffect(() => {
    initOpenKeys()
  }, [])

  // url跳转
  const subMeunClick = (meun: Imeun) => {
    history.push(meun.key)
  }

  // 单个菜单
  const subMenu = (meunObj: any) => {
    return (
      <Menu.Item key={meunObj.key} onClick={() => subMeunClick(meunObj)}>
        {meunObj.title}
      </Menu.Item>
    )
  }

  // 渲染菜单
  const showMeuns = (meunsArr: any[]) => {
    return meunsArr.map((i: any) => {
      if (i.hideMeun) return null
      return i.component && !i.children ? (
        subMenu(i)
      ) : (
        <SubMenu key={i.key} title={i.title}>
          {i.children &&
            i.children.map((k: any) =>
              k.children ? showMeuns([k]) : subMenu(k)
            )}
        </SubMenu>
      )
    })
  }

  // 初始化时展开url所在的菜单组
  const initOpenKeys = () => {
    let openKeysArr: any[] = []

    const findKey = (meunsArr: any[]) => {
      meunsArr.forEach((i) => {
        if (location.pathname === i.key)
          openKeysArr = i.fullPath && i.fullPath.split('/')
        if (i.children) findKey(i.children)
      })
    }
    findKey(navMeuns)
    openKeysArr = openKeysArr.filter((i) => i).map((i) => '/' + i)
    setOpenKeys(Array.isArray(openKeysArr) ? openKeysArr : [])
  }

  // 操控菜单展开/关闭
  const meunOpenChange = (openKeys: any) => {
    setOpenKeys(openKeys)
  }

  return (
    <LayoutContext.Consumer>
      {(value: any) => {
        const { menuToggle } = value

        return (
          <Sider
            width={200}
            className="site-layout-background"
            collapsed={menuToggle}
          >
            <Menu
              mode="inline"
              defaultSelectedKeys={[location.pathname]}
              openKeys={openKeys}
              style={{ height: '100%', borderRight: 0 }}
              onOpenChange={(e) => meunOpenChange(e)}
            >
              {showMeuns(navMeuns)}
            </Menu>
          </Sider>
        )
      }}
    </LayoutContext.Consumer>
  )
}

export default withRouter(SiderMeuns)
