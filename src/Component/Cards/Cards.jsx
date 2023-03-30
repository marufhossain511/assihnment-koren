import React, { useEffect, useState } from 'react';
import SingleCard from '../SingleCard/SingleCard';

const Cards = () => {

    const [cards,setCards]=useState([])

    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setCards(data))
    },[])

    return (
        <div className='flex mx-16 gap-5'>
            <div className='w-[60%] bg-red-700'>
               {
                cards.map(card=><SingleCard 
                    key={card.id}
                    card={card}></SingleCard>)
               }
            </div>
            <div className='w-[40%]'>
                <h1 className='text-center bg-orange-700'>Side cart</h1>
            </div>
        </div>
    );
};

export default Cards;