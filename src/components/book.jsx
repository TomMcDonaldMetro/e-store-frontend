import Card from 'react-bootstrap/Card';
import { isProduction } from '../utils/urls';
import React from 'react';
import { Button } from 'react-bootstrap';

const Book = ({book, handler, message}) => {

   const imgTitle = book.title.replace(/\s/g, '').toLowerCase();
   const baseUrl = isProduction ? `http://localhost:8080/images/` : `/public/images/`
   
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
      <Button variant="dark" onClick={()=>{handler(book.id)}}>{message}</Button>

      </Card.Body>
    </Card>
  );
}


export default Book