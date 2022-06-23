import React from 'react'
import NavBar from './Componenets/Navbar/NavBar';
import './App.css'
import Banner from './Componenets/Banner/Banner';
import RowPost from './Componenets/RowPost/RowPost';
import {originals,action} from './urls'



function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Orginals'/>
      <RowPost url={action} title='Actions' isSmall/>
    </div>
  );
}

export default App;
