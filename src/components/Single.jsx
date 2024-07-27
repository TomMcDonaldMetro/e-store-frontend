import { useParams, useMatch, Link } from "react-router-dom"
import { useSelector } from "react-redux"
import Book from "./book"
import { Card } from "react-bootstrap"
import '../App.css'


const Single = () => {

    const Overview = ({book}) => {


        return(
            <div className="overview">
                <h3><i>Overview</i></h3>
                <p>{book.description} </p>
            </div>
        )
        
    }

    // temporary heading think of better component name
    const SingleBookView = ({book}) => {

        const cardStyle = {
            width: "49%",
        };

        console.log('bookinsingle',book)
        const author = book.author.firstName + ' ' + book.author.lastName
        const authorLink = (book.author.firstName + book.author.lastName).toLowerCase()
        return (
            
                <Card style={cardStyle}>
                  <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">By <Link to={`/author/${authorLink}`} >{author}</Link></Card.Subtitle>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                  </Card.Body>
                </Card>
        
        );
    }

    // this is supposed to be a more detailed post when you select a specific book title.
    const books = useSelector(state => state.books)
    const match = useMatch('/books/:id')
    const book = books.find(book => book.id === match.params.id)
    console.log(book)
    // put it in the cart as well
  const handler = (event) => {
    event.preventDefault()
  }
    return (
        <div>
            <div className="view-container">
                <Book book={book} handler={handler} message={"add to cart"} />
                <SingleBookView book={book}/>
            </div>
            <Overview book={book} />
        </div>
    )
}

export default Single