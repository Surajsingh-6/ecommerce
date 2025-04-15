import React from 'react';
import Link from 'next/link'; 

function Footer() {
    return (
        <footer className=" text-gray-600 ">
            
                <div className="text-center text-sm text-gray-500 border-t border-gray-200">
                    &copy; {new Date().getFullYear()} Alowishus. All Rights Reserved.
                </div>
        </footer>
    );
}

export default Footer