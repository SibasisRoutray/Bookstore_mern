import { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import toast from 'react-hot-toast';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:4001/user/login', { email, password });

      // backend sends user data on successful login
      const { user, message } = response.data;

      // Store user details in local storage
      localStorage.setItem('user', JSON.stringify(user));
      toast.success(message);

      // Redirect to Home page
      navigate('/');
    } catch (err) {
      console.error('Error:', err); 
      toast.error(err.response?.data?.message || 'An error occurred');
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Row className="w-100">
        <Col md={12} lg={12} className="mx-auto">
          <div className="login-container p-4">
            <h2 className="login-title mb-4 text-center">Login</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>
              <br />
              
              <Button variant="primary" type="submit" className="w-100">
                Login
              </Button>
              <br /><br />
              <span>Dont have an account?</span>
              <Link to="/Signup">
                <Button variant="secondary" className="w-50">
                  Sign up
                </Button>
              </Link>
              &nbsp;&nbsp;&nbsp;
              <Link to='/'>
                <FontAwesomeIcon icon={faHouse} /> Home
              </Link>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
