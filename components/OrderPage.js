import React from "react";
import Buttons from "./Buttons";

function OrderPage() {
    return (
        <div className="min-h-screen w-full lg:flex justify-between items-center  bg-[#EEEFF1] mt-24 lg:mt-0 ">
            <div className="w-1/2 hidden h-full lg:flex items-center justify-center bg-[url('/bgblur.png')] bg-center bg-contain  ">
                <img
                    src="/coffee-mid.png"
                    alt="Coffee"
                    className=" aspect-auto w-5/6 "
                />
            </div>
            <div className="w-full lg:w-1/2 h-full flex flex-col justify-center items-start lg:px-12 px-8">
                <h2 className="text-5xl font-bold text-gray-800 mb-4 fmodern leading-relaxed ">
                    Order Your <br /> Favourite Coffee
                </h2>
                <div className="lg:w-1/2 h-full lg:hidden flex items-center justify-center bg-[url('/bgblur.png')] bg-center bg-contain  ">
                    <img
                        src="/coffee-mid.png"
                        alt="Coffee"
                        className=" aspect-auto lg:w-5/6 w-full"
                    />
                </div>
                <p className="text-md font-semibold text-gray-600 mb-6">
                    Enjoy the best coffee delivered to your doorstep. Choose
                    from a wide variety of flavors and blends, crafted to
                    perfection for coffee lovers like you.
                </p>
                <ul className="list-disc list-inside text-gray-800 mb-6 ml-10">
                    <li>Freshly brewed coffee</li>
                    <li>Wide range of flavors</li>
                    <li>Fast and reliable delivery</li>
                </ul>
                <div className="lg:mx-8 w-[200px] m-auto ">
                    <Buttons text="Order Now" />
                </div>
            </div>
        </div>
    );
}

export default OrderPage;
