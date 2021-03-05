import React from 'react'
import { Button } from 'antd'
import { Consumer } from './createContext'

class TypeDemo extends React.Component {
  render() {
    return (
      <div>
        <Consumer>
          {(value) => (
            <span>
              孙子组件 {value.name || ''}
              <Button
                onClick={() => {
                  console.log(this.props)
                  value.setNewVal('newVal')
                }}
              >
                改变value
              </Button>
            </span>
          )}
        </Consumer>
      </div>
    )
  }
}
export default TypeDemo
