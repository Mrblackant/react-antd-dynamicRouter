import React, { useEffect, useReducer, useState, useMemo } from 'react'
import CustomSelect, { selectOptionType } from './children/select'
import { Button, Row, Col, Space } from 'antd'
import Test from './children/test'
import './index.scss'

function TsDemo<T>({ initialCount = 0 }) {
  const [getOpts, setOpts] = useState<selectOptionType[]>([])
  const [selectInitVal, setSelectInitVal] = useState<any>('')
  const [cickCount, setClickCount] = useState<number>(0)

  // Array.from([...Array(100)].keys())
  // Array.from({length:100},(v,k)=>k)
  // Array(100).fill(undefined).map(v=>v)

  const [listArr, setList] = useState(
    Array(1000)
      .fill(undefined)
      .map((v, i) => i)
  )

  function countReducer(state: number, action: { type: string }) {
    console.log('...load')
    switch (action.type) {
      case 'add':
        return state + 1
      case 'minus':
        return state - 1
      case 'count':
        return getYourCount()
      default:
        return state
    }
  }

  const getYourCount = () => {
    let countOne = sigelCount(1)
    let countTwo = sigelCount(2)
    return countOne + countTwo
  }

  const sigelCount = (baseNum: number = 0) => {
    return baseNum + 3
  }
  // const addFunc = () => {
  //   let countNum = cickCount
  //   setClickCount(countNum + 1)
  // }

  const [getSubCount, dispatch] = useReducer(countReducer, initialCount)

  // const countClickTime = useMemo(() => {
  //   return `点击次数: ${cickCount}`
  // }, [cickCount])
  console.log(listArr)
  return (
    <div>
      <div>
        <p>Count: {getSubCount}</p>
        <Button
          onClick={() => {
            dispatch({ type: 'add' })
          }}
        >
          点击+1
        </Button>
        <Button
          onClick={() => {
            dispatch({ type: 'minus' })
          }}
        >
          点击-1
        </Button>

        <Button
          onClick={() => {
            setClickCount((cickCount) => cickCount + 1)
          }}
        >
          得到总数: {cickCount}
          异步可中端
        </Button>
        <Button
          onClick={() => {
            setList([...listArr, 1993])
          }}
        >
          尝试增加
        </Button>
      </div>
      {/*  */}
      <div
        style={{ height: '200px', overflow: 'auto', border: '1px solid red' }}
      >
        <input />
        <ul>
          {listArr.map((i) => (
            <li key={i}>第{i}行</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

class AppClass extends React.Component {
  state = {
    name: 'liki',
  }
  render() {
    const { name } = this.state
    return (
      <>
        <p>测试人员名称:{name}</p>
        <button
          onClick={() =>
            this.setState({
              name: name.slice(0, 4) + ' : ' + new Date().getTime(),
            })
          }
        >
          change
        </button>
        <h1>test</h1>
        <Test />
      </>
    )
  }
}

export default TsDemo
