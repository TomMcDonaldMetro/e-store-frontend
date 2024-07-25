import OrderSummary from "./ordersummary"
import ShoppingCart from "./shoppingcart"

const Checkout = ({cart}) => {


    return (
        <>
            <ShoppingCart cart={cart} />
            <OrderSummary />
        </>
    )
}

export default Checkout