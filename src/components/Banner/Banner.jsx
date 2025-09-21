import React from 'react';
import bannerMainImg from "../../assets/banner-main.png"
function Banner() {
    return (
        <div className='container mx-auto bg-[url("https://i.ibb.co.com/zTxrDkV9/bg-shadow.png")] flex flex-col items-center justify-center space-y-5 py-8 rounded-lg'>
          <img src={bannerMainImg} alt="banner main image" />
          <h1 className='font-bold text-4xl'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
          <p className='text-2xl font-medium text-gray-400'>Beyond Boundaries Beyond Limits</p>
         <div className='border-2 border-[#E7FE29] p-1  rounded-lg cursor-pointer'>
             <button className='btn bg-[#E7FE29] text-black rounded-lg'>Claim Free Credit</button>
         </div>
        </div>
    );
}

export default Banner;