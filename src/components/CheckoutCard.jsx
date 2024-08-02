import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CheckoutCard = (props) => {

    const { title, price, genre, description} = props.children
    return (
        <Card>
        <Card.Header as="h5">item</Card.Header>
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
                text
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        </Card>
    )
}

export default CheckoutCard