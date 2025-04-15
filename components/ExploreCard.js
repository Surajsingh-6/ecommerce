import React from 'react'
import Buttons from './Buttons'

function ExploreCard({title, description, image, buttonText}) {
  return (
    <div>
        <div className='w-[300px] h-[450px] bg-white shadow-lg flex flex-col p-8 m-4 justify-between'>
            <div>
                <h3 className='text-2xl font-bold ' >{title}</h3>
                <p className='text-[#4a2c2c] text-sm font-semibold'>{description}</p>
            </div>
            <div className='p-5'><img src={image} alt="" /></div>
            <Buttons text={buttonText} />
        </div>
    </div>
  )
}

export default ExploreCard