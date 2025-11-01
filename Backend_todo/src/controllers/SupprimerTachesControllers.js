import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const supprimerTache = async (req, res) => {
  const { id_tache } = req.query;
  // Convertir en nombre
    const id = parseInt(id_tache, 10);
  try {
    // Vérifier que tous les paramètres sont fournis
    if (!id) {
      return res.status(400).json({ message: "Paramètres manquants." });
    }

    // Supprimer la tâche
    const tacheSupprimee = await prisma.tache.delete({
      where: { id_tache: id },
    });

    if (!tacheSupprimee) {
      return res.status(404).json({ message: "Tâche non trouvée." });
    }

    res.status(200).json({ message: "Tâche supprimée avec succès." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur serveur." });
  }
};
    
