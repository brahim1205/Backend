const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({
  origin: [
    'https://project-ochre-nine-50.vercel.app',
    //'https://project-git-main-sadiocherif11-gmailcoms-projects.vercel.app'
  ]
}));

// ...le reste de ton code backend...