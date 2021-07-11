import React, { useEffect, useRef, useState } from 'react'
import './index.scss'
class TimeLine extends React.Component {
    constructor(props) {
        super(props)
        console.log('constructor')
        console.log('')
        this.state = {
            count: 1
        }
    }
    static getDerivedStateFromProps (props, state) {
        console.log('getDerivedStateFromProps')
        console.log('props', props)
        console.log('state', state)

        return { num: props.num || 199 }
    }
    componentDidMount () {
        console.log('dom mount')
    }
    shouldComponentUpdate () {
        console.log('是否要更新')
        return true
    }
    getSnapshotBeforeUpdate (prevProps, prevState) {
        console.log('')
        console.log('prve', prevProps, prevState)
        return null
    }
    componentDidUpdate () {
        console.log('组件更新完成')
    }
    componentWillUnmount () {
        // alert('will unmount')
    }
    render () {
        const { count, num } = this.state
        console.log('')
        console.log('render')
        console.log(Array.from(Array(count).keys()))

        return (
            <div>
                <p>展示:count:{count}
                </p>
                <p>
                    num:{num}
                </p>
                <button onClick={() => { this.setState({ count: this.state.count + 1, num: this.state.num + 1 }) }}>增加1</button>
                <div className="wrap">
                    1
                    {Array.from(Array(count).keys()).map(i => {
                        return <p>{i}</p>
                    })}
                </div>
            </div>
        )
    }
}
const FunTimeLine = () => {
    const [count, setCount] = useState(0)
    const ref = useRef()
    useEffect(() => {
        console.log('ref', ref)
        let { current } = ref
        if (!current) {
            console.log('didMount')
            ref.current = true
        } else {
            console.log('didUpdate')

        }
    })
    return (<div>
        <p>{count}</p>
        <button onClick={() => { setCount(count + 1) }}>加1</button>
    </div>)
}
export default FunTimeLine//TimeLine