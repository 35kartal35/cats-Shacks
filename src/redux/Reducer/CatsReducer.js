import ActionTypes from "../Action/ActionTypes";

const initialState={
    pending:false,
    success:false,
    cats:[],
    fail:false,
    error:""

}

const catsReducer=(state=initialState,action)=>{
    switch (action.type) {
        case ActionTypes.catsAction.GET_CAT_START:
        return{
            ...state,
        pending:true
    }
    case ActionTypes.catsAction.GET_CAT_SUCCESS:
        return{
            ...state,
            pending:false,
            success:true,
            fail:false,
            cats:action.payload
        }
        case ActionTypes.catsAction.GET_CAT_FAİL:
            return {
                ...state,
                pending:false,
                success:false,
                fail:true,
                error:action.payload
            }
            case ActionTypes.catsAction.ADD_CAT:
                return{
                    ...state,
                    cats:[...state.cats,action.payload]
                }
                default: return state
    }
}

export default catsReducer