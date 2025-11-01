// routes/registreRoute.js
import express from "express";
import { registerUser } from "../controllers/resgistreControllers.js";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = express.Router();

/**
 * @swagger
 * /api/users/register:
 *   post:
 *     summary: Inscription d'un nouvel utilisateur
 *     tags: [Utilisateur]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - prenom
 *               - nom
 *               - profil
 *               - email
 *               - mot_de_passe
 *               - confirmation_mot_de_passe
 *               - sexe
 *               - confirmation_infos
 *             properties:
 *               prenom:
 *                 type: string
 *                 example: Ilyas
 *               nom:
 *                 type: string
 *                 example: Ahmed
 *               profil:
 *                 type: string
 *                 example: Étudiant
 *               email:
 *                 type: string
 *                 example: ilyas@example.com
 *               mot_de_passe:
 *                 type: string
 *                 example: Test@1234
 *               confirmation_mot_de_passe:
 *                 type: string
 *                 example: Test@1234
 *               sexe:
 *                 type: string
 *                 enum: [M, F, Je ne veux pas dire]
 *                 example: M
 *               photo:
 *                 type: string
 *                 example: https://picsum.photos/200
 *               confirmation_infos:
 *                 type: boolean
 *                 example: true
 *     responses:
 *       201:
 *         description: Utilisateur créé avec succès
 *       400:
 *         description: Données invalides
 *       409:
 *         description: Email déjà utilisé
 */

// Route d'inscription utilisateur
router.post("/register", registerUser); //

export default router; 
