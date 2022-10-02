import React from 'react'
import MarkerIcon from "../../../assets/img/marker.png"

function MapMarker() {
  return (
    <div className='relative cursor-pointer'>
      {/* left-[70px] top-7 bg-[#92D72E] pl-6 pr-2 py-2 scale-[2] bg-[#92D72E]*/}
      <div className='bg-[#282C37] left-2 top-1.5 bg-[#92D72E absolute text-white px-3 py-2 rounded-l-full whitespace-nowrap'>
        <h3 className='font-medium'>Merlion</h3>
        {/* <p className='text-[0.6em]'>10 Bayfont Avenue, Singapore</p> */}
      </div>
      {/* h-[172px] w-[109px] */}
      <img className='h-[71px] w-[45px]' src={MarkerIcon} alt={`marker`} />
    </div>
  )
}

export default React.memo(MapMarker)