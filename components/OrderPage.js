import React from "react";
import Buttons from "./Buttons";

function OrderPage() {
    return (
        <div className="h-screen w-full flex justify-between items-center bg-[#EEEFF1]">
            <div className="w-1/2 h-full flex items-center justify-center bg-[url('/bgblur.png')] bg-center bg-contain  " >
                <img src="/coffee-mid.png" alt="Coffee" className=" aspect-auto w-5/6 " />
            </div>
            <div className="w-1/2 h-full flex flex-col justify-center items-start px-12">
                <h2 className="text-5xl font-bold text-gray-800 mb-4">
                    Order Your <br /> Favourite Coffee
                </h2>
                <p className="text-md font-semibold text-gray-600 mb-6">
                    Enjoy the best coffee delivered to your doorstep. Choose from a wide variety of flavors and blends, crafted to perfection for coffee lovers like you.
                </p>
                <ul className="list-disc list-inside text-gray-800 mb-6">
                    <li>Freshly brewed coffee</li>
                    <li>Wide range of flavors</li>
                    <li>Fast and reliable delivery</li>
                </ul>
                <div className="mx-8 w-[200px]">
                    <Buttons text="Order Now" />
                </div>
            </div>
        </div>
    );
}

export default OrderPage;
