import { useEffect, useState } from "react"

export const useFetch = (url) => {

    const [products, setProduct] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        const fetchProduct = async () => {
            setLoading(true)

            try {
                const response = await fetch(url)
                console.log(response);

                if (!response.ok) {
                    throw new Error(response.statusText)
                }

                const data = await response.json()
                setLoading(false)
                setProduct(data)
                setError('') //if everything works just fine error is empty
            } catch (error) {
                setLoading(false)
                setError((error.message))
                //console.log(error.message)
            }

        }
        fetchProduct()
    }, [url])



    return { products, loading, error }

}
