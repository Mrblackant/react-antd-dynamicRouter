import { useEffect, useState } from 'react'
import CustomSelect, { selectOptionType } from './children/select'
import { Button, Row, Col } from 'antd'

let getCount = 0

function TsDemo() {
  const [getOpts, setOpts] = useState<selectOptionType[]>([])
  const [selectInitVal, setSelectInitVal] = useState<any>('')

  const renderOptsData = () => {
    getCount += 1
    let tempData: selectOptionType[] = []
    tempData.push({
      label: getCount,
      value: `第${getCount}名`,
    })
    setOpts(getOpts.concat(tempData))
  }

  useEffect(() => {
    if (getOpts && getOpts.length === 1) {
      setSelectInitVal(getOpts[0].value)
    }
  }, [getOpts])
  return (
    <Row>
      <Col span={8}>
        <CustomSelect defaultValue={selectInitVal} optsData={getOpts} />
      </Col>
      <Col span={8}>
        <Button onClick={renderOptsData}>增加选项</Button>
      </Col>
    </Row>
  )
}

export default TsDemo
