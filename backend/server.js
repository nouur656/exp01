require('dotenv').config();
const express = require('express');
const connectDB = require('./connectDB'); // importer ton fichier

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Bonjour du frontend !');
});

// Connexion à MongoDB puis lancement du serveur
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Serveur démarré sur http://localhost:${PORT}`);
  });
});
