import express from "express";//On importe le framework Express, qui permet de créer facilement des serveurs web en Node.js
import dotenv from "dotenv";//On importe dotenv, qui sert à charger les variables d’environnement depuis un fichier .env
import loginRoutes from "./routes/loginRoute.js";//On importe les routes liées à la connexion/utilisateur depuis le fichier loginRoute.js
import registreRoute from "./routes/registreRoute.js";
import ListeTachesRoute from "./routes/ListeTachesRoute.js";
import SupprimerTachesRoute from "./routes/SupprimerTachesRoute.js";
import AjouterTachesRoute from "./routes/AjouterTachesRoute.js";
import ModifierTachesRoute from "./routes/ModifierTachesRoute.js";
import RechercherTachesRoute from "./routes/RechercherTachesRoute.js";
import { swaggerUi, specs } from "./config/swagger.js";//On importe swaggerUi et specs depuis le fichier swagger.js pour la documentation de l’API
import cors from 'cors';
dotenv.config();//On active dotenv pour que Node.js lise le fichier .env et charge les variables d’environnement dans process.env
const app = express();//On crée une instance de l’application Express
app.use(express.json());//On utilise le middleware express.json() pour parser les requêtes JSON

app.use(cors({//
  origin: 'http://localhost:4200',  
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));//On configure une route /api-docs pour servir la documentation Swagger de l’API

// Routes API
app.use("/api/users", loginRoutes);
app.use("/api/users", registreRoute);
app.use("/api/taches", ListeTachesRoute);
app.use("/api/taches", SupprimerTachesRoute);
app.use("/api/taches", AjouterTachesRoute);
app.use("/api/taches", ModifierTachesRoute);
app.use("/api/taches", RechercherTachesRoute);
app.get("/", (req, res) => {//Route de base pour vérifier que le serveur fonctionne
  res.send("Bienvenue sur mon API To-Do !");//On envoie une réponse simple pour indiquer que l’API est opérationnelle
});

const PORT = process.env.PORT || 5000;//On définit le port d’écoute du serveur, soit à partir de la variable d’environnement PORT, soit par défaut à 5000
app.listen(PORT, () => console.log(`🚀 Serveur démarré sur le port ${PORT}`));//On démarre le serveur et on affiche un message dans la console

