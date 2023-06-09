import React, { useEffect, useState } from 'react';
import SideCart from '../SideCart/SideCart';
import SingleCard from '../SingleCard/SingleCard';
const Cards = () => {

    const [cards,setCards]=useState([])

    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setCards(data))
    },[])

   const [times,setTime]=useState(0)

    const handleTime=(time)=>{
        console.log(time);
        const previousTime=JSON.parse(localStorage.getItem('watchTime'));
        if(previousTime){
            const newTime=previousTime + time;
            localStorage.setItem('watchTime',newTime)
            setTime(newTime);
        }else{
            localStorage.setItem('watchTime',time)
            setTime(time)
        }
    }

   const[cardTitles,setCardTitle]=useState([]) 
 

   const cardTitle=(title)=>{
    setCardTitle([...cardTitles,title])

    // if(title===previousTitle){
    //     alert('already exists')
    // }
    // else{
    //     localStorage.setItem('title',JSON.stringify(title))
    // }
}

    return (
        <div className='lg:flex lg:mx-16 md:mx-16 md:flex lg:gap-5'>
            <div className='lg:w-[60%]'>
               {
                cards.map(card=><SingleCard 
                    key={card.id}

                    title={cardTitle}
                    handleTime={handleTime}
                    card={card}></SingleCard>)
               }
            </div>
            <div className='lg:w-[40%]'>
                <SideCart 
                titles={cardTitles}
                cards={times}
                ></SideCart>
            </div>
        </div>
    );
};

export default Cards;