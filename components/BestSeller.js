import React from 'react'
import { ThreeDCardDemo } from './ThreeDCardDemo'
import { fontBig } from '@/app/Font'
import '@/app/globals.css'
function BestSeller() {
  return (
    <div className='min-h-screen w-full'>
                <div className='m-auto text-center mt-10'>
                        <h2 className={`text-7xl font-semibold fbig  `}>Best Sellers</h2>
                        <p className='text-2xl m-4 leading-6 text-[#434343]'>Discover our top-rated products loved by customers. <br />Explore the collection and find your next favorite.</p>
                </div>
                <div className='flex flex-wrap justify-center lg:gap-20 '>
                  <div className='-mt-10'>
                    <ThreeDCardDemo title='Rich Double Espresso' desc='Intense flavor, bold aroma, perfect crema.' imageUrl='/mid1.png'/>
                  </div>
                  <div className='-mt-10'>
                    <ThreeDCardDemo title='Velvety Cappuccino' desc='Smooth steamed espresso & delicate foam.' imageUrl='/mid2.png'/>
                  </div>
                  <div className='-mt-10'>
                    <ThreeDCardDemo title='Artisanal Latte' desc='Expertly crafted with microfoam art.' imageUrl='/mid3.png'/>
                  </div>
                </div>
        </div>
  )
}

export default BestSeller