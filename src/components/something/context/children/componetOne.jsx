
import { Consumer } from '../index'
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
export default ChildOne