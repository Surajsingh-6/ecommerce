import React from 'react'
import ExploreCard from './ExploreCard'

function Explore() {
return (
    <div className='h-screen w-full'>
            <div className='m-auto text-center mt-10'>
                    <h2 className='text-5xl font-semibold font-mono'>Explore Our Alowishus</h2>
                    <p className='text-lg m-4 leading-6 text-[#434343]'>Discover a wide variety of products tailored to your needs. <br /> Dive in and find something special today!</p>
            </div>
            <div className='flex flex-wrap justify-center mt-10'>
                <ExploreCard title='Catering Service' description='We provide luxury catering services while ensuring hygiene.' image='icon1.png' buttonText='View Services' />
                <ExploreCard title='Special Events' description='Plan and book your special events with us for unforgettable experiences.' image='icon2.png' buttonText='Book Events' />
                <ExploreCard title='The Food' description='Explore our delicious and diverse food options crafted to perfection.' image='icon3.png' buttonText='View Food' />
            </div>
    </div>
)
}

export default Explore