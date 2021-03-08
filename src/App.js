import { Layout, Menu, Breadcrumb } from 'antd'
import HeaderCom from './layout/header'
import SiderMeunsCom from './layout/siderMeuns'
import ContentCom from './layout/content'
import './App.css'
const { SubMenu } = Menu
const { Header, Content, Sider } = Layout

function App() {
  return (
    <div className="App">
      <Layout style={{ height: '100%' }}>
        {/* 头部 */}
        <HeaderCom />
        <Layout>
          {/* 左侧菜单 */}
          <SiderMeunsCom />
          <Layout>
            {/* 内容 */}
            <ContentCom />
          </Layout>
        </Layout>
      </Layout>
    </div>
  )
}

export default App
