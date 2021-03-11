import { Layout } from 'antd'
import HeaderCom from './layout/header'
import SiderMeunsCom from './layout/siderMeuns'
import { createHashHistory } from 'history'
import { Router } from 'react-router-dom'

import ContentCom from './layout/content'
import './App.scss'
export const history = createHashHistory()
function App() {
  return (
    <div className="App-layout-wapper">
      <Router history={history}>
        <Layout style={{ height: '100%' }}>
          {/* 头部 */}
          <HeaderCom />
          <Layout>
            {/* 左侧菜单 */}
            <SiderMeunsCom history={history} />
            <Layout>
              <ContentCom history={history} />
            </Layout>
          </Layout>
        </Layout>
      </Router>
    </div>
  )
}

export default App
