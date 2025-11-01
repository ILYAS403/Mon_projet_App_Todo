import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const AjouterTaches = async (req, res) => {
  try {
    const {
      titre,
      description,
      priorite,
      heure_debut,
      heure_fin,
      id_utilisateur,
      nom_jour,
      plage_journee
    } = req.body;

    // Vérification des champs obligatoires
    if (
      !titre ||
      !description ||
      !priorite ||
      !heure_debut ||
      !heure_fin ||
      !id_utilisateur ||
      !nom_jour ||
      !plage_journee
    ) {
      return res.status(400).json({ message: "Tous les champs sont requis." });
    }

    // 1️⃣ Vérifier si la semaine existe déjà
    let semaine = await prisma.semaine.findFirst({
      where: { plage_journee: plage_journee },
    });

    if (!semaine) {
      // Si non, on la crée
      semaine = await prisma.semaine.create({
        data: { plage_journee: plage_journee },
      });
    }

    // 2️⃣ Vérifier si la journée existe déjà dans cette semaine
    let journee = await prisma.journee.findFirst({
      where: {
        nom: nom_jour,
        id_semaine: semaine.id_semaine,
      },
    });

    if (!journee) {
      // Si non, on la crée
      journee = await prisma.journee.create({
        data: {
          nom: nom_jour,
          id_semaine: semaine.id_semaine,
        },
      });
    }

    // 3️⃣ Créer la tâche liée à la journée et à l'utilisateur
    const nouvelleTache = await prisma.tache.create({
      data: {
        titre,
        description,
        priorite,
        heure_debut: new Date(heure_debut),
        heure_fin: new Date(heure_fin),
        id_utilisateur: Number(id_utilisateur),
        id_journee: journee.id_journee,
      },
    });

    res.status(200).json({
      message: "Tâche ajoutée avec succès.",
      tache: nouvelleTache,
    });

  } catch (error) {
    console.error("Erreur lors de l'ajout de la tâche :", error);
    res.status(500).json({ message: "Erreur interne du serveur", error });
  }
};
