import { Layout } from 'antd'
import { Route, Switch, Redirect } from 'react-router-dom'
import BreadcrumbCom from './breadcrumb'
import { tArr } from '../router/config'
import queryString from 'query-string'

const { Content } = Layout

function ContentCom() {
  return (
    <div style={{ padding: '0 24px 24px' }}>
      <BreadcrumbCom />
      <Content
        className="site-layout-background"
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
        }}
      >
        <Switch>
          {tArr.map((item) => {
            return (
              <Route
                key={item.key}
                path={item.key}
                exact={item.exact}
                render={(props: any) => {
                  let searchParmas = queryString.parse(props.location.search)
                  return <item.component {...props} {...searchParmas} />
                }}
              />
            )
          })}
          <Redirect to="/404" />
        </Switch>
      </Content>
    </div>
  )
}

export default ContentCom
