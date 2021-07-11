
import { useState, forwardRef, useImperativeHandle } from 'react'
const ChildOne = forwardRef((props, ref) => {
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
export default ChildOne