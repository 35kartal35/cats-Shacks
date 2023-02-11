import ActionTypes from "../Action/ActionTypes";

const initialState={
    pending:false,
    success:false,
    shacks:[],
    fail:false,
    error:""
}

const shacksReducer=(state=initialState,action)=>{
    switch (action.type) {
        case ActionTypes.shacksAction.GET_SHACK_START:
            return{
                ...state,
                pending:true
            }
            case ActionTypes.shacksAction.GET_SHACK_SUCCESS:
                return{
                    ...state,
                    pending:false,
                    success:true,
                    shacks:action.payload,
                    fail:false
                }
                case ActionTypes.shacksAction.GET_SHACK_FAİL:
                    return{
                        ...state,
                        pending:false,
                        success:false,
                        fail:true,
                        error:action.payload

                    }

                    default: return state
    }
}

export default shacksReducer