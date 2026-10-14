import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const getallTaches = async (req, res) => {

  try {
    const taches = await prisma.tache.findMany();               

  
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
