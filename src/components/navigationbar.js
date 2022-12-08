import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/gel.png';

function navigationbar () {
    return (
      <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="http://localhost:3000/">
          <img
              src={logo}
              alt=""
              width="40"
              height="40"
              className="d-inline-block align-top"
            />{' '}
            React Coin Store
          </Navbar.Brand>
        </Container>
      </Navbar>
      </div>
      );}
export default navigationbar;