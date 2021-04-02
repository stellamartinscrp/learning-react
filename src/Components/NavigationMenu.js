import React from 'react'
import {Link} from "react-router-dom"


function NavigationMenu(props) {
    return (
        <div>
            <div className="font-bold py-3">
                Menu
            </div>
            <ul>
                <li>
                    <Link
                        to="/"
                        onClick={props.closeMenu}
                        className="text-red-600 py-3 border-t border-b block">
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        to="/sobre"
                        onClick={props.closeMenu}
                        className="text-red-600 py-3 border-b block">
                        Sobre
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default NavigationMenu
