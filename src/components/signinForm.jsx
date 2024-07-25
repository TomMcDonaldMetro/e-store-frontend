import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useField } from '../hooks';
const SigninForm = () => {

  const email = useField('text')
  const pass = useField('password')

  const signInHandler = (event) => {
    event.preventDefault()
    console.log(email.value)
    console.log(pass.value)
    if(verify(email.value, pass.value)){
      
    }
  }

    return (
        <Form onSubmit={signInHandler}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control {...email} />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control {...pass} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      );

}

export default SigninForm