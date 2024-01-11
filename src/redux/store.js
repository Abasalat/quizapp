import questionReducer  from "./question_reducer";
import { resultReducer } from "./result_reducer";
import { combineReducers, configureStore } from "@reduxjs/toolkit"; 


const rootReducer = combineReducers({
    questions : questionReducer
    //result : resultReducer
})

/*cretae store with reducer*/
export default configureStore({reducer: rootReducer})