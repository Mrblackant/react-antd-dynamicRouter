import { connect } from "react-redux";
import { addAction, doubleAction } from "../store/actions/actions";
import ComponentTwo from './componentTwo'
function ComponentOne (props) {
    console.log(props)
    const { num, add, double } = props
    return (
        <div>
            <div>
                <button onClick={() => {
                    add(1)
                }}>增加1</button>
                <button onClick={() => {
                    add(2)
                }}>增加2</button>
                <button onClick={() => {
                    double()
                }}>翻倍</button>
            </div>
            <div>
                <p>结果展示: {num}</p>
            </div>
            <ComponentTwo />
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        num: state
    }

}
const mapDispatchToProps = (dispatch) => {
    return {
        add: (value) => { dispatch(addAction(value)) },
        double: (value) => { dispatch(doubleAction()) },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ComponentOne)