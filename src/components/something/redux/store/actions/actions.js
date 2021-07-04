import { ACTTYPES } from '../../constans/actionTypes'
const { ADD, DOUBLE } = ACTTYPES


// const actAddOne = {
//     type: ACTTYPES.ADD,
//     num: 1
// }
// const actAddTwo = {
//     type: ACTTYPES.ADD,
//     num: 2
// }
// const actDouble = {
//     type: ACTTYPES.DOUBLE,
// }

// 定义方法专门生成actions
const addAction = (num) => {
    return {
        type: ADD,
        num
    }
}
const doubleAction = () => {
    return {
        type: DOUBLE,
    }
}

export {
    addAction,
    doubleAction
}