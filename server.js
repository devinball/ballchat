const path = require('path');
const express = require('express');
const https = require('http');
const SignalServer = require('react-rtc-real/server/SignalServer.js');

const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '/build')));

// For any request that doesn't match send back index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/build/index.html'));
});

// Adding in a express server to HTTPS to allow HTTPS
const server = https.createServer(
  // {
  //   key: fs.readFileSync(path.resolve(__dirname, './ssl_diane/server.key')),
  //   // // is required to allow localhost to run on HTTPS
  //   // // otherwise you either get an error or a certified invalid warning
  //   cert: fs.readFileSync(path.resolve(__dirname, './ssl_diane/server.crt')),
  // },
  app,
);

// WEBSOCKET SECURED CONNECTION //
// const wss = new WebSocket.Server({ server });
const signal = new SignalServer({ server });
signal.connect();
// const wss = new WebSocket.Server({ port: PORT });

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log('\nListening on PORT: ', port);
});
