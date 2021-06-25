import logo from './logo.svg';
import './App.css';
import Profile from './Profil/Profile.js';
import Avatar from './Profil/Avatar.png';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Container fluid="md">
  <Row>
    <Col>Biographie juin 2020</Col>
  </Row>
</Container>
<>
  <Button href="#">Link</Button> <Button type="submit">acceuil</Button>{' '}
  
  
</>
     <div><Profile>{Avatar}</Profile></div>
      </header>
      <p style={{textAlign:'center'}}>© Copyright 2021 </p>
    </div>
  );
}

export default App;
