import React from 'react';
import { useProduct } from '../Contex/Product_provider';
import { actionTypes } from '../State/ProductState/AcrionTypes';

 



const Home = () => {
    const {
         state,dispatch
        }= useProduct();
   const {products,loading,error}=state;
   

let content;
if(loading){
    content=<h1>Loading</h1>
}
if(Error){
    content=<h1>Error</h1>
}
if(!loading && !error && products.length){
    {
     content=   state.products?.map(item => <div key={item._id} className='bg-sucess m-5 shadow rounded'>
                              
            <img className='img-fluid' src={item.image}></img>
            <h3 className=''>{item.model}</h3>
            <h4 className=''> Price : $ {item.price}</h4>
            <h4 className=''> Rating : $ {item.rating}</h4>
            <h5 className=''>{item.keyFeature
            }</h5>
            <div className='d-flex'>
                <button 
                 onClick={() => dispatch({ type: actionTypes.ADD_CARD, payload: item }, console.log(state))}
                className='rounded-pill bg-primary m-3 text-white w-50'>ADD TO CARD </button>
                <button className='rounded bg-warning m-3 text-white '>favorite</button>
            </div>

        </div>)
    }
}
if(!loading && !error && products.length ==0){
    content=<p>NOthing to Show</p>
}
    return (
        <div className=''>
            <h1 className='text-center '> Home </h1>
            <div className='row row-cols-md-4 '>
                 {content}
            </div>
         
            
        </div>
    );
};

export default Home;