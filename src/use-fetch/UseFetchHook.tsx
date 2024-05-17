import { useCallback, useEffect, useState } from "react";

interface Product {
    id: number;
    title: string;
    products: Product[]
}

const UseFetchHook = (url: string) => {
    const [data, setData] = useState<Product>();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | undefined>();

    const fetchData = useCallback(async () => {
        setLoading(true)
        try {
            const response = await fetch(url)
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            const data = await response.json()
            setData(data)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            let message;
            if (error instanceof Error)
                message = error.message
            else
                message = String(error)
            setError(message)
        }
    }, [url])

    console.log(data);

    useEffect(() => {
        fetchData()
    }, [url, fetchData])
    return { data, loading, error }
}

export default UseFetchHook;