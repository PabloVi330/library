import React, { useState, useContext, useEffect } from 'react';
import '@styles/ProductList.scss'
import ProductItem from '@components/ProductItem';
import useGetAllProducts from '../hooks/useGetAllProducts';
import ProductInfo from '../components/ProductInfo';
import AppContext from '../context/AppContext';


const ProductList = () => {
    const [modal, setModal] = useState(false)
    const [filterProducts, setFilterProducts] = useState()    


    const { stateSerch,stateInfo,state } = useContext(AppContext)

    const products = useGetAllProducts();

    console.log(modal)
    useEffect(() => {    
    },[stateInfo])


    const filterData = () =>{
        const filterP = products?.filter(product => product.title.includes(stateSerch))
        setFilterProducts(filterP)
    }

    useEffect(() => {
        filterData()
    
    }, [stateSerch])

    return (
        <section className="main-container">
             
            <div className="cards-container">
                {
                    filterProducts?
                        filterProducts?.map(product => (
                            <ProductItem
                                key={'f'+product.id}
                                product={product}
                                setModal={setModal} />

                        ))

                        : products?.map(product => (
                            <ProductItem
                                key={'p'+product.id}
                                product={product}
                                setModal={setModal} />

                        ))}
            </div>

            { modal && <ProductInfo
                stateInfo={stateInfo}
                setModal={setModal}
                />} 
          



        </section>
    )
}

export default ProductList