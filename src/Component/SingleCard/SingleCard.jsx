import React from 'react';

const SingleCard = ({card}) => {
    console.log(card);
    const{coverImage}=card
    return (
        <div>
            <div className="card w-full h-full bg-base-100 shadow-xl my-4">
            <figure><img src={coverImage} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
            </div>
        </div>
    );
};

export default SingleCard;