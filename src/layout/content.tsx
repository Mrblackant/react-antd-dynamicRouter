import { Layout } from 'antd'
import { RoutersCustom } from '../App'
const { Content } = Layout

function ContentCom() {
  return (
    <div>
      <Content
        className="site-layout-background"
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
        }}
      >
        <RoutersCustom />
      </Content>
    </div>
  )
}

export default ContentCom
