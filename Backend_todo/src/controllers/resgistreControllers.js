import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
const prisma = new PrismaClient();
export const registerUser = async (req, res) => {
  try {
    const {
      prenom,
      nom,
      profil,
      email,
      mot_de_passe,
      confirmation_mot_de_passe,
      sexe,
      photo,
      confirmation_infos,
    } = req.body;

    // Vérifie que tous les champs requis sont remplis
    if (
      !prenom ||
      !nom ||
      !profil ||
      !email ||
      !mot_de_passe ||
      !confirmation_mot_de_passe ||
      !sexe ||
      confirmation_infos !== true
    ) {
      return res.status(400).json({ message: "Tous les champs marqués d'une * sont obligatoires." });
    }

    // Vérifie le format du mot de passe
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(mot_de_passe)) {
      return res.status(400).json({
        message:
          "Le mot de passe doit contenir au moins 8 caractères, une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial.",
      });
    }

    // Vérifie la confirmation du mot de passe
    if (mot_de_passe !== confirmation_mot_de_passe) {
      return res.status(400).json({ message: "Les mots de passe ne correspondent pas." });
    }

    // Vérifie si l'email existe déjà
    const existingUser = await prisma.utilisateur.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(409).json({ message: "Cet email est déjà utilisé." });
    }

    // Hachage du mot de passe
    const hashedPassword = await bcrypt.hash(mot_de_passe, 10);

    // Enregistre l’utilisateur
    const newUser = await prisma.utilisateur.create({
      data: {
        prenom,
        nom,
        profil,
        email,
        mot_de_passe: hashedPassword,
        sexe,
        photo: photo || null,
      },
    });

    res.status(201).json({
      message: "Utilisateur créé avec succès.",
      user: {
        id: newUser.id_utilisateur,
        prenom: newUser.prenom,
        nom: newUser.nom,
        email: newUser.email,
        profil: newUser.profil,
        sexe: newUser.sexe,
        photo: newUser.photo,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur serveur." });
  }
};   

