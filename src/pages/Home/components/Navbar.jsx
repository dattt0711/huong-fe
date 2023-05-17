import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Form } from "react-router-dom";
import { Link } from "react-router-dom";

function NavbarCommon() {
  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        zIndex: "100",
        background: "#141b2d",
        width: "100%",
        opacity: "0.9",
        boxShadow: 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px',
      }}
    >
      <Navbar expand="lg my-2" >
        <Container>
          <Navbar.Brand className="color-white" href="#home">My Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form> */}
              <Nav.Link href="" >
                <Link to="/" className="color-white" style={{ textDecoration: 'none' }}>Trang chủ</Link>
              </Nav.Link>

              <Nav.Link>
                <Link to="/product" className="color-white" style={{ textDecoration: 'none' }}>Sản phẩm</Link>
              </Nav.Link>
              {/* <NavDropdown title="Sản phẩm" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
              {/* <Nav.Link href="#link">
                <Link to="/news" className="color-white" style={{ textDecoration: 'none' }}>Tin tức</Link>
              </Nav.Link> */}
              <Nav.Link>
                <Link to="/contact" className="color-white" style={{ textDecoration: 'none' }}>Liên hệ</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarCommon;
