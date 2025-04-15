import React from "react";
import Buttons from "@/components/Buttons";
function Navbar() {
    return (
        <div className="flex justify-between items-center  p-2 px-10  ">
            <div>
                <img src="logo.png" alt="" className="h-10" />
            </div>
            <div className="flex gap-10 font-bold font-mono text-lg">
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
            <div>
                <Buttons text="Order Now" />
            </div>
        </div>
    );
}

export default Navbar;
