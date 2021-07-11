import React, { useState, PureComponent } from 'react'
import ChildOne from "./children/componetOne";
//PureComponent在子组件里使用，并且当引用类型二级发生变化时，不会重新渲染，即obj.count发生change时子组件不会渲染;

class PureCom extends React.Component {
    state = {
        age: 1,
        obj: {
            count: -999
        }
    }
    handleClick = () => {
        //当引用props为对象时，可用下方3种解决不重新渲染问题

        // let tempObj = JSON.parse(JSON.stringify(this.state.obj))
        // let tempObj = Object.assign({}, this.state.obj)
        // let tempObj = { ...this.state.obj }
        let tempObj = this.state.obj
        tempObj.count++
        this.setState({
            obj: tempObj
        })
    }
    render () {
        const { age, obj: { count } } = this.state
        return (
            <div>
                <p>age: {age}</p>
                <p>countNum: {count}</p>
                <button onClick={() => {
                    this.setState({
                        age: age + 1
                    })
                }}>age 增加1</button>
                <button onClick={this.handleClick}>count 增加1</button>
                <ChildOne data={age} count={this.state.obj} />
            </div >
        )
    }
}

export default PureCom
