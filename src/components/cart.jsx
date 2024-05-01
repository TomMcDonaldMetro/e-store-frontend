import {Cart} from 'react-bootstrap-icons'

const ShoppingCart = (props) =>{
    console.log(props)
  return (
    <>
    <a href={'#'}onClick={()=>{console.log("clicked the cart button")}}>
    <Cart   />
  <span class="badge text-bg-danger">
    {props.cart.length}
  </span>
  </a>
    </>
  );
}

export default ShoppingCart;