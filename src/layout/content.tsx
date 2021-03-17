import { Layout } from 'antd'
import { useContext } from 'react'
import { context, RoutersCustom } from '../App'

const { Content } = Layout

function ContentCom() {
  // @ts-ignore
  const { routersArrAuth = [] as any[] } = useContext(context)
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
        {RoutersCustom(routersArrAuth)}
      </Content>
    </div>
  )
}

export default ContentCom
