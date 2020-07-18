const initialState = 0;


export const countReducer = function (state = initialState, action) {
    switch (action.type) {
        case "INCREMENT":
            console.log(state);
            return state + 1;
        case "DECREMENT":
            return state - 1;
        default:
            return state;
    }
};