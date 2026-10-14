import express from "express";
import { AjouterTaches } from "../controllers/AjouterTachesControllers.js";
import authMiddleware from '../middlewares/authMiddleware.js'; // Le middleware d'authentification
const router = express.Router();

/**
 * @swagger
 * /api/taches/AjouterTaches:
 *   post:
 *     summary: Ajout de tâches avec création automatique de la semaine et de la journée
 *     tags: [Tâches]
 *     security:  
 *       - BearerAuth: [] 
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
 *                 enum: [haute, moyenne, basse]
 *               heure_debut:
 *                 type: string
 *                 format: date-time
 *               heure_fin:
 *                 type: string
 *                 format: date-time
 *               nom_jour:
 *                 type: string
 *                 example: Lundi
 *               plage_journee:
 *                 type: string
 *                 example: "13 au 19 octobre 2025"
 *     responses:
 *       200:
 *         description: Tâche ajoutée avec succès
 *       400:
 *         description: Erreur de validation
 *       500:
 *         description: Erreur interne du serveur
 */
router.post("/AjouterTaches", authMiddleware, AjouterTaches);

export default router;
