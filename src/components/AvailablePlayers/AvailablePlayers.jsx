import React, { use } from 'react';
import AvailablePlayersCard from './AvailablePlayersCard';
const AvailablePlayers = ({ playersPromiss }) => {
    const players = use(playersPromiss);
    console.log(players)
    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {
                    players.map(player => <AvailablePlayersCard key={player.id} player={player} />)
                }
            </div>
        </>
    );
};

export default AvailablePlayers;