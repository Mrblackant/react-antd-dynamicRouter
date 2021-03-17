import { Layout } from 'antd'
import { Route, Switch, Redirect } from 'react-router-dom'
import { createContext } from 'react'
import _ from 'lodash'
import queryString from 'query-string'
import { authFun, NotFound } from './router/config'
import LayoutCustom from './layout'
import { BrowserRouter as Router } from 'react-router-dom'
import authConfig from './router/auth.config'
import './App.scss'
import { useEffect, useState } from 'react'

export const context = createContext(null)

export const RoutersCustom = (arrs) => {
  return (
    <Switch>
      {arrs.map((item) => {
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
      <Route path="/404" component={NotFound} />
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
  const [navMeunsAuth, setNavMeunsConstom] = useState([])
  const [routersArrAuth, setRoutersArrConstom] = useState([])

  const useInfo = JSON.parse(localStorage.getItem('userInfo'))
  const pathname = window.location.pathname

  useEffect(() => {
    getAuthMeuns()
  }, [])

  const getAuthMeuns = () => {
    let { userauth } = useInfo
    userauth = userauth ? userauth.split(',') : [userauth]
    let noShowRoutes = Object.keys(authConfig).map((i) => {
      if (userauth.includes(authConfig[i])) {
        return null
      }
      return `/${i}`
    })
    noShowRoutes = noShowRoutes.filter((i) => i)
    // 根据权限取得路由表
    const { routersArr, navMeuns } = authFun(noShowRoutes)
    setNavMeunsConstom(navMeuns)
    setRoutersArrConstom(routersArr)
  }
  console.log(pathname)
  console.log(_.includes(['/login', '/404'], pathname))
  return (
    <div className="App-layout-wapper">
      {routersArrAuth.length && (
        <context.Provider value={{ navMeunsAuth, routersArrAuth }}>
          <Router>
            {_.includes(['/login'], pathname)
              ? RoutersCustom(routersArrAuth)
              : NormalLayout()}
          </Router>
        </context.Provider>
      )}
    </div>
  )
}

export default App
