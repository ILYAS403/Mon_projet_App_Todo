-- CreateTable
CREATE TABLE "Utilisateur" (
    "id_utilisateur" SERIAL NOT NULL,
    "prenom" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "sexe" TEXT,
    "photo" TEXT,
    "profil" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "mot_de_passe" TEXT NOT NULL,

    CONSTRAINT "Utilisateur_pkey" PRIMARY KEY ("id_utilisateur")
);

-- CreateTable
CREATE TABLE "Tache" (
    "id_tache" SERIAL NOT NULL,
    "titre" TEXT NOT NULL,
    "description" TEXT,
    "priorite" TEXT,
    "heure_debut" TIMESTAMP(3),
    "heure_fin" TIMESTAMP(3),
    "id_utilisateur" INTEGER NOT NULL,
    "id_journee" INTEGER NOT NULL,

    CONSTRAINT "Tache_pkey" PRIMARY KEY ("id_tache")
);

-- CreateTable
CREATE TABLE "Journee" (
    "id_journee" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,
    "id_semaine" INTEGER NOT NULL,

    CONSTRAINT "Journee_pkey" PRIMARY KEY ("id_journee")
);

-- CreateTable
CREATE TABLE "Semaine" (
    "id_semaine" SERIAL NOT NULL,
    "plage_journee" TEXT NOT NULL,

    CONSTRAINT "Semaine_pkey" PRIMARY KEY ("id_semaine")
);

-- CreateIndex
CREATE UNIQUE INDEX "Utilisateur_email_key" ON "Utilisateur"("email");

-- AddForeignKey
ALTER TABLE "Tache" ADD CONSTRAINT "Tache_id_utilisateur_fkey" FOREIGN KEY ("id_utilisateur") REFERENCES "Utilisateur"("id_utilisateur") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tache" ADD CONSTRAINT "Tache_id_journee_fkey" FOREIGN KEY ("id_journee") REFERENCES "Journee"("id_journee") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Journee" ADD CONSTRAINT "Journee_id_semaine_fkey" FOREIGN KEY ("id_semaine") REFERENCES "Semaine"("id_semaine") ON DELETE RESTRICT ON UPDATE CASCADE;
