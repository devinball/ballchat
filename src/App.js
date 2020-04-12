import React from 'react';
import RTCMesh from 'react-rtc-real';
import './App.css';

require('react-rtc-real/assets/index.css');

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RTCMesh URL="wss://" />
      </header>
    </div>
  );
}

export default App;
