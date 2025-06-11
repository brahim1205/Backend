// Ajoute ceci en haut de ton fichier principal
const cors = require('cors');
const express = require('express');
const app = express();

app.use(cors()); // Autorise toutes les origines

