
import React, { useState, forwardRef, useImperativeHandle } from 'react'
const ChildOne = ({ nums, objs }) => {
    console.log('子组件被渲染')
    return (
        <div className="wapper_border">
            <p>父元素num: {nums}</p>
            <p>父元素objs: {objs.deepObj.deepAge}</p>
        </div>
    )
}
const funcUpdate = (...parmas) => {
    console.log(parmas)
    // let { nums: numPrev } = prevProps
    // let { nums: numNext } = nextProps
    // if (numNext > 3) {
    //     console.log('停止更新')
    //     return true
    // }
    // return false
    return false
}
export default React.memo(ChildOne)