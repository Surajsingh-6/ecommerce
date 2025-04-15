import React from "react";
import Buttons from "@/components/Buttons";
function Navbar() {
    return (
        <div className="flex justify-between items-center p-2 lg:px-10 fmodern shadow-md lg:shadow-none ">
            <div>
                <img src="logo.png" alt="" className="lg:h-10  h-12 " />
            </div>
            <div className=" gap-10 font-bold  text-md hidden lg:flex">
                <div>
                    <a href="#">Cafe Menu</a>
                </div>
                <div>
                    <a href="#">About US</a>
                </div>
                <div>
                    <a href="#">Find Us</a>
                </div>
                <div>
                    <a href="#">Catering</a>
                </div>
            </div>
            <div className="hidden lg:block">
                <Buttons text="Order Now" />
            </div>
        </div>
    );
}

export default Navbar;
