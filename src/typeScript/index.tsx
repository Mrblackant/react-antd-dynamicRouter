import React from 'react'
import { Button } from 'antd'
import { isNil, isNumber } from 'lodash'
import './demoFirst'
interface Iprops {
  onChange?: () => void
}

enum Direction {
  AAA,
  NORTH = '我是北方',
  SOUTH = '南方是我',
}
let dir: Direction = Direction.AAA
// console.log(dir)

class TypeDemo extends React.Component<Iprops> {
  numAdd = () => {
    const currentNum = (this.state.currentNum += 1)
    this.setState({
      currentNum,
    })
  }
  changeVal = (num: number = 0) => {
    return `目前的数量为${num || num === 0 ? num : '-空-'}`
  }
  arrVa = ([first, second]: [any?, any?]) => {
    console.log(first, second)
  }

  state = {
    currentNum: 0,
  }
  render() {
    const { currentNum } = this.state
    return (
      <div>
        <Button type="primary" onClick={this.numAdd}>
          增加+
        </Button>
        <p>{this.changeVal(currentNum)}</p>
        <p></p>
        <Button onClick={() => this.arrVa([1, 1])}>数组变量声明</Button>
      </div>
    )
  }
}
export default TypeDemo
