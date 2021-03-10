import { Layout, Breadcrumb } from 'antd'
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import { tArr } from '../router/config'
const { Content } = Layout

function ContentCom(props: any) {
  console.log(props)
  const { history } = props
  return (
    <div style={{ padding: '0 24px 24px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <Content
        className="site-layout-background"
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
        }}
      >
        <Router history={history}>
          <Switch>
            {tArr.map((item) => {
              return (
                <Route
                  key={item.key}
                  path={item.key}
                  exact={item.exact}
                  render={(props: any) => <item.component {...props} />}
                />
              )
            })}
            <Redirect to="/404" />
          </Switch>
        </Router>
      </Content>
    </div>
  )
}

export default ContentCom
