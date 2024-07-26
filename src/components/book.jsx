import Card from 'react-bootstrap/Card';
import { isProduction } from '../utils/urls';
import React from 'react';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addCart } from '../reducers/cartReducer';

const Book = ({handler, book, message}) => {



   const imgTitle = book.title.replace(/\s/g, '').toLowerCase();
   const baseUrl = isProduction ? `http://localhost:8080/images/` : `/public/images/`
   


   return (
    <Card bg="secondary" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`${baseUrl}${imgTitle}.png`} alt="book_image"/>
        <Card.Body>
          <Link to={`/books/${book.id}`}><Card.Title>{book.title}</Card.Title> </Link>
        </Card.Body>
        <Card.Text>
          ${book.price}
          </Card.Text>
          <Card.Text>
            Genre: {book.genre}
          </Card.Text>
      <Card.Body>

      <Button variant="dark" onClick={handler}>{message}</Button>

      </Card.Body>
    </Card>
  );
}


export default Book