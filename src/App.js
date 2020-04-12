import React from 'react';
import RTCMesh from 'react-rtc-real';
import './App.css';

require('react-rtc-real/assets/index.css');

function App() {
  return (
    <div className="App">
      <h1>
        Ball Chat
      </h1>
      <RTCMesh URL="wss://ballchat.herokuapp.com" />
    </div>
  );
}

export default App;
