import {Cart} from 'react-bootstrap-icons'



const ShoppingCartButton = (props) =>{
  return (
    
    <div>
      <Cart   />
      <span className="badge text-bg-danger">
        {props.cart.length}
      </span>
    </div>
    
  );
}

export default ShoppingCartButton;