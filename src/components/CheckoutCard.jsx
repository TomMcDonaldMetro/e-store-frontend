import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { isProduction } from '../utils/urls';
const CheckoutCard = (props) => {
    console.log('props', props)
    const { title, price, genre, description} = props.children

    const baseUrl = isProduction ? `http://localhost:8080/images/` : `/images/`
    const imgTitle = title.replace(/\s/g, '').toLowerCase();

    const {firstName, lastName} = props.children.author

    return (
        <Card>
            <Card.Header as="h5">{title}</Card.Header>
            <div className='d-flex flex-row'>
            <Card.Img variant="top" style={{height: "100px", width: "100px"}} src={`${baseUrl}${imgTitle}.png`} />
            <Card.Body>
                <Card.Text>$ {price}</Card.Text>
                <Card.Text>
                    {genre}
                </Card.Text>
                <Card.Text>
                    by {firstName} {lastName}
                </Card.Text>
            </Card.Body>
            </div>
        </Card>
    )
}

export default CheckoutCard