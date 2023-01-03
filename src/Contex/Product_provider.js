import React, {  createContext, useContext, useEffect, useReducer, useState } from 'react';
import { initialState, productReducer } from '../State/ProductState/ProductrReducer';
import { actionTypes } from '../State/ProductState/AcrionTypes';
const PRODUCT_CONTEXT = createContext()


const Product_provider = ({children}) => {
    // const [data, setData] = useState([])
    const [state,dispatch]=useReducer(productReducer,initialState)
    // console.log(state);
    useEffect(() => {
      dispatch({type:actionTypes.FETCHING_START})
        fetch("product.json")
        .then(res => res.json())
        .then(data => dispatch({type:actionTypes.FETCHING_SUCESS,payload:data}))
        .catch(()=>{
          dispatch({type:actionTypes.FETCHING_ERROR})
        })

    },[])
    const value = {
        state,
        dispatch,
    }
  

    return (
      <PRODUCT_CONTEXT.Provider value={value}>
        {children}
      </PRODUCT_CONTEXT.Provider>
    );
};
export const useProduct=()=>{
    const context=useContext(PRODUCT_CONTEXT)
    return context;
}
export default Product_provider;