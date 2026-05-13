const express = require('express');
const cors = require('cors'); // 1. Import cors
const app = express();

// 2. Enable CORS for your Angular dev server
app.use(cors({
  origin: 'http://localhost:4200', // Allow only this origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.get('/', (req, res) => {
  res.json({ message: "Data received from Node Backend!" });
});

app.listen(3000, '0.0.0.0', () => {
  console.log('Server is running on port 3000');
});