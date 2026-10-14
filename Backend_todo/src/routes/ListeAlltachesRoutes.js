import express from "express";
import { getallTaches } from "../controllers/ListeAlltachesControllers.js";

const router = express.Router();

/**
 * @swagger
 * /api/taches/ALLliste:
 *   get:
 *     summary: Récupère tous les listes des taches dans la table tache
 *     tags: [Tâches]
 * 
 *     responses:
 *       200:
 *         description: Liste des tâches trouvées
 *       404:
 *         description: Aucune tâche trouvée
 *       500:
 *         description: Erreur serveur
 */
router.get("/ALLliste", getallTaches);

export default router;
