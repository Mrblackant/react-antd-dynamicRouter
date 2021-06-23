import React from 'react'
class App extends React.Component {
  parentRef
  childRef
  constructor(props) {
    super(props)
    this.parentRef = React.createRef()
    this.childRef = React.createRef()
  }
  componentDidMount() {
    console.log('React componentDidMount！')
    this.parentRef.current?.addEventListener('click', () => {
      console.log('原生事件：父元素 DOM 事件监听！')
    })
    this.childRef.current?.addEventListener('click', () => {
      console.log('原生事件：子元素 DOM 事件监听！')
    })
    document.addEventListener(
      'click',
      (e) => {
        console.log('原生事件：document DOM 事件监听！')
      },
      true
    )
  }
  parentClickFun = () => {
    console.log('React 事件：父元素事件监听！')
  }
  childClickFun = () => {
    console.log('React 事件：子元素事件监听！')
  }
  render() {
    return (
      <div ref={this.parentRef} onClick={this.parentClickFun}>
        <button ref={this.childRef} onClick={this.childClickFun}>
          分析事件执行顺序
        </button>
      </div>
    )
  }
}
export default App
