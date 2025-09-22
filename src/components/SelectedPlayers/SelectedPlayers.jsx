import React from 'react';
import SelectedPlayersCard from './SelectedPlayersCard';

const SelectedPlayers = ({selectedPlayers,handleDelete}) => {
    console.log(selectedPlayers)
    return (
        selectedPlayers.map(player =><SelectedPlayersCard 
            key={player.id} 
            player ={player} 
            handleDelete={handleDelete}
            />)
    );
};

export default SelectedPlayers;