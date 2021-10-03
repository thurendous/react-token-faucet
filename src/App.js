import "./App.css";
import MYToken from "./artifacts/contracts/MYToken.sol/MYToken.json";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Faucet from "./components/Faucet.jsx";
import Tokensend from "./components/Tokensend.jsx";

function App() {
  const Token = MYToken;

  return (
    <div className="App">
      <Container>
        <Row className="justify-content-md-center">
          <Col sm={7}>
            {/* <div>Our Faucet</div> */}
            <Faucet tokenContract={Token} />
          </Col>
          <Col sm={5}>
            <Tokensend tokenContract={Token} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
