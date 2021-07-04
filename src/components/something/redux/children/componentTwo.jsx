import { connect } from "react-redux";
import { addAction } from "../store/actions/actions";
function ComponentTwo (props) {
    const { add } = props
    return (
        <div style={{
            'border': '1px solid red',
            padding: '10px',
        }}>
            <h1>二级子组件</h1>
            <div>
                <button onClick={() => {
                    add(1)
                }}>增加1</button>

            </div>
        </div >
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        add: (value) => { dispatch(addAction(value)) },
    }
}

export default connect('', mapDispatchToProps)(ComponentTwo)