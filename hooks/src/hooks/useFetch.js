import { useEffect, useRef, useState } from "react"

export const useFetch = (url, _body) => {

    const [products, setProduct] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const body = useRef(_body) //we need to use useRef we pass what we passed on the main func

    useEffect(() => {
        const controller = new AbortController() //create a controller
        const fetchProduct = async () => {
            setLoading(true)



            try {
                const response = await fetch(url, { signal: controller.signal }) //pass the info
                console.log(response);

                if (!response.ok) {
                    throw new Error(response.statusText)
                }

                const data = await response.json()
                setLoading(false)
                setProduct(data)
                setError('') //if everything works just fine error is empty
                console.log('-----');
            } catch (error) {
                setLoading(false)
                setError((error.message))
                //console.log(error.message)
            }

        }
        fetchProduct()
        return () => controller.abort() //abort it //main goal is to stop our fetch
    }, [url, body])



    return { products, loading, error }

}
