import { Suspense, useState } from 'react'
import './App.css'
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers'

const playersPromiss = fetch('/public/players.json').then(res => res.json())

function App() {
  const [isActive, setIsActive] = useState(true)

  return (
    <>
      <Navbar />
      <Banner />
      <div className='section-info flex justify-between container mx-auto mt-20 mb-10 '>
        <h2 className='text-3xl font-bold'>Available Players</h2>
        <div className='btn-container flex cursor-pointer'>
          <button onClick={()=>setIsActive(true)} className={`p-2 border ${isActive&&"bg-[#E7FE29]"} ${isActive&&"text-black"} border-gray-300 border-r-0 rounded-l-xl cursor-pointer`}>Avaliable</button>
          <button onClick={()=>setIsActive(false)} className={`p-2 border border-gray-300 border-l-0 rounded-r-xl cursor-pointer ${isActive||"bg-[#E7FE29]"} ${isActive||"text-black"}`}>Selected(0)</button>
        </div>
      </div>
      {
        isActive ? <Suspense fallback={<div className='flex justify-center items-center'><span className="loading loading-spinner w-20 "></span></div>}>
          <AvailablePlayers playersPromiss={playersPromiss} />
        </Suspense>
        : <SelectedPlayers />
      }
    </>
  )
}

export default App
