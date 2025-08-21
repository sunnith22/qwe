// src/api/server.js
import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Define __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3001;

app.use(cors());

// Endpoint for Products
app.get('/get-products', (req, res) => {
  fs.readFile(path.join(__dirname, 'products.json'), 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error reading products data');
      return;
    }
    res.json(JSON.parse(data));
  });
});

// Endpoint for People List
app.get('/get-people-list', (req, res) => {
  fs.readFile(path.join(__dirname, 'people.json'), 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error reading people data');
      return;
    }
    res.json(JSON.parse(data));
  });
});

app.listen(PORT, () => {
  console.log(`✅ Backend server running at http://localhost:${PORT}`);
});