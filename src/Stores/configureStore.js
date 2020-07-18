import { createStore } from "redux";
import  { countReducer } from "../Reducers/countReducer";


const initialState = {
    form : {
        submit : false
    }
};

function configureStore(state = initialState) {
    return createStore(countReducer,state);
}

export default configureStore;
