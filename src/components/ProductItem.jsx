import React,{useContext} from 'react'
import car from '@icons/bt_add_to_cart.svg';
import AppContext from '../context/AppContext';

const ProductItem = ({product,setModal}) => {
const {setInfo,addToCart} = useContext(AppContext)
      
  const handleClick = (item) =>{
    setModal(true)
    setInfo(item)
  }

  const handdleClikAdd = (item) => {
    addToCart(item)
  } 


  return (
    <div className="product-card">
       <img src={product.images[0]} onClick={()=>handleClick(product)}/>
        <div className="product-info">
          <div>
            <p>{product.price}</p>
            <p>{product.title}</p>
          </div>
          <figure onClick={()=>handdleClikAdd(product)}>
            <img src={car} />
          </figure>
        </div>
      </div>
  )
}

export default ProductItem