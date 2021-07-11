import React, { useState } from 'react'
import ChildOne from './children/componetOne'

export const AppContext = React.createContext('initVal')
export const { Provider, Consumer } = AppContext
console.log('Provider', Provider)
console.log('Consumer', Consumer)

function ContextDemo () {
    const [getNum, setNum] = useState(1)
    return (
        <Provider value={{ getNum, setNum }}>
            <button onClick={() => {
                setNum(getNum + 1)
            }}>
                加1
            </button>
            <ChildOne />
        </Provider>
    )
}
export default ContextDemo