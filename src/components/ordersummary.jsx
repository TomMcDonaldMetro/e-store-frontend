import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const OrderSummary = () => {

    const cart = [15.99, 13.99]
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
            <Button variant="secondary" onClick={()=> {console.log("checkout pressed")}}>Checkout</Button>
        </Card.Body>
    </Card>
    )
}

export default OrderSummary