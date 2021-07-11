
import React, { useState, forwardRef, useImperativeHandle } from 'react'
// 函数组件
const ChildOne = forwardRef((props, ref) => {
    console.log(props, ref)
    const [num, setNum] = useState(0)
    const handleChild = () => {
        setNum(num + 1)
    }

    useImperativeHandle(ref, () => ({
        handleChild,
    }))
    return (
        <div>
            <p>子元素num展示:{num}</p>
        </div>
    )
})
// 类组件
class ChildClass extends React.Component {
    constructor(props) {
        super(props)
        // this.tempRef=props.ref
    }
    state = {
        num: 0
    }
    handleChildT = () => {
        this.setState({
            num: this.state.num + 1
        })
    }
    render () {
        const { num } = this.state
        return (
            <div>
                <p>子元素num展示:{num}</p>
            </div>
        )
    }
}
export default ChildClass//ChildOne