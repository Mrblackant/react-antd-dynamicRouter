import React from 'react'

class ChildOne extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      times: 1,
    }
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('')
    console.group('getDerivedStateFromProps')
    console.log('prevState', prevState)
    console.log('nextProps', nextProps)

    const { parentNum } = nextProps
    // if (parentNum !== prevState.parentNum) {
    //   // 当传入的type发生变化时，更新state
    //   return { parentNum }
    // }

    return { fakeTimes: parentNum * 10 } //否则，对state不进行处理
  }
  componentDidMount() {
    console.log('')
    console.group('componentDidMount')
    console.group(this.state.fakeTimes)
  }
  getSnapshotBeforeUpdate() {
    console.log('getSnapshotBeforeUpdate')
    return 1
  }
  componentDidUpdate(preProps, prevState, temp) {
    console.log('')
    console.group('componentDidUpdate')
    console.log('preProps', preProps, 'prevState', prevState, 'temp', temp)
  }

  static getDerivedStateFromError(error) {
    console.log('getDerivedStateFromError', error)
  }
  componentDidCatch(err) {
    console.log('')
    console.log(err)
  }

  render() {
    const { times, fakeTimes } = this.state
    return (
      <div style={{ border: '1px solid red', padding: '30px' }}>
        <h1>childOne</h1>
        <p>子组件*10: {fakeTimes}</p>
      </div>
    )
  }
}

export default ChildOne
