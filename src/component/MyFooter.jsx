import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const MyFooter = () => {
    return (
        <Navbar  bg="dark" data-bs-theme="dark"  className="mt-auto">
          <Container fluid className='justify-content-center'>
                <Navbar.Brand href="#">EpiBooks</Navbar.Brand>
                <Nav>
                    <Nav.Link href="#">Libri Fantasy</Nav.Link>
                    <Nav.Link href="#">Negozi</Nav.Link>
                    <Nav.Link href="#">Servizi</Nav.Link>
                </Nav>
          </Container>
        </Navbar>
      );
}

export default MyFooter