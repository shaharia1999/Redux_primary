import { actionTypes } from "./AcrionTypes"

export const initialState = {
 loading:false,
 products:[],
 error:false,
 cart:[]


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
      case actionTypes.ADD_CARD:
          return {
              ...state,
            cart:[...state.cart,action.payload]
          }
      case actionTypes.REMOVE_CARD:
          return {
            ...state,
           
            // cart: [...state.cart.filter((_, index) => index.price != action.index)]
            cart: state.cart.filter(
              cart =>
                cart.price !== action.payload
            )
             
          
          }
   
    
        default:
            return state;
  }
}
