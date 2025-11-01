import express from "express";//On importe le framework Express, qui permet de créer facilement des serveurs web en Node.js
import { loginUser } from "../controllers/loginControllers.js";//On importe la fonction loginUser depuis le fichier loginControllers.js pour gérer la connexion des utilisateurs
const router = express.Router();//On crée une instance du routeur Express pour définir des routes modulaires

/**
 * @swagger
 * /api/users/login:
 *   post:
 *     summary: Connexion utilisateur
 *     tags: [Utilisateur]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - mot_de_passe
 *             properties:
 *               email:
 *                 type: string
 *                 example: ilyas@example.com
 *               mot_de_passe:
 *                 type: string
 *                 example: 123456
 *     responses:
 *       200:
 *         description: Connexion réussie
 *       401:
 *         description: Mot de passe incorrect
 *       404:
 *         description: Utilisateur non trouvé
 */
// Route de connexion utilisateur
router.post("/login", loginUser);
// On définit une route POST /login qui utilise la fonction loginUser pour gérer les requêtes de connexion des utilisateurs
export default router; //On exporte le routeur pour pouvoir l’utiliser dans d’autres parties de l’application, notamment dans le fichier server.js où les routes sont intégrées à l’application principale
