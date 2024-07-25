import OrderSummary from "./ordersummary"
import ShoppingCart from "./shoppingcart"

const Checkout = ({cart, removeHandler}) => {


    return (
        <>
            <ShoppingCart cart={cart} removeHandler={removeHandler}/>
            <OrderSummary cart={cart}/>
        </>
    )
}

export default Checkout