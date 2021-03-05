import { values } from 'lodash'
import React from 'react'
import Child from './createContextChild'
interface InitCon {
  name: string
  setNewVal: Function
}
let iVal: InitCon = {
  name: '',
  setNewVal: (val?: any): void => {},
}
export const { Provider, Consumer } = React.createContext(iVal)

class TypeDemo extends React.Component {
  state = {
    initVal: '初始zhi',
  }

  setNewVal = (val: any) => {
    this.setState({
      initVal: val,
    })
  }

  render() {
    const { initVal } = this.state
    return (
      <div>
        <Provider value={{ name: initVal, setNewVal: this.setNewVal }}>
          <span>这里是父组件的内容</span>
          <Child></Child>
        </Provider>
      </div>
    )
  }
}
export default TypeDemo
