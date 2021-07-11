import React, { useState } from 'react'
import ChildOne from './children/componetOne'


const ReactMemo = () => {
    const [count, setCount] = useState(0)
    const [num, setNum] = useState(0)
    const [tempObj, setObj] = useState({
        name: 'lili',
        age: 19,
        deepObj: {
            deepAge: 10
        }
    })
    const handleChangeObj = () => {
        setObj({
            ...tempObj,
            deepObj: {
                deepAge: tempObj.deepObj.deepAge + 1
            }
        })
    }
    return (
        <div>
            <p>count:{count}</p>
            <p>num:{num}</p>
            <p>deepAge:{tempObj.deepObj.deepAge}</p>
            <button onClick={() => { setCount(count + 1) }}>count加1</button>
            <button onClick={() => { setNum(num + 1) }}>num加1</button>
            <button onClick={handleChangeObj}>修改对象deepAge+1</button>
            <ChildOne nums={num} objs={tempObj} />
        </div>
    )
}
export default ReactMemo