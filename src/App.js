//import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import DisplayQuote from './components/DisplayQuote';
import axios from 'axios';
import Spinner from './components/Spinner';

const sampleQuote =
  {
  "quote": "For once maybe someone will call me \"sir\" without adding, \"You're making a scene.\"",
  "character": "Homer Simpson",
  "image": "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939",
  "characterDirection": "Right"
  }


function App() {
  const [quote, setQuote] = useState(sampleQuote);
  const [loading, setLoading] = useState(false);

  const getEmployee = () => { 
    setLoading(true);
    axios
    .get('https://simpsons-quotes-api.herokuapp.com/quotes')
    // Extract the DATA from the received response
    .then((response) => response.data)
    // Use this data to update the state
    .then((data) => {
      setLoading(false);
      setQuote(data[0]);
    });
   
  }

  return (
    <div className="App">
      {loading ? <Spinner /> : <DisplayQuote quote={quote} />}
      <button type="button" onClick={getEmployee}>Get quote</button>
    </div>
  );
}

export default App;
