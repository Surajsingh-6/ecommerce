import React from "react";
import Buttons from "./Buttons";

function App() {
    return (
        <div className="flex flex-col md:flex-row justify-center items-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-4">
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start p-8 md:p-16 space-y-6 text-center md:text-left">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold fmodern text-gray-800 leading-tight mb-4">
                    Instant Coffee <br /> At Your Home
                </h2>
                <p className="text-lg text-gray-600 max-w-md mb-6">
                    Discover the rich aroma and flavor of our premium instant
                    coffee. Made from the finest beans, our coffee is perfect
                    for any time of day.
                </p>
                <div className="lg:hidden w-full" >
                    <img
                        src="coffee-banner.png"
                        className="absolute  -rotate-12 z-10 h-80 m-auto ml-5 " 
                        alt=""
                    />
                    <img
                        src="coffee-banner.png"
                        className="relative z-20 h-80 m-auto mr-10"
                        alt=""
                    />
                </div>
                <div className="pt-4">
                    <Buttons text="Download the app" />
                </div>
            </div>
            <div className="w-full md:w-auto lg:flex justify-center items-center p-8 mt-8 md:mt-0  hidden">
                <img
                    src="coffee-banner.png"
                    className="absolute mr-48 -rotate-12 z-10"
                    alt=""
                />
                <img src="coffee-banner.png" className="relative z-20" alt="" />
            </div>
        </div>
    );
}

export default App;
