const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({
  origin: [
    'https://project-ochre-nine-50.vercel.app'
  ]
}));

// ...le reste de ton code backend...