import React, {useEffect, useState} from 'react'
import axios from "axios";
import Loader from "../Components/Loader";
import ProductCard from "../Components/ProductCard";

function Home() {

    const url = 'https://60673ad598f405001728e948.mockapi.io/products?page=1&limit=10'
    const [products, setProducts] = useState({
        loading: false,
        data: null,
        error: false
    })

    useEffect(() => {
        setProducts({
            loading: true,
            data: null,
            error: false
        })

        axios.get(url)
            .then(response => {
                setProducts({
                    loading: false,
                    data: response.data,
                    error: false
                })
            })
            .catch(() => {
                setProducts({
                    loading: false,
                    data: null,
                    error: true
                })
            })
    }, [url])

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
