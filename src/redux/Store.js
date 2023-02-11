import {createStore,combineReducers} from "redux";

import catsReducer from "./Reducer/CatsReducer";
import shacksReducer from "./Reducer/ShackReducer";

const rootReducer=combineReducers({
    catsState:catsReducer,
    shacksState:shacksReducer,

})

const store=createStore(rootReducer)

export default store