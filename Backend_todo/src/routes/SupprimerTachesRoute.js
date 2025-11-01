import express from "express";
import { supprimerTache } from "../controllers/SupprimerTachesControllers.js";
const router = express.Router();

/**
 * @swagger
 * /api/taches/SupprimerTaches:
 *   get:
 *     summary: Suppression des tâches
 *     tags: [Tâches]
 *     parameters:
 *       - in: query
 *         name: id_tache
 *         schema:
 *           type: integer
 *           format: int64
 *         required: true
 *         description: ID de la tâche à supprimer
 *     responses:
 *       200:
 *         description: Tâche supprimée avec succès
 *       404:
 *         description: Tâche non trouvée
 */
router.get("/SupprimerTaches", supprimerTache);
export default router;