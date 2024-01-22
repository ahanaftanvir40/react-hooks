import { useEffect, useState } from "react"

export const useFetch = (url) => {

    const [products, setProduct] = useState(null)

    useEffect(() => {
        const fetchProduct = async () => {
            const response = await fetch(url)
            const data = await response.json()
            setProduct(data)
        }
        fetchProduct()
    }, [url])



    return { products }

}
