import { Layout } from 'antd'
import { Route, Switch, Redirect } from 'react-router-dom'
import queryString from 'query-string'
import { tArr } from './router/config'
import LayoutCustom from './layout'
import { createHashHistory } from 'history'
import { Router } from 'react-router-dom'

import './App.scss'
export const history = createHashHistory()
export const RoutersCustom = () => {
  return (
    <Switch>
      {tArr.map((item) => {
        return (
          <Route
            key={item.key}
            path={item.key}
            exact={item.exact}
            render={(props) => {
              let searchParmas = queryString.parse(props.location.search)
              return <item.component {...props} {...searchParmas} />
            }}
          />
        )
      })}
      <Redirect to="/404" />
    </Switch>
  )
}

const NormalLayout = () => {
  return (
    <Layout style={{ height: '100%' }}>
      <LayoutCustom history={history} />
    </Layout>
  )
}

function App(props) {
  const pathHash = window.location.hash
  return (
    <div className="App-layout-wapper">
      <Router history={history}>
        {/* {pathHash.includes('/login') ? RoutersCustom() : NormalLayout()} */}
        {NormalLayout()}
      </Router>
    </div>
  )
}

export default App
