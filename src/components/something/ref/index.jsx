import React, { useState, useRef, useEffect } from 'react'
import { textChangeRangeIsUnchanged } from 'typescript';
// import ChildOne from './children/componetOne'


// 类组件，ref的current为当前dom
class RefDemo extends React.Component {

    constructor(props) {
        super(props)
        // this.setRef = React.createRef()
    }
    componentDidMount () {
        // console.log(this.setRef)
        // this.setRef.current.focus();
        console.log(this.getRef)
        this.getRef.focus();
    }

    render () {
        // return <input ref={this.setRef} />;
        return <input ref={(e) => {
            this.getRef = e
        }} />;
    }
}

const RefFunDemo = () => {
    const setRef = React.createRef()
    useEffect(() => {
        console.log('func setRef', setRef)
        setRef.current.focus()

    })
    return <input ref={setRef} />
}

export default RefFunDemo