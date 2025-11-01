import { PrismaClient } from "@prisma/client";
import generateToken from "../utils/generateToken.js";
import verifyPassword from "../utils/verifyPassword.js";

const prisma = new PrismaClient();

export const loginUser = async (req, res) => {
  const { email, mot_de_passe } = req.body;

  try {
    const user = await prisma.utilisateur.findUnique({ where: { email } });
    if (!user) return res.status(404).json({ message: "Utilisateur non trouvé" });

    const isMatch = await verifyPassword(mot_de_passe, user.mot_de_passe);
    if (!isMatch) return res.status(401).json({ message: "Mot de passe incorrect" });

    const token = generateToken(user.id_utilisateur);
    res.status(200).json({
      message: "Connexion réussie",
      token,
      user: {
        id: user.id_utilisateur,
        prenom: user.prenom,
        nom: user.nom,
        email: user.email,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur serveur" });
  }
};
