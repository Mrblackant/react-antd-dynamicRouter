import { configConsumerProps } from 'antd/lib/config-provider'
import React, { useReducer, useState } from 'react'
// 使用useReducer来展示控制数据，useReducer将用户的行为分为两部分，一个是what，一个是how
const initVal = {
    useName: '',
    usePassWord: '',
    ifLoding: false,
    loginStatus: false
}
const ReducerDemo = () => {
    const loginReducer = (state, action) => {
        switch (action.type) {
            case 'success':
                return {
                    ...state,
                    ifLoding: false,
                    loginStatus: true
                }
            case 'error':
                return {
                    ...state,
                    usePassWord: '',
                    ifLoding: false,
                    loginStatus: false
                }
            default:
                return state
        }

    }
    const [loginInfo, dispacthLoginInfo] = useReducer(loginReducer, initVal)
    const [num, setNum] = useState(0)

    return (
        <div>
            <p>使用useReducer控制 登录状态:{loginInfo.loginStatus ? '成功' : '失败'}</p>
            <button onClick={() => {
                dispacthLoginInfo({ type: 'success' })
            }}>登录成功</button>
            <button onClick={() => {
                dispacthLoginInfo({ type: 'error' })
            }}>登录失败</button>
            {/* hooks同步拿到state的值 */}
            <button onClick={() => {
                setNum((num) => {
                    num++//num是对hooks里的num的引用
                    console.log(num)//可以同步拿到更新后的state
                    return num
                })
            }}>useState点击次数:{num}</button>
        </div>
    )
}
export default ReducerDemo