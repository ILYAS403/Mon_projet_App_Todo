import express from "express";
import { modifierTache } from "../controllers/ModifierTachesControllers.js";

const router = express.Router();

/**
 * @swagger
 * /api/taches/ModifierTache:
 *   put:
 *     summary: Modifier une tâche et/ou déplacer vers un autre jour de la même semaine
 *     tags: [Tâches]
 *     parameters:
 *       - in: query
 *         name: id_tache
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la tâche à modifier
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               titre:
 *                 type: string
 *               description:
 *                 type: string
 *               priorite:
 *                 type: string
 *               heure_debut:
 *                 type: string
 *                 format: date-time
 *               heure_fin:
 *                 type: string
 *                 format: date-time
 *               nom_jour_cible:
 *                 type: string
 *                 description: "Nom du jour cible pour déplacer la tâche (ex: Mardi)"
 *     responses:
 *       200:
 *         description: Tâche modifiée avec succès
 *       404:
 *         description: Tâche non trouvée
 *       500:
 *         description: Erreur serveur
 */
router.put("/ModifierTache", modifierTache);

export default router;
