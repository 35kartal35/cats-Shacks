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
            case ActionTypes.catsAction.DELETE_CAT_START:
                return{
                    ...state,
                    pending:true
                }
            case ActionTypes.catsAction.DELETE_CAT_SUCCESS:
               let filteredCats=state.cats.filter(item => item.id !== action.payload)
               return{
                ...state,
                pending:false,
                success:true,
                fail:false,
                Cats:filteredCats
            } 
            case ActionTypes.catsAction.DELETE_CAT_FAİL:
                return {
                    ...state,
                    pending:false,
                    success:false,
                    fail:true,
                    error:action.payload
                }
            case ActionTypes.catsAction.EDIT_CAT:
               
                let temp=[]
                for(let i=0;i<state.cats.length;i++){
                    if(state.cats[i].id !== action.payload.id){
                        temp.push(state.cats[i])
                    }else{
                        temp.push(action.payload)
                    }
                }
                return {
                    ...state,
                    cats:temp
                }

               default: return state
    }
}

export default catsReducer