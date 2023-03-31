import React from 'react';
const SingleCard = ({card,handleTime}) => {
    // console.log(card);
    const handleTimes=handleTime
    const{coverImage,authorName,publishDate,readTime,authorImage,blogTitle}=card
    return (
        <div>
            <div className="card w-full h-full bg-base-100 shadow-xl my-4">
            <figure><img src={coverImage} alt="Shoes" /></figure>
            <div className="card-body flex-row justify-between items-center" >
                 <div className='flex items-center'>
                    <div>
                        <img className="w-10 h-10 rounded-full mr-3" src={authorImage} alt="" />
                    </div>
                    <div>
                    <h2 className="card-title">{authorName}</h2>
                    <p>{publishDate}</p>
                    </div>

                 </div>
                <div className=' flex'>
                    <p>{readTime} min read</p>
                    <button className='ml-3'>add</button>
                </div>
            </div>
            <h1 className='text-lg ml-5 font-bold p-2 '>{blogTitle}</h1>
           <div className="card-actions justify-start">
             <button onClick={()=>handleTimes(readTime)} className="text-blue-500 underline ml-8 mb-5 text-sm btn btn-active btn-link">Mark as read</button>
           </div>
            </div>
        </div>
    );
};

export default SingleCard;