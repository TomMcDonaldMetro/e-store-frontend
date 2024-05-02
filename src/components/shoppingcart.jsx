import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Book from './book'

const ShoppingCart = ({cart}) => {
    console.log(cart)

    return (
        <Row xs={1} md={1} className="g-4">
          {cart.map(book => (
            <Col key={book.title}>
              <Book book={book} handler={()=>{}} /> 
            </Col>
          ))}
        </Row>
      );
}

export default ShoppingCart