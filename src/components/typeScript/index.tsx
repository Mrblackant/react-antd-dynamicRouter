import { useEffect, useReducer, useState, useMemo } from 'react'
import CustomSelect, { selectOptionType } from './children/select'
import { Button, Row, Col, Space } from 'antd'
import './index.scss'
const log = (n?: any) => {
  console.log('')
  console.log(n)
}
let getCount = 0

// function createArray<T>(length: number, value: T): Array<T> {
//   let result: T[] = []
//   for (let i = 0; i < length; i++) {
//     result[i] = value
//   }
//   return result
// }
type ActionT = {
  type: string
}

function TsDemo<T>() {
  const [getOpts, setOpts] = useState<selectOptionType[]>([])
  const [selectInitVal, setSelectInitVal] = useState<any>('')
  const [cickCount, setClickCount] = useState<number>(0)

  const addFunc = () => {
    let countNum = cickCount
    setClickCount(countNum + 1)
  }

  const [getSubCount, dispatch] = useReducer(
    (state: number, action: {type:string}) => {
      const { type } = action
      console.log('...进入reducer')
      addFunc()
      switch (type) {
        case 'add':
          console.log('add...')
          return (state += 1)
        case 'sub':
          console.log('...sub...')
          return state - =1
        default:
          console.log('...defa..ult..')
          return state
      }
    },
    0
  )

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

  type StudentsInfo = Array<{ id: number; name: string }>
  // test-one
  const testOneFn = (len: number, value: string): StudentsInfo => {
    let result: StudentsInfo = []
    result = Array.from({ length: len }, (v, k) => k).map((i) => {
      return { id: i, name: `${value + i}` }
    })
    return result
  }
  // test-ont-T
  const testOneFnT = (len: number, value: any): Array<T> => {
    let result: T[] = []
    for (let i = 0; i < len; i++) {
      result[i] = value
    }
    return result
  }
  // reduce
  const tempA = () => {
    let arr = [12, 9, 90, 11, 33]
    let n = 0
    let result = arr.reduce((sum, cur, index, all) => {
      if (n < 2) {
        console.log('sum', sum) //上一次循环的和,没有第二个参数默认数组第一项
        console.log('cur', cur) //当前数组值
        console.log('index', index) //index,没二参从1开始，否则从0
        console.log('all', all) //整个数组项
        console.log('')
      }
      n += 1
      return sum + cur
    }, 0)
    log(result)
  }
  // tempA()
  useEffect(() => {
    // let tOneResult = testOneFn(3, '学号')
    // log(tOneResult)
    // let resultT = testOneFnT(3, 'x')
    // log(resultT)
    //
  }, [])

  const countClickTime = useMemo(() => {
    return `点击次数: ${cickCount}`
  }, [cickCount])
  return (
    <div>
      <Row>
        <Col span={8}>
          <CustomSelect defaultValue={selectInitVal} optsData={getOpts} />
        </Col>
        <Col span={8}>
          <Button onClick={renderOptsData}>增加选项</Button>
        </Col>
      </Row>
      <Row className="has_margin">
        <Col span={8}>人数统计: {getSubCount}</Col>
        <Col span={8}>
          <Space>
            <Button
              type="primary"
              onClick={() => {
                dispatch({ type: 'add' })
              }}
            >
              增加
            </Button>
            <Button
              onClick={() => {
                dispatch({ type: 'sub' })
              }}
            >
              减少
            </Button>
            <span>{countClickTime}</span>
          </Space>
        </Col>
      </Row>
    </div>
  )
}

export default TsDemo
