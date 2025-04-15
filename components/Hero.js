import React from "react";
import Buttons from "./Buttons";
import '@/app/globals.css';
import { fontSmall } from '../app/Font';



function Hero() {
    return (
        <div className="lg:flex justify-between items-center min-h-screen w-full p-10  h-[80vh]">
            <div className="m-auto">
                <h1 className={`text-6xl m-auto lg:m-0 lg:text-7xl leading-tight fbig lg:ml-0 ml-5` }>
                    Alowishus <br />
                    Delicious <br />
                    <div className="lg:flex lg:gap-4  "><h1>Coffee & </h1><h1 className="inline lg:block">Cafe.</h1> <img src="cafe.png" className="lg:h-20 lg:-ml-5 h-12 inline lg:block" alt="" /></div>
                </h1>
                <p className={`text-md mt-4 text-gray-600    `}  >
                    Experience the best coffee,imported from around the world,<br />
                    crafted to <span className="text-black font-semibold inline">perfection</span>.
                </p>
                <div className="flex gap-4 mt-10">
              
                        <div className="w-[200px]">
                            <Buttons text="Order Now"  />
                        </div>
                  
                    <div className="w-[200px]">
                        <Buttons text="Download App" />
                    </div>
                </div>
            </div>
            <div className="p-4">
                <img
                    src="hero.png"
                    alt=""
                    className="lg:h-[80vh] lg:w-[80vh] object-cover "
                />
            </div>
        </div>
    );
}

export default Hero;
