import OrderSummary from "./ordersummary"
import ShoppingCart from "./shoppingcart"
import { useSelector } from "react-redux"

const Checkout = () => {

    const cart = useSelector(state => state.cart)

    return (
        <>
            <ShoppingCart cart={cart}/>
            <OrderSummary cart={cart}/>
        </>
    )
}

export default Checkout