import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ShoppingCartButton from './cartbutton'
import DropdownShopping from './DropdownShopping';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeFilter, setFilter } from '../reducers/filterReducer';
import { Dropdown } from 'react-bootstrap';

const StoreHeader = () => {
const navigate = useNavigate()

const [search, setSearch] = useState('')
const dispatch = useDispatch()


  const books = useSelector(state => state.books)
  // set a search state variable by the nav bar search input
  const navSearchHandler = (event) => {
    setSearch(event.target.value)
  }

  // search by title using includes
  // returns a filtered list of books to display
  const navButtonHandler = event => {
    event.preventDefault()
    const booklist = books.filter(book=>book.title.toLowerCase().includes(search))
	console.log('booklist', booklist)
	dispatch(setFilter(search))

	// if the list is length 1 just show the page if we'd have clicked directly on it.
	if(booklist.length === 1){
		navigate(`/books/${booklist[0].id}`);
	}	
  }

  

    return (
		<Navbar expand="lg" className="bg-body-tertiary" fixed="top" data-bs-theme="dark">
		  <Container fluid>
			<Navbar.Brand as={Link} to="/">E-Store</Navbar.Brand>
			<Navbar.Toggle aria-controls="navbarScroll" />
			<Navbar.Collapse id="navbarScroll">
			  <Nav
				className="me-auto my-2 my-lg-0"
				style={{ maxHeight: '100px' }}
				navbarScroll
			  >
				<Nav.Link as={Link} to="/">Home</Nav.Link>
				<Nav.Link as={Link} to="/link">Link</Nav.Link>
				<NavDropdown title="Link" id="navbarScrollingDropdown">
				  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
				  <NavDropdown.Item href="#action4">
					Another action
				  </NavDropdown.Item>
				  <NavDropdown.Divider />
				  <NavDropdown.Item href="#action5">
					Something else here
				  </NavDropdown.Item>
				</NavDropdown>
				<Nav.Link href="#" disabled>
				  Link
				</Nav.Link>
			  </Nav>
			  <Form className="d-flex">
				<Form.Control
				  type="search"
				  placeholder="Search"
				  className="me-2"
				  aria-label="Search"
				  onChange={navSearchHandler}
				/>
				<Button variant="outline-success" onClick={navButtonHandler}>Search</Button>
			  </Form>
			  <Navbar.Text>
			  	<Link to='/signin'><Button variant="dark">Sign In</Button></Link>
         	 </Navbar.Text>
			  

			  <DropdownShopping />

			 
			</Navbar.Collapse>
			
		  </Container>
		  
		</Navbar>
	  );
}

export default StoreHeader