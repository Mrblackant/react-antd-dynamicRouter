import { Layout } from 'antd'
import './index.scss'
import HeaderCom from './header'
import SiderMeunsCom from './siderMeuns'
import ContentCom from './content'
import BreadcrumbCom from './breadcrumb'

function LayoutCustom(props: any) {
  const { history } = props
  return (
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
  )
}

export default LayoutCustom
