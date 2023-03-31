import React, { useEffect, useState } from 'react';

const SideCart = ({cards}) => {
    const [time,setTime]=useState(cards);
    useEffect(()=>{
        const getTimeFromStorage=localStorage.getItem('watchTime')
        setTime(getTimeFromStorage)
    },[cards])

    return (
        <div className=''>
            <div className='bg-slate-100 text-center my-4 p-5'>
                <h1 className='text-xl font-semibold text-violet-500'>Spent time on read : {time} min</h1>
            </div>
        </div>
    );
};

export default SideCart;