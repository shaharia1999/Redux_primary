import { actionTypes } from "./AcrionTypes"

export const initialState = {
 loading:false,
 products:[],
 error:false,

}
export const productReducer=(state,action)=>{
  switch(action.type){
    case actionTypes.FETCHING_START:
        return{
            ...state,
            loading:true,
            error:false,
        }
    case actionTypes.FETCHING_SUCESS:
        return{
            ...state,
            loading:false,
            error:false,
            products:action.payload
        }
      case actionTypes.FETCHING_ERROR:
          return {
              ...state,
              loading: true,
              error: true,
          }
   
    
        default:
            return state;
  }
}