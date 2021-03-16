import { Layout } from 'antd'
import { Route, Switch, Redirect } from 'react-router-dom'
import queryString from 'query-string'
import { tArr } from './router/config'
import LayoutCustom from './layout'
import { BrowserRouter as Router } from 'react-router-dom'
import authConfig from './router/auth.config'
import './App.scss'

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
      <LayoutCustom />
    </Layout>
  )
}

function App(props) {
  const pathname = window.location.pathname
  return (
    <div className="App-layout-wapper">
      <Router>
        {pathname.includes('/login') ? RoutersCustom() : NormalLayout()}
      </Router>
    </div>
  )
}

export default App
