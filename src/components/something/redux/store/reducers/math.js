const reducer = (state = 10, action) => {
    switch (action.type) {
        case 'ADD':
            return state + action.num
        case 'DOUBLE':
            return state * 2
        default:
            return state
    }
}
export {
    reducer
}