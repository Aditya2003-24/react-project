import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import './App.css'
import img from './IMAGES/mahindra-logo-new.webp'
import { Link } from "react-router-dom";


function NavScrollExample() {



  return (
    <Navbar expand="lg" className="" style={{ backgroundColor: "black" }}>
      <Container fluid>
        <Navbar.Brand href="#" style={{ color: "white" }}>
          <img src={img} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1" style={{ color: "white" }}>
              Home
            </Nav.Link>
            
              
              
              
            <Nav.Link href="#" disabled style={{ color: "white" }}>
              Link
            </Nav.Link>
            <Nav.Link as={Link} to="/car" style={{ color: "white" }}>
              Booking
            </Nav.Link>
            <Nav.Link as={Link} to="/example" style={{ color: "white" }}>
              Singup
            </Nav.Link>
            <Nav.Link as={Link} to="/login" style={{ color: "white" }}>
              Login
            </Nav.Link>
            <Nav.Link as={Link} to="/adm" style={{ color: "white" }}>
              Admin Login
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" style={{ color: "white" }}>
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
