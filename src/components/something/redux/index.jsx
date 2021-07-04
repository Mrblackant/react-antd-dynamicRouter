
import { reducer } from './store/reducers/math'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import ComponentOne from './children/componentOne'

function ReduxLearn () {
    const store = createStore(reducer)
    // console.log(store.getState())
    // store.dispatch(addAction(1))

    return (<Provider store={store}>
        <ComponentOne />
    </Provider>)
}
export default ReduxLearn