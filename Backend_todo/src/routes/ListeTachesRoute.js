import express from "express";
import { getTachesParUtilisateurEtSemaine } from "../controllers/ListeTachesControllers.js";

const router = express.Router();

/**
 * @swagger
 * /api/taches/liste:
 *   get:
 *     summary: Récupère la liste des tâches d'un utilisateur pour une semaine donnée
 *     tags: [Tâches]
 *     parameters:
 *       - in: query
 *         name: email
 *         schema:
 *           type: string
 *         required: true
 *         description: Email de l'utilisateur
 *       - in: query
 *         name: semaine
 *         schema:
 *           type: string
 *         required: true
 *         description: "Plage de la semaine (ex : 13 au 19 octobre 2025)"
 *       - in: query
 *         name: jour
 *         schema:
 *           type: string
 *         required: true
 *         description: "Nom du jour (ex : Lundi, Mardi, etc.)"
 *     responses:
 *       200:
 *         description: Liste des tâches trouvées
 *       404:
 *         description: Aucune tâche trouvée
 *       500:
 *         description: Erreur serveur
 */
router.get("/liste", getTachesParUtilisateurEtSemaine);

export default router;
