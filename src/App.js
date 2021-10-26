import logo from './logo.svg';
import './App.css';
import {Form }from 'react-bootstrap'
function App() {
  return (
    <div >
      <h1>Checkpoint react</h1>
      <>
  <Form.Control size="lg" type="text" placeholder="Large text" />
  <br />
  <Form.Control type="text" placeholder="Normal text" />
  <br />
  <Form.Control size="sm" type="text" placeholder="Small text" />
</>
    </div>
  );
}

export default App;
