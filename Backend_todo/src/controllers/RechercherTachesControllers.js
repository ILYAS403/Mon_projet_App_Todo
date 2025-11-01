/*import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const  = async (req, res) => {
  const { email, semaine, jour } = req.query;

  try {
    // ✅ Vérification des paramètres
    if (!email || !semaine || !jour) {
      return res.status(400).json({ message: "Paramètres manquants." });
    }

    // ✅ Recherche de l'utilisateur
    const utilisateur = await prisma.utilisateur.findUnique({
      where: { email: email }, // ton champ est bien "mail" dans le MCD
    });

    if (!utilisateur) {
      return res.status(404).json({ message: "Utilisateur non trouvé." });
    }

    // ✅ Récupération des tâches liées à la semaine et au jour
    const taches = await prisma.tache.findMany({
      where: {
        id_utilisateur: utilisateur.id, // relation directe avec l’utilisateur
        journee: {
          nom: jour, // si tu veux utiliser "Lundi", "Mardi", etc.
          semaine: {
            plage_journee: semaine,
          },
        },
      },
      include: {
        journee: {
          include: {
            semaine: true,
          },
        },
      },
    });

    // ✅ Vérification du résultat
    if (taches.length === 0) {
      return res.status(404).json({ message: "Aucune tâche trouvée." });
    }

    // ✅ Réponse OK
    res.status(200).json(taches);
  } catch (error) {
    console.error("Erreur :", error);
    res.status(500).json({ message: "Erreur serveur." });
  }
};
*/