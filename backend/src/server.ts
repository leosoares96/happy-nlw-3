import express from 'express';
import './database/connection';

const app = express();

app.get('/', (req, res) => {
  res.send({ message: 'Hello' });
});

app.listen(3333, () => {
  console.log('API Started!');
});
