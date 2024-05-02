import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Book = ({book, handler}) => {

   const baseUrl = 'http://localhost:8080/images/'
   const imgTitle = book.title.replace(/\s/g, '').toLowerCase();

   console.log(book)

   return (
    <Card bg="secondary" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`${baseUrl}${imgTitle}.png`} alt="book_image"/>
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
      </Card.Body>
      <Card.Text>
         ${book.price}
        </Card.Text>
        <Card.Text>
          Genre: {book.genre}
        </Card.Text>
      <Card.Body>
      <Button variant="dark" onClick={handler}>Add to Cart</Button>

      </Card.Body>
    </Card>
  );
}


export default Book