import express from 'express';
const fs = require('fs');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`Welcome! I'm ${process.env.name}. I'm ${process.env.age}`);
});

app.get('/secrets', (req, res) => {
  res.send(
    `Secrets:! username: ${process.env.username}. password ${process.env.password}`
  );
});

app.get('/configmap', (req, res) => {
  let result;
  try {
    result = fs.readFileSync('files/readfile.txt', 'utf8');
  } catch (err) {
    console.error(err);
    result = err;
  }

  res.send(`ConfigMap: ${result}`);
});

app.listen(port, () => {
  console.log(`The application is listening on port ${port}!`);
});
