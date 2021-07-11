
import { useContext } from 'react'
import { AppContext, Consumer } from '../index'
function ChildOne (props) {
    console.log(props)
    return (
        <Consumer>
            {val => {
                console.log(val)
                let { getNum, setNum } = val
                return (<div style={{ 'border': '1px solid red', padding: '20px' }}>child-one :{getNum}
                    <div>
                        <button onClick={() => { setNum(getNum + 1) }}>子测试+1</button>
                    </div>
                </div>)
            }}
        </Consumer>
    )
}
function ChildOther () {
    const { getNum } = useContext(AppContext)
    console.log('getNum', getNum)
    return (
        <p>
            子组件使用 useContext:
            {
                getNum
            }
        </p>
    )
}
export default ChildOther//ChildOne