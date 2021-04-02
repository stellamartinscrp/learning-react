import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import Loader from "../Components/Loader";

function Product() {

    const {id} = useParams()
    const url = `https://60673ad598f405001728e948.mockapi.io/products/${id}`
    const [product, setProduct] = useState({
        loading: false,
        data: null
    })
    let content = null

    useEffect(() => {
        setProduct({
            loading: true,
            data: null,
            error: false
        })

        axios.get(url)
            .then(response => {
                debugger;
                setProduct({
                    loading: false,
                    data: response.data,
                    error: false
                })
            })
            .catch(() => {
                debugger;
                setProduct({
                    loading: false,
                    data: null,
                    error: true
                })
            })
    }, [url])

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

    } else {
        content = <p>teste</p>
    }

    return (
        <div>
            {content}
        </div>
    )
}

export default Product
