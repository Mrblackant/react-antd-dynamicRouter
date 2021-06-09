import './index.scss'
import { Button, Divider, Row, Col } from 'antd'

const defaultInforms = [
  {
    icon: '',
    info: '营业执照扫描件',
  },
  {
    icon: '',
    info: '资质证书扫描件',
  },
  {
    icon: '',
    info: '开户银行许可',
  },
]
function SettlemenIndex() {
  const renderInfos = () => {
    return defaultInforms.map((i) => {
      let { icon, info } = i
      return (
        <Col key={info} className="info-box">
          <span className="icon-box">{icon}</span>
          <p className="info-text">{info}</p>
        </Col>
      )
    })
  }

  return (
    <div className="settlemen-wapper">
      <div className="settlemen-inner">
        <p className="settlemen-title">轻松入驻，成为合作伙伴</p>
        <Button type="primary" className="settlemen-btn">
          立即入驻
        </Button>
        <Divider className="center-div">建议您提前准备以下资料</Divider>
        <Row gutter={106} justify="center">
          {renderInfos()}
        </Row>
      </div>
    </div>
  )
}
export default SettlemenIndex
