import { render } from '@testing-library/react'

function Test() {
  // componentWillMount
  // componentWillUpdate
  // componentWillReciveProps
  return <p>这是son</p>
}
export default Test

let style = {
  color: 'green',
}

let A = {
  type: 'div',
  key: 'A',
  props: {
    children: [
      'A',
      {
        type: 'div',
        key: 'B1',
        props: { style, children: 'B1文本' },
      },
      {
        type: 'div',
        key: 'B2',
        props: { style, children: 'B2文本' },
      },
    ],
  },
}

// 工作循环
// 表示正在处理的fiber
let workInProgress

const TAG_ROOT = 'TAG_ROOT'

function workLoop() {
  while (workInProgress) {
    workInProgress = preformUnitOfWork(workInProgress)
  }
}

let root = document.getElementById('root')
// fiber是一个普通对象
let rootFiber = {
  tag: TAG_ROOT, //Fiber类型
  key: 'ROOT', //唯一标识
  stateNode: root, //fiber对应的真实Dom节点
  props: {
    children: [A],
  },
}

function preformUnitOfWork(fiber) {
  console.log(fiber.key) //打印出根节点
  beginWork(fiber)
}

//根据当前fiber和虚拟dom构建fiber树
function beginWork(fiber) {
  console.log('beginWork', fiber.key)
  let nextChildren = fiber.props.children
  return reconcileChildren(fiber, nextChildren)
}

function reconcileChildren(returnFiber, nextChildren) {
  for (let newIndex = 0; newIndex < nextChildren.length; newIndex++) {
    let newFiber = nextChildren[newIndex]
  }
}
// 当前正在执行的工作单元
workInProgress = rootFiber
workLoop()

// 开始根据
