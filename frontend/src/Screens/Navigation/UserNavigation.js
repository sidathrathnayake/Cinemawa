import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import Form from "react-bootstrap/Form";
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Button from 'react-bootstrap/Button';

// frontend variables
import {
  // Colors,
  FrontendAPI,
  NavigationText,
  // Radius,
} from "../../Utils/frontend_variables";

function UserNavigation() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href={FrontendAPI.FRONTEND_API_HOME}>
          {NavigationText.NAVIGATION_CINEMAWA}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href={FrontendAPI.FRONTEND_API_MOVIES}>
              {NavigationText.NAVIGATION_TEXT}
            </Nav.Link>
            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
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
          </Nav>
          <Nav
            style={{
              fontWeight: "bold",
            }}
          >
            {/* <Form className="d-flex">
                  <Form.Control
                    style={{backgroundColor:`${Colors.COLORS_DARK_GRAY}`, borderRadius:`${Radius.RADIUS_SEARCH_BAR}`, color:`${Colors.COLORS_WHITE}`}}
                    type="search"
                    placeholder={NavigationText.NAVIGATION_TEXT_SEARCH}
                    className="me-2"
                    aria-label="Search"
                  />
            </Form> */}
            <Nav.Link href={FrontendAPI.FRONTEND_API_HOME}>
              {NavigationText.NAVIGATION_TEXT_HOME}
            </Nav.Link>
            <Nav.Link href={FrontendAPI.FRONTEND_API_TRENDING}>
              {NavigationText.NAVIGATION_TEXT_TRENDING}
            </Nav.Link>
            <Nav.Link href={FrontendAPI.FRONTEND_API_MOVIES}>
              {NavigationText.NAVIGATION_TEXT_MOVIES}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default UserNavigation;
