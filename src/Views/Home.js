import React, {useEffect, useState} from 'react'
import Loader from "../Components/Loader";
import ProductCard from "../Components/ProductCard";
import {useAxiosGet} from "../Hooks/HttpRequests";

function Home() {

    const url = 'https://60673ad598f405001728e948.mockapi.io/products?page=1&limit=10'

    let products = useAxiosGet(url)

    let content = null

    if (products.error) {
        content = <p className="text-center">Ops! Alguma coisa deu errado. Recarregue a página ou tente novamente mais
            tarde</p>
    }

    if (products.loading) {
        content = <Loader/>
    }

    if (products.data) {

        content = products.data.map((product) =>
            <div key={product.id}>
               <ProductCard product={product} />
            </div>

        )
    }

    return (
        <div>
            <h1 className="text-2xl">Mais vendidos</h1>
            {content}
        </div>
    )
}

export default Home
