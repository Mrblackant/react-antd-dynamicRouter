import React from 'react'
import ChildOne from './children/childOne'
import './children/onlyRun'

class MyReact extends React.Component {
  constructor(props) {
    console.log('constructor', props)
    super(props)
    this.state = {
      textNUm: 1,
    }
  }
  makeCli = () => {
    const { textNUm } = this.state
    this.setState({ textNUm: textNUm + 1 })
  }
  // componentWillMount() {
  //   console.log('componentWillMount')
  //   // this.setState({
  //   //   textNUm: 1,
  //   // })
  // }
  // shouldComponentUpdate() {
  //   console.log('----- ,componentWillMount')
  //   return true
  // }
  // componentWillUpdate(nextProps, nextState) {
  //   console.log('componentWillUpdate')
  //   console.log('nextProps', nextProps)
  //   console.log('nextState', nextState)
  // }

  // componentDidMount() {
  //   console.log('')
  //   console.log('...componentDidMount')
  //   console.log('')
  //   console.log('state.textNUm', this.state.textNUm)
  // }

  // componentDidUpdate(props) {
  //   console.log('')
  //   console.log('componentDidUpdate')
  // }
  componentDidCatch(err) {
    console.log('')
    console.log('componentDidCatch', err)
  }
  render() {
    const { textNUm } = this.state
    if (textNUm > 1) {
      throw new Error('soem err')
    } else {
      return (
        <div>
          <p>父组件state-textNUm: {textNUm}</p>
          <button onClick={this.makeCli}>增加</button>
          <ChildOne parentNum={textNUm} />
        </div>
      )
    }
  }
}

export default MyReact
