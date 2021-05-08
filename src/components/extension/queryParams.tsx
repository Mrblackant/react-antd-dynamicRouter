import { Button } from 'antd'
import { withRouter } from 'react-router-dom'

function QueryParams(props: any) {
  const { history } = props
  const {
    location: { pathname },
  } = history

  const addParams = () => {
    history.push(`${pathname}?name=姓名叫小明`)
  }
  return (
    <div>
      <p>拓展页面</p>
      <p>链接参数: {props.name ? `${props.name}` : '-'}</p>
      <Button onClick={addParams}>链接增加个name参数</Button>
    </div>
  )
}

export default withRouter(QueryParams)
