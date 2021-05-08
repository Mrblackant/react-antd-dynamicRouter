import { Layout } from 'antd'
import { Route, Switch, Redirect } from 'react-router-dom'
import { createContext } from 'react'
import _ from 'lodash'
import queryString from 'query-string'
import { authFun, NotFound, Login } from './router/config'
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

  const stringifyUseInfo = localStorage.getItem('userInfo')
  let useInfo
  try {
    useInfo = stringifyUseInfo ? JSON.parse(stringifyUseInfo) : {}
  } catch (err) {
    console.log(err)
  }

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
  return (
    <div className="App-layout-wapper">
      {routersArrAuth.length && (
        <context.Provider value={{ navMeunsAuth, routersArrAuth }}>
          <Router>
            <Switch>
              {/* 此处可增加登录、个人中心等不带左侧菜单的页面*/}
              <Route path="/login" component={Login} />
              <Route path="/404" component={NotFound} />
              <Route component={NormalLayout} />
            </Switch>
          </Router>
        </context.Provider>
      )}
    </div>
  )
}

export default App
