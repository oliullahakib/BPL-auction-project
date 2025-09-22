import React from 'react';
import deleteBin from "../../assets/deleteBin.png"

function SelectedPlayersCard({player,handleDelete}) {
    return (
       <div className='flex justify-between items-center px-5 py-2 container mx-auto mb-8 border border-white rounded-xl'>
          <div className='flex gap-2'>
            <img className='w-20 border border-gray-200 rounded-xl' src={player.image} alt="" />
            <div>
                <h3 className='text-2xl font-semibold'>{player.name}</h3>
                <p className='text-sm text-gray-300'>{player.role}</p>
            </div>
          </div>
          <div>
            <img onClick={()=>handleDelete(player.id,player.name,player.price)} className='cursor-pointer' src={deleteBin} alt="" />
          </div>
        </div>
    );
}

export default SelectedPlayersCard;