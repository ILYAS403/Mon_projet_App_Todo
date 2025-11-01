// seed.js
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();
const SALT_ROUNDS = 10;

async function hashPassword(plain) {
  if (!plain) return null;
  return await bcrypt.hash(plain, SALT_ROUNDS);
}

async function main() {
  // la Création d'une semaine
  const semaine = await prisma.semaine.create({
    data: {
      plage_journee: "13 au 19 Octobre 2025",
    },
  });

  // 🔹 Création des 7 journées
  const jours = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
  const journees = [];

  for (const nom of jours) {
    const journee = await prisma.journee.create({
      data: {
        nom,
        id_semaine: semaine.id_semaine,
      },
    });
    journees.push(journee);
  }

  // 🔹 Prépare les mots de passe hachés
  const hashedPwd1 = await hashPassword("123456");
  const hashedPwd2 = await hashPassword("azerty");

  // 🔹 Création de 2 utilisateurs (avec mot_de_passe haché)
  const utilisateur1 = await prisma.utilisateur.create({
    data: {
      prenom: "Ilyas",
      nom: "Ahmed",
      sexe: "M",
      photo: "https://picsum.photos/200",
      profil: "Étudiant",
      email: "ilyas@example.com",
      mot_de_passe: hashedPwd1,
    },
  });

  const utilisateur2 = await prisma.utilisateur.create({
    data: {
      prenom: "Sara",
      nom: "Ali",
      sexe: "F",
      photo: "https://picsum.photos/201",
      profil: "Professeur",
      email: "sara@example.com",
      mot_de_passe: hashedPwd2,
    },
  });

  // 🔹 Création de quelques tâches
  await prisma.tache.createMany({
    data: [
      {
        titre: "Réviser Node.js",
        description: "Lire la documentation officielle",
        priorite: "Haute",
        heure_debut: new Date("2025-10-13T08:00:00"),
        heure_fin: new Date("2025-10-13T10:00:00"),
        id_utilisateur: utilisateur1.id_utilisateur,
        id_journee: journees[0].id_journee, // Lundi
      },
      {
        titre: "Cours de Base de Données",
        description: "Enseigner le modèle relationnel",
        priorite: "Moyenne",
        heure_debut: new Date("2025-10-14T09:00:00"),
        heure_fin: new Date("2025-10-14T11:00:00"),
        id_utilisateur: utilisateur2.id_utilisateur,
        id_journee: journees[1].id_journee, // Mardi
      },
      {
        titre: "Faire du sport",
        description: "30 min de musculation",
        priorite: "Basse",
        heure_debut: new Date("2025-10-15T18:00:00"),
        heure_fin: new Date("2025-10-15T18:30:00"),
        id_utilisateur: utilisateur1.id_utilisateur,
        id_journee: journees[2].id_journee, // Mercredi
      },
    ],
  });

  console.log(" Données insérées avec succès !");
}

main()
  .catch((e) => {// Si une erreur survient lors de l’exécution de la fonction main, on la capture ici
    console.error(e);// En cas d'erreur, on l'affiche dans la console
    process.exit(1);// On quitte le processus avec un code d'erreur 1 pour indiquer qu'une erreur s'est produite
  })
  .finally(async () => {// Le bloc finally s'exécute toujours, que la fonction main réussisse ou échoue
    await prisma.$disconnect();// On déconnecte proprement le client Prisma de la base de données
  });
