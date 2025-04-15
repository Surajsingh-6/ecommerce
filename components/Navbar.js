'use client';
import React, { useState } from "react";
import Buttons from "@/components/Buttons";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex justify-between items-center p-2 lg:px-10 px-4 fmodern shadow-md lg:shadow-none relative">
            
            <div>
                <img src="logo.png" alt="Logo" className="lg:h-10 h-12" />
            </div>

            
            <div className="gap-10 font-bold text-md hidden lg:flex">
                <a href="#">Cafe Menu</a>
                <a href="#">About US</a>
                <a href="#">Find Us</a>
                <a href="#">Catering</a>
            </div>

            
            <div className="hidden lg:block">
                <Buttons text="Order Now" />
            </div>

          
            <div className="lg:hidden">
                <button onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <HiOutlineX size={32} /> : <HiOutlineMenuAlt3 size={36} />}
                </button>
            </div>

            {isOpen && (
                <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-start  py-3 space-y-3 lg:hidden z-50">
                    <a href="#" onClick={() => setIsOpen(false) } className="text-center w-full text-xl border-b-2">Cafe Menu</a>
                    <a href="#" onClick={() => setIsOpen(false) } className="text-center w-full text-xl border-b-2">About US</a>
                    <a href="#" onClick={() => setIsOpen(false) } className="text-center w-full text-xl border-b-2">Find Us</a>
                    <a href="#" onClick={() => setIsOpen(false) } className="text-center w-full text-xl border-b-2">Catering</a>
                    <div className="w-1/2 mx-auto ">
                        <Buttons text="Order Now" />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Navbar;
