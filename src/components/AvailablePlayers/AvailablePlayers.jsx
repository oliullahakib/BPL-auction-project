import React, { use } from 'react';
import AvailablePlayersCard from './AvailablePlayersCard';
const AvailablePlayers = ({ playersPromiss,handleCoin,coin,choosePlayer,handleSelectedPlayers,selectedPlayers}) => {
    const players = use(playersPromiss);
    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {
                    players.map(player => <AvailablePlayersCard 
                        key={player.id} 
                        player={player} 
                        handleCoin={handleCoin} 
                        coin ={coin}
                        choosePlayer ={choosePlayer} 
                        handleSelectedPlayers={handleSelectedPlayers} 
                        selectedPlayers={selectedPlayers}
                        />)
                }
            </div>
        </>
    );
};

export default AvailablePlayers;