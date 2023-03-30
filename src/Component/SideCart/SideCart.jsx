import React from 'react';

const SideCart = (props) => {
    console.log(props.cards);
    const{readTime}=props.cards
   


    
    return (
        <div className=''>
            <div className='bg-slate-100 text-center my-4 p-5'>
                <h1 className='text-xl font-semibold text-violet-500'>Spent time on read : min</h1>
            </div>
        </div>
    );
};

export default SideCart;