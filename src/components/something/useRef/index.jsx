import React, { useState, useRef } from 'react'
import ChildOne from './children/componetOne'

function RefDemo () {
    const refOne = useRef(null)
    console.log('render again')
    return (
        <div>
            <button onClick={() => {
                console.log(refOne)
                const { handleChild, handleChildT } = refOne.current
                handleChild && handleChild()//调用函数子组件方法
                handleChildT && handleChildT()//调用类 子组件方法
            }}>控制子组件的num</button>
            <ChildOne ref={refOne} />
        </div>
    )
}
export default RefDemo