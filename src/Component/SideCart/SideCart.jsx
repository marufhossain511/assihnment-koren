import React, { useEffect, useState } from 'react';
import Title from '../title/Title';
import { toast } from 'react-hot-toast';

const SideCart = ({cards,titles}) => {

//   console.log(typeof(count));
    const uniqueTitles=[];
    titles.forEach(uniqueTitle => {
        if(!uniqueTitles.includes(uniqueTitle)){
            uniqueTitles.push(uniqueTitle)
        }else{
            toast.error('You Have Already Bookmarked This Blog!!')
        }
    });
    const [time,setTime]=useState(cards);
    useEffect(()=>{
        const getTimeFromStorage=localStorage.getItem('watchTime')
        setTime(getTimeFromStorage)
    },[cards])

    return (
        <div className=''>
            <div className='bg-slate-200 text-center my-4 p-5'>
                <h1 className='text-xl font-semibold text-violet-500'>Spent time on read : {time} min</h1>
            </div>
            <div className='bg-slate-50 text-center my-4 p-5'>
                <h1 className='text-xl font-bold text-slate-700'>Bookemarked Blogs: {uniqueTitles.length}</h1>
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