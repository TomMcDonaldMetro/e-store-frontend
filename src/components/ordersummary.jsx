import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
const OrderSummary = ({cart}) => {

    // handles the crash but needs implemented logic for blocking the cart if theres no order.
    if(cart.length === 0) return;
    
    cart = cart.map(product => product.price)
    const price = cart.reduce((accumulator, current)=> accumulator + current)
    const shipping = 5.99
    const tax = 0.00;
    const total = price + shipping + tax



    return (
    <Card style={{ width: '22rem' }}>
        <Card.Title>Order Summary</Card.Title>
        <Card.Body>
            <Card.Text>Subtotal {`(${cart.length})`} item(s): ${price}</Card.Text>
            <Card.Text>Estimated Shipping: ${shipping}</Card.Text>
            <Card.Text>Estimated Tax: ${tax}</Card.Text>
            <Card.Text>Order Total: ${total}</Card.Text>
            <Link to='/credentials'><Button variant="secondary" onClick={()=> {console.log("checkout pressed")}}>Checkout</Button></Link>
        </Card.Body>
    </Card>
    )
}

export default OrderSummary