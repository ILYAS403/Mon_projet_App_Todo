import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const rechercherTaches = async (req, res) => { 
  const { email, titre, nom_jour, plage_journee } = req.query; // Récupérer les paramètres de la requête
  const userId = req.userId; // Récupérer l'ID de l'utilisateur à partir de la requête (défini par le middleware d'authentification)
  try {
    if ( !titre || !nom_jour || !plage_journee) {
      return res.status(400).json({ message: "Paramètres manquants." });
    }
    // Rechercher les tâches filtrées
    const taches = await prisma.tache.findMany({
      where: {
        id_utilisateur: userId ,
        titre: { contains: titre, mode: "insensitive" },
        journee: {
          is: {
            nom: nom_jour,
            semaine: {
              is: { plage_journee: plage_journee }
            }
          }
        }
      },
      include: {
        journee: {
          include: { semaine: true }
        }
      }
    });

    if (taches.length === 0) {
      return res.status(404).json({ message: "Aucune tâche trouvée." });
    }

    res.status(200).json(taches);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur serveur." });
  }
};
