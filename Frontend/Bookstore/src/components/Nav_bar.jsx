import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Logout from './Logout';
import { useAuth } from '../context/useAuth';



export default function Nav_bar() {

  const[authUser,]=useAuth();
  

  return (
    <div  >

      <Navbar expand="sm" className="sticky-top container-fluid  bg-warning" style={{ position: 'absolute', top: "0" ,paddingRight:"30px"}} >
        <Container fluid >
          <Navbar.Brand href="#"><b><h4>BOOK LAND</h4></b></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" >
            <Nav className="me-auto my-2 my-lg-0" navbarScroll  >
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/Books">Books</Nav.Link>
              <Nav.Link href="#action1">About</Nav.Link>
              <Nav.Link href="#action1">Contact Us</Nav.Link>


            </Nav>
            <Form className="d-none d-lg-flex" expand="lg" style={{ height: "35px", paddingRight: "60px" }}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
               </Form>
               {
               
                
                authUser? <Logout/>: <Link to="/Login">
              
                <Button

                  style={{ backgroundColor: "darkblue", color: "white", width: "70%", height:"40px",paddingRight:"80px" }}>
                    <FontAwesomeIcon icon={faRightToBracket} />
                  Log In
                </Button>
              </Link>
               }
             

           
          </Navbar.Collapse>
        </Container>
      </Navbar>


    </div>
  )

}
