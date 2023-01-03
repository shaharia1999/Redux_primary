import React from 'react';
import { useProduct } from '../Contex/Product_provider';

 



const Home = () => {
    const { state } = useProduct();
    console.log(state
)

    return (
        <div className=''>
            <h1 className='text-center '> Home </h1>
            <div className='row row-cols-md-4 '>
                {
                    state.products?.map(item => <div className='bg-sucess m-5 shadow rounded'>
                        <img className='img-fluid' src={item.image}></img>
                        <h3 className=''>{item.model}</h3>
                        <h4 className=''> Price : $ {item.price}</h4>
                        <h5 className=''>{item.keyFeature
                        }</h5>
                        <div className='d-flex'>
                            <button className='rounded-pill bg-primary m-3 text-white w-50'>ADD TO CARD </button>
                            <button className='rounded bg-warning m-3 text-white '>favorite</button>
                        </div>

                    </div>)
                }
            </div>
         
            
        </div>
    );
};

export default Home;