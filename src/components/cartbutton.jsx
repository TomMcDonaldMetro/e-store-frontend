import {Cart} from 'react-bootstrap-icons'

import { useSelector } from 'react-redux';


const ShoppingCartButton = () =>{


  const cart = useSelector(state => state.cart)
  return (
    
    <a>
      <Cart  style={{color: "white"}} />
      <span className="badge text-bg-danger">
        {cart.length}
      </span>
    </a>
    
  );
}

export default ShoppingCartButton;