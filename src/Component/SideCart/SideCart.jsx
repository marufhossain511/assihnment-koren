import React, { useEffect, useState } from 'react';
import Title from '../title/Title';

const SideCart = ({cards,titles, count}) => {
    const uniqueTitles=[];
    titles.forEach(uniqueTitle => {
        if(!uniqueTitles.includes(uniqueTitle)){
            uniqueTitles.push(uniqueTitle)
        }
    });
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
            <div className='bg-slate-100 text-center my-4 p-5'>
                <h1 className='text-xl font-bold text-slate-700'>Bookemarked Blogs: {count}</h1>
            </div>
            <div>
                {
                    uniqueTitles.map(title=><Title title={title}></Title>)
                }
            </div>
        </div>
    );
};

export default SideCart;