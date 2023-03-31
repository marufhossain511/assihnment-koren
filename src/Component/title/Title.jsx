import React, { useEffect, useState } from 'react';

const Title = ({title}) => {
    
//    console.log(typeof(title),'from title.jsx');   
 
    return (
        <div >
            <div className='bg-slate-100 text-center my-4 p-5'>
            <h1 className='text-xl font-bold text-slate-700 '>{title}</h1> 
            </div>
        </div>
    );
};

export default Title;