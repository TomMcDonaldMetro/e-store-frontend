import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ShoppingCartButton from './cartbutton'

const StoreHeader = ({inputHandler, buttonHandler, cart}) => {


    return (
		<Navbar expand="lg" className="bg-body-tertiary" fixed="top" data-bs-theme="dark">
		  <Container fluid>
			<Navbar.Brand href="#">E-Store</Navbar.Brand>
			<Navbar.Toggle aria-controls="navbarScroll" />
			<Navbar.Collapse id="navbarScroll">
			  <Nav
				className="me-auto my-2 my-lg-0"
				style={{ maxHeight: '100px' }}
				navbarScroll
			  >
				<Nav.Link href="#action1">Home</Nav.Link>
				<Nav.Link href="#action2">Link</Nav.Link>
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
				  onChange={inputHandler}
				/>
				<Button variant="outline-success" onClick={buttonHandler}>Search</Button>
			  </Form>
			  <Navbar.Text>
			  	<Button variant="dark" onClick={() => console.log("button currently just for show")}>Sign In</Button>
         	 </Navbar.Text>
			 <Navbar.Text>
			 <ShoppingCartButton cart={cart}/>
			 </Navbar.Text>
			</Navbar.Collapse>
			
		  </Container>
		  
		</Navbar>
	  );
}

export default StoreHeader