import { useEffect, useState } from "react"

export const useFetch = (url) => {

    const [products, setProduct] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchProduct = async () => {
            setLoading(true)
            const response = await fetch(url)
            const data = await response.json()
            setLoading(false)
            setProduct(data)
        }
        fetchProduct()
    }, [url])



    return { products, loading }

}
