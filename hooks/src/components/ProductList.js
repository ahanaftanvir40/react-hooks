//import { useCallback, useEffect, useState } from "react"
import { useFetch } from "../hooks/useFetch"
import { useState } from "react"

export const ProductList = () => {



    const [url, setUrl] = useState('http://localhost:8000/products')

    const { products, loading, error } = useFetch(url, { content: "ABC" }) // we can also do {products : data} to name it something else

    //const [count, setCount] = useState(0)

    //console.log(products);

    // const fetchProduct = useCallback(async () => {
    //   const response = await fetch(url)
    //  const data = await response.json()
    //  setProducts(data)
    // }, [url])

    //useEffect(() => {
    //fetch(url)
    //.then(response => response.json()) //ignore while learning callback
    // .then(data => setProducts(data)) //ignore while learning callback
    // fetchProduct()

    //}, [fetchProduct])

    //useEffect(() => {
    //console.log(count)
    //}, [count])


    return (
        <section>
            <div className="filter">
                {/*<button onClick={() => setCount(count + 1)}>{count}</button>*/}

                <button onClick={() => setUrl('http://localhost:8000/products')}>All</button>
                <button onClick={() => setUrl('http://localhost:8000/products?in_stock=true')}>In Stock</button>

            </div>
            {loading && <p>loading products......</p>}
            {error && <p>{error}</p>}
            {/* because initially propduct is null so it is neither true or false so if it is true we map*/}
            {products && products.map((product) => (
                <div className="card" key={product.id}>
                    <p className="id">{product.id}</p>
                    <p className="name">{product.name}</p>
                    <p className="info">
                        <span>{product.price}$</span>
                        <span className={product.in_stock === 'true' ? 'instock' : 'unavailable'}>{product.in_stock === 'true' ? 'In Stock' : 'Unavailable'}</span>
                    </p>
                </div>

            ))}
        </section>
    )
}
