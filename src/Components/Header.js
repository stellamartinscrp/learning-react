import React from 'react';
import Navigation from "./Navigation";

function Header(){
    return (
        <header className="bg-red-600 p-3 flex justify-between">
            <span className="font-bold text-white">App</span>

            <Navigation />

        </header>

    )
}

export default Header
