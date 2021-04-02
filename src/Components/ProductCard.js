import React from 'react'
import {
    Link
} from "react-router-dom";

function ProductCard(props) {
    return (
        <div className="flex justify-center items-center mb-3">
            <div
                className="flex flex-col justify-between w-72
                sm:w-96 h-96 bg-white bg-center text-gray-800 shadow-md overflow-hidden cursor-pointer"
                style={{
                    backgroundImage: `url("${props.product.images[0].imageUrl}")`
                }}
               >
                <div className="flex justify-between items-center ml-4 pr-8">
                    <div
                        className="bg-red-600 text-white bg-opacity-95 shadow px-2 py-1 flex items-center font-bold text-xs rounded">
                        {props.product.material}
                    </div>
                    <div
                        className="bg-red-600 shadow flex flex-col-reverse p-4 text-center font-bold text-white rounded-b-full">
                        R$ {props.product.price}
                    </div>
                </div>
                <Link to={`/produto/${props.product.id}`}>
                    <div className="bg-white bg-opacity-95 shadow-md rounded-r-xl p-4 flex flex-col mr-4 mb-8">
                        <h3 className="text-xl font-bold pb-2">{props.product.name}</h3>
                        <p className="truncate text-gray-500 text-sm">{props.product.description}</p>
                        {/*<div className="flex justify-between items-center">*/}
                        {/*    <span className="text-gray-400 text-xs">Have a nice year...</span>*/}
                        {/*</div>*/}
                    </div>
                </Link>

            </div>
        </div>
    )
}

export default ProductCard
