const express = require('express');
const cors = require('cors');
const connectToMongo = require('./db');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 8181;

app.use(express.json());
app.use(cors());

connectToMongo();

app.use('/api/auth', require('./routes/auth'));

app.use(express.static(path.join(__dirname, 'build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
