import './App.css';
import FullName from './Profile/FullName';
import Address from './Profile/Address';
import ProfilePhoto from './Profile/ProfilePhoto';
import {Card, CardGroup} from 'react-bootstrap'




function App() {
  return (
    <div className="App">
      <CardGroup className='styles'>
  <Card>
  <div style={{borderRadius:"50%"}}>
    <ProfilePhoto  /></div>
    <Card.Body>
      <Card.Title>
      <FullName />
      </Card.Title>
      <Card.Text>
      <Address />
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  </CardGroup>

      {/* <FullName />
      <Address /> */}
     
      


    </div>
  );
}

export default App;
