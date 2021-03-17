import { Breadcrumb } from 'antd'
import { useEffect, useState, useContext } from 'react'
import { withRouter } from 'react-router-dom'
import { context } from '../App'

function BreadcrumbCom(props: any) {
  const [breaNameArr, setBreaNameArr]: any[] = useState([])
  // @ts-ignore
  const { routersArrAuth = [] as any[] } = useContext(context)

  const {
    history: { location },
  } = props

  useEffect(() => {
    initBread(location.pathname)
    // 监听路由
    props.history.listen((route: any) => {
      initBread(route.pathname)
    })
  }, [])

  const initBread = (pathName: string) => {
    // 设置面包屑
    console.log(routersArrAuth)
    let trgatItem = routersArrAuth.find((k: any) => k.key === pathName)
    trgatItem &&
      trgatItem.fullTitle &&
      setBreaNameArr(trgatItem.fullTitle.split('/'))
  }

  return (
    <div className="bread-wapper">
      <Breadcrumb className="top-meun">
        {breaNameArr.map((i: string) => (
          <Breadcrumb.Item key={i}>{i}</Breadcrumb.Item>
        ))}
      </Breadcrumb>
    </div>
  )
}

export default withRouter(BreadcrumbCom)
