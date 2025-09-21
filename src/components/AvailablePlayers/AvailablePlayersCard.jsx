import React from 'react';
import userImg from "../../assets/user1.png"
import flagImg from "../../assets/report1.png"

const AvailablePlayersCard = ({player}) => {
   const {image,name,country,role,rating,bowling,batting,price} = player
    return (
        <div className="card bg-white text-black shadow-sm p-3 space-y-3">
            <figure>
                <img
                className='w-80'
                    src={image}
                    alt="player image" />
            </figure>
            <div className="space-y-3">
                <h2 className="card-title">
                    <img src={userImg} alt="" />
                   {name}
                </h2>
                <div className='flex justify-between items-center'>
                    <div className='flex gap-1 items-center'>
                        <img src={flagImg} alt="" />
                        <p className='text-gray-400'>{country}</p>
                    </div>
                    <div className="badge bg-gray-300 text-black">{role}</div>
                </div>
                <p className='font-semibold'>Rating: {rating}</p>
                <div className='flex justify-between items-center'>
                    <div className='flex gap-1 items-center'>
                        <p className='text-black font-semibold'>{batting}</p>
                    </div>
                    <p className='text-gray-400'>{bowling}</p>
                </div>
                <div className='flex justify-between items-center'>
                    <div className='flex gap-1 items-center'>
                        <p className='font-semibold'>Price: ${price}</p>
                    </div>
                   <button className='btn'>Choose Player</button>
                </div>
            </div>
        </div>
    );
};

export default AvailablePlayersCard;