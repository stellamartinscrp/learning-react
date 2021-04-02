import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import Loader from "../Components/Loader";
import {useAxiosGet} from "../Hooks/HttpRequests";

function Product() {

    const {id} = useParams()
    const url = `https://60673ad598f405001728e948.mockapi.io/products/${id}`

    let content = null

    let product = useAxiosGet(url)

    if(product.error){
        content = <p className="text-center">
            Ops! Alguma coisa deu errado. Recarregue a página ou tente novamente mais tarde
        </p>
    }

    if(product.loading){
        content = <Loader />
    }

    if (product.data) {
        content =
            <div>
                <h1 className="font-bold text-xl mb-3">{product.data.name}</h1>
                <div>
                    <img src={product.data.images ? product.data.images[0].imageUrl : null} alt={product.data.name}/>
                </div>
                <div className="font-bold text-xl mb-3">
                    R$ {product.data.price}
                </div>
                <div>
                    {product.data.description}
                </div>
            </div>

    }

    return (
        <div>
            {content}
        </div>
    )
}

export default Product
