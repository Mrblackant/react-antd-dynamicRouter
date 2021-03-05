import React, { useEffect, useState, useMemo } from 'react'
import { Button } from 'antd'
interface IProps {
  name: any
  children: any
}
function App() {
  const [name, setName] = useState(0)
  const [content, setContent] = useState(0)
  return (
    <>
      <button onClick={() => setName(new Date().getTime())}>name</button>
      <button onClick={() => setContent(new Date().getTime())}>content</button>
      <Button2 name={name}>{content}</Button2>
    </>
  )
}
function Button2({ name = 0, children }: IProps) {
  function changeName(name: any) {
    console.log('11')
    return name + '改变name的方法'
  }

  // const otherName = useMemo(() => changeName(name), [name])
  const otherName = changeName(name)
  return (
    <>
      <div>{otherName}</div>
      <div>{children || ''}</div>
    </>
  )
}

export default function () {
  const [count, SetCount] = useState(0)
  const [age, SetAge] = useState(0)

  useEffect(() => {
    console.log('useEffect的回调', count)
    if (!count) {
      SetCount(10)
    }
  }, [count])

  useEffect(() => {
    console.log('')
    console.log('2号机的useEffect的')
  })

  useEffect(() => {
    console.log('--------age------')
    console.log(age)
  }, [age])
  return (
    <div>
      {/* <App /> */}
      <span>计数中:{count}</span>
      <span>君E的年龄 {age}</span>
      <Button
        onClick={() => {
          // SetCount(count + 1)
          SetAge(age + 1)

          console.log('-----')
        }}
      >
        点击增加
      </Button>
    </div>
  )
}
