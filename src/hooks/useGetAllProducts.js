import { useState, useEffect } from 'react'
import axios from 'axios'

const useGetAllProducts = () => {
    const URL = 'https://api.escuelajs.co/api/v1/products';
    const [products, setProducts] = useState()

    useEffect(() => {
        
        axios.get(URL)
            .then(res => setProducts(res.data))
            .catch(error => console.log(error))
    }, [])
    return products;
}

export default useGetAllProducts