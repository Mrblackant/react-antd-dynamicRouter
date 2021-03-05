import React from 'react'
import { Consumer } from './createContext'
import Son from './createContextChildSon'
class TypeDemo extends React.Component {
  render() {
    return (
      <div>
        <Consumer>
          {(value) => {
            console.log(value)
            return <Son />
          }}
        </Consumer>
      </div>
    )
  }
}
export default TypeDemo
