import { Layout } from 'antd'
import { createContext, useState } from 'react'
import './index.scss'
import HeaderCom from './header'
import SiderMeunsCom from './siderMeuns'
import ContentCom from './content'
import BreadcrumbCom from './breadcrumb'
export const LayoutContext = createContext({})

function LayoutCustom(props: any) {
  const { history } = props
  const [menuToggle, setMenuToggle] = useState(false)
  return (
    <LayoutContext.Provider value={{ menuToggle, setMenuToggle }}>
      <div className="layout-content-wapper" style={{ height: '100%' }}>
        {/* 头部 */}
        <HeaderCom />
        {/* 左侧菜单 */}
        <Layout style={{ height: '100%' }}>
          <SiderMeunsCom history={history} />
          {/* 内容 */}
          <Layout style={{ padding: '0 24px 24px', overflow: 'auto' }}>
            <BreadcrumbCom />
            <ContentCom />
          </Layout>
        </Layout>
      </div>
    </LayoutContext.Provider>
  )
}

export default LayoutCustom
