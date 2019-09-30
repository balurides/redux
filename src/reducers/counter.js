const initialState = {
    count: 0
}
export default(state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            console.log(state.count);
            return { ...state, count: state.count + 1 };
        case 'DECREMENT':
            return {
                ...state,
                count: state.count - 1
            };
        default:
            break;
    }
    return state;
}