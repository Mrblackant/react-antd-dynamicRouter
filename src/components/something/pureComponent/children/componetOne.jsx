
import React, { PureComponent } from 'react'

class ChildOne extends PureComponent {
    render () {
        console.log('子组件被渲染')
        return (
            <div>
                <p></p>
            </div>
        )
    }
}
export default ChildOne
