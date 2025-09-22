import userImg from "../../assets/user1.png"
import flagImg from "../../assets/report1.png"

const AvailablePlayersCard = ({ player, handleCoin, coin, handleSelectedPlayers, selectedPlayers }) => {
    const { image, name, country, role, rating, bowling, batting, price } = player;
    const isSelected = selectedPlayers.some(p => p.id === player.id);
    const handleChoosePlayer = () => {
        if (selectedPlayers.length >= 6) {
            alert("You can Choose only Six Players")
            return
        }
        if (price > coin) {
            alert("you don't have enough coin");
            return
        }
        handleCoin(price)
        handleSelectedPlayers(player)

    }
    return (
        <div className="card bg-white text-black shadow-sm p-3 space-y-3">
            <figure className='min-h-80 mx-auto'>
                <img
                    className='h-80 object-cover'
                    src={image}
                    alt="player image" />
            </figure>
            <div className="space-y-3 h-[200px] flex-shrink-0 overflow-hidden">
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
                    <button disabled={isSelected} onClick={handleChoosePlayer} className={`btn ${isSelected ? 'text-green-400' : ""}`}>{isSelected ? "Selected" : "Choose Player"}</button>
                </div>
            </div>
        </div>
    );
};

export default AvailablePlayersCard;