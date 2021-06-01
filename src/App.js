import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Header from './components/header/Header.jsx'
import Home from './components/home/Home.jsx'
import Battle from './components/battle/Battle.jsx'
import Gallery from './components/gallery/Gallery.jsx'


function App() {
  const [data, setData] = useState([])

  useEffect(() => {

    const getHamsters = async () => {
      try {
        const response = await axios.get('http://localhost:1111/hamsters')
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    getHamsters()
  }, [])

  return (
    <Router>
      <div className="App">
        <header>
          {sessionStorage.getItem('enter') ? <Header /> : ''}
        </header>
        <main>
          <Switch>
            <Route path="/battle"><Battle /></Route>
            <Route path="/gallery"><Gallery hamsters={data} /></Route>
            <Route path="/statistics"></Route>
            <Route path="/history"></Route>
            <Route path="/"><Home /></Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
