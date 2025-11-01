import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const modifierTache = async (req, res) => {
  try {
    const { id_tache } = req.query;
    const { titre, description, priorite, heure_debut, heure_fin, nom_jour_cible } = req.body;

    if (!id_tache) {
      return res.status(400).json({ message: "L'id de la tâche est requis." });
    }

    // Récupérer la tâche existante
    const tache = await prisma.tache.findUnique({
      where: { id_tache: parseInt(id_tache) },
      include: {
        journee: {
       
          include: {
            semaine: true
          }
        }
      }
    });

    if (!tache) {
      return res.status(404).json({ message: "Tâche non trouvée." });
    }

    let id_journee = tache.journee.id_journee;


    // Si on veut déplacer la tâche vers un autre jour
    if (nom_jour_cible !== tache.journee.nom) {
      // Vérifier si le jour existe déjà dans la semaine
      let jour_cible = await prisma.journee.findFirst({
        where: {
          nom: nom_jour_cible, // Nom du jour cible
          id_semaine: tache.journee.id_semaine // Même semaine que la tâche actuelle
        }
      });

      // Si le jour n'existe pas, le créer
      if (!jour_cible) {
        jour_cible = await prisma.journee.create({
          data: {
            nom: nom_jour_cible,
            id_semaine: tache.journee.id_semaine // Même semaine que la tâche actuelle
          }
        });
      }

      id_journee = jour_cible.id_journee;
    }

    // Mettre à jour la tâche
    const tacheModifiee = await prisma.tache.update({
      where: { id_tache: parseInt(id_tache) },
      data: {
        titre,
        description,
        priorite,
        heure_debut: new Date(heure_debut),
        heure_fin: new Date(heure_fin),
        id_journee: id_journee
      }
    });

    res.status(200).json({
      message: "Tâche modifiée avec succès.",
      tache: tacheModifiee
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur serveur.", error: error.message });
  }
};
