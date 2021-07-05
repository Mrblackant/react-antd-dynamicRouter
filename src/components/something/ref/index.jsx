import React, { useState, useRef } from 'react'
import ChildOne from './children/componetOne'

function RefDemo () {
    const refOne = useRef(null)
    return (
        <div>
            <button onClick={() => {
                console.log(refOne)
                const { handleChild } = refOne.current
                handleChild()
            }}>控制子组件的num</button>
            <ChildOne ref={refOne} />
        </div>
    )
}
export default RefDemo