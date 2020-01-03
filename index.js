const express = require('express')
const app = express()
const port = 3000
let response = true;

app.get('/status', (req, res) =>  {
  if(response) {
    return res.send('It\'s Ok!');
  } else {
    return res.status(500).send();
  }
});

app.get('/kill', (req, res) => {
  response = false;
  return res.send('Killed');
})

setTimeout( () => startServer() , 10000);

function startServer() {
  app.listen(port, () => console.log(`Example app listening on port ${port}!`))
}