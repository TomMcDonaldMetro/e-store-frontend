import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Book from './book'
import { useDispatch, useSelector } from 'react-redux';
import { removeCart } from '../reducers/cartReducer';

const ShoppingCart = () => {

  const cart = useSelector(state => state.cart)
  console.log('cartt', cart)
  const dispatch = useDispatch()

  const removeHandler = (event) => {
    dispatch(removeCart(event))
  }
    
    return (
        <Row xs={1} md={1} className="g-4">
          {cart.map(book => (
            <Col key={book.title}>
              <Book book={book} handler={()=> removeHandler(book)} message={'remove from cart'} /> 
            </Col>
          ))}
        </Row>
      );
}

export default ShoppingCart