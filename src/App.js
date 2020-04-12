import React from 'react';
import RTCMesh from 'react-rtc-real';
import './App.css';

require('react-rtc-real/assets/index.css');

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Ball Chat
      </header>
      <RTCMesh URL="wss://" />
    </div>
  );
}

export default App;
