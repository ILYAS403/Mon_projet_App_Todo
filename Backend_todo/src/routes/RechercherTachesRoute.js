/*import express from "express";
import { getTacheRechercherparTitre } from "../controllers/RechercherTachesControllers.js";

const router = express.Router();

/**
 * @swagger
 * /api/taches/RechercherTaches:
 *   get:
 *     summary: Filtrer une tache par titre pour un utilisateur donné et un jour spécifique
 *     tags: [Tâches]
 *     parameters:
 *       - in: query
 *         name: email
 *         schema:
 *           type: string
 *         required: true
 *         description: Email de l'utilisateur
 *      - in: query 
 *        name: Jour
 *        schema:
 *          type: String
 *          required: true
 *     description: jour du tache (ex : Lundi, Mardi, etc.)
 *       - in: query
 *         name: titre
 *         schema:
 *           type: string
 *         required: true
 *         description: Titre de la tâche à rechercher
 *     responses:
 *       200:
 *         description: Liste des tâches trouvées
 *       404:
 *         description: Aucune tâche trouvée
 *       500:
 *         description: Erreur serveur
 
router.get("/liste", getTacheRechercherparTitre);

export default router;
*/