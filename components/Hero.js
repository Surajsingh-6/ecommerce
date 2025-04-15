import React from "react";
import Buttons from "./Buttons";
import '@/app/globals.css';
import { fontSmall } from '../app/Font';



function Hero() {
    return (
        <div className="flex justify-between items-center mt-10 p-10 h-[80vh]">
            <div className="m-auto">
                <h1 className={` text-7xl leading-tight`}>
                    Alowishus <br />
                    Delicious <br />
                    <div className="flex ">Coffee & Cafe. <br /> <img src="cafe.png" className="h-20" alt="" /></div>
                </h1>
                <p className={`text-md mt-4 text-gray-600 ${fontSmall.variable} alowishus-text`}  >
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
                    className="h-[80vh] w-[80vh] object-cover "
                />
            </div>
        </div>
    );
}

export default Hero;
