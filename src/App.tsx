import React from 'react';
import './App.css';
import CouplePicture from './components/CouplePicture';
import Info from './components/Info';
import RSVP from './components/RSVP';

function App() {
  return (
    <div className="App">
      <header>
        <CouplePicture/>
      </header>
      <main>
        <Info/>
        <RSVP/>
      </main>
    </div>
  );
}

export default App;
