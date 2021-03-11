import { Breadcrumb } from 'antd'
import { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import { tArr } from '../router/config'

function BreadcrumbCom(props: any) {
  const [breaNameArr, setBreaNameArr]: any[] = useState([])
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
    let trgatItem = tArr.find((k) => k.key === pathName)
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
