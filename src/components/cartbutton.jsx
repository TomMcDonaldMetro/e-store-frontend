import {Cart} from 'react-bootstrap-icons'

import { useSelector } from 'react-redux';


const ShoppingCartButton = () =>{


  const cart = useSelector(state => state.cart)
  return (
    
    <div>
      <Cart   />
      <span className="badge text-bg-danger">
        {cart.length}
      </span>
    </div>
    
  );
}

export default ShoppingCartButton;