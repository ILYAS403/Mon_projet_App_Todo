import express from "express";
import { rechercherTaches } from "../controllers/RechercherTachesControllers.js";
import authMiddleware from '../middlewares/authMiddleware.js'; // Le middleware d'authentification
const router = express.Router();

/**
 * @swagger
 * /api/taches/rechercher:
 *   get:
 *     summary: Rechercher des tâches d'un utilisateur par titre dans une journée et une semaine données
 *     tags: [Tâches]
 *     security:  
 *       - BearerAuth: [] 
 *     parameters:
 *       - in: query
 *         name: titre
 *         schema:
 *           type: string
 *         required: true
 *         description: Titre ou mot-clé des tâches à rechercher
 *       - in: query
 *         name: nom_jour
 *         schema:
 *           type: string
 *         required: true
 *         description: "Nom du jour ex: Lundi"
 *       - in: query
 *         name: plage_journee
 *         schema:
 *           type: string
 *         required: true
 *         description: "Plage de la semaine ex: 13 au 19 octobre 2025"
 *     responses:
 *       200:
 *         description: Liste des tâches trouvées
 *       404:
 *         description: Aucune tâche trouvée
 */
router.get('/rechercher', authMiddleware, rechercherTaches);
export default router;
