# 📝 Mon_projet_App_Todo

## Description

Mon_projet_App_Todo est une application web permettant aux utilisateurs de créer, organiser et gérer leurs tâches quotidiennes et hebdomadaires.

L'application est composée d'un frontend développé avec Angular et d'une API REST développée avec Node.js et Express. Les données sont stockées dans une base de données PostgreSQL, manipulée avec Prisma ORM.

### Fonctionnalités

- Création, modification et suppression des tâches
- Organisation des tâches par journée et par semaine
- Gestion des utilisateurs
- Association des tâches à leur utilisateur
- API REST pour gérer les tâches
- Persistance des données avec PostgreSQL et Prisma

## Technologies

- **Frontend :** Angular, TypeScript, HTML, CSS
- **Backend :** Node.js, Express.js
- **ORM :** Prisma
- **Base de données :** PostgreSQL
- **Outils :** Git, GitHub, Swagger, Visual Studio Code, npm

## Choix techniques

- **Angular :** utilisé pour développer une interface web dynamique et organiser le frontend en composants réutilisables.
- **Node.js et Express :** utilisés pour créer l'API REST qui gère les opérations liées aux utilisateurs et aux tâches.
- **Prisma :** utilisé pour faciliter les interactions entre le backend et la base de données.
- **PostgreSQL :** choisi pour stocker les utilisateurs et les tâches dans une base de données relationnelle.

Cette architecture permet de séparer le frontend du backend et de faciliter la maintenance et l'évolution de l'application.

## Structure du projet

Le projet est organisé en deux parties principales :

![alt text](./images/image.png)



## Aperçu de l'application

Voici un exemple de tâche associée à un utilisateur, avec le jour et la semaine correspondants.



## Prérequis

Avant d'installer le projet, assure-toi d'avoir installé :

- Node.js
- npm
- Angular CLI
- PostgreSQL

## Installation

### A. Cloner le projet

```bash
git clone https://github.com/ILYAS403/Mon_projet_App_Todo.git
cd Mon_projet_App_Todo
```

> Remplace l'URL si le nom ou l'adresse réelle de ton dépôt GitHub est différent.

### B. Configurer la base de données

Crée une base de données PostgreSQL nommée `todo_app`.

Dans le dossier `Backend_todo/`, crée un fichier `.env` contenant la configuration suivante :

```env
DATABASE_URL="postgresql://user:password@localhost:5432/todo_app"
```

Remplace `user` et `password` par tes identifiants PostgreSQL.

Installe ensuite les dépendances du backend :

```bash
cd Backend_todo
npm install
```

Génère le client Prisma :

```bash
npx prisma generate
```

Si le projet utilise les migrations Prisma, applique-les avec :

```bash
npx prisma migrate dev
```

### C. Lancer le backend

Depuis le dossier `Backend_todo/`, démarre le serveur :

```bash
npm run dev
```

L'API sera disponible à l'adresse configurée dans le backend.

### D. Installer et lancer le frontend

Ouvre un nouveau terminal :

```bash
cd FrontEnd_Todo
npm install
ng serve
```

L'application Angular sera accessible à l'adresse suivante :

[http://localhost:4200](http://localhost:4200)

## API principale

| Méthode | Endpoint          | Description          |
| ------- | ----------------- | -------------------- |
| GET     | `/api/taches`     | Récupérer les tâches |
| POST    | `/api/taches`     | Créer une tâche      |
| PUT     | `/api/taches/:id` | Modifier une tâche   |
| DELETE  | `/api/taches/:id` | Supprimer une tâche  |

*Les routes sont indicatives : vérifie les chemins et les méthodes HTTP réellement définis dans ton backend.*

## Améliorations possibles

- Ajouter des filtres par date et par statut
- Ajouter la recherche de tâches
- Mettre en place une authentification sécurisée
- Ajouter des tests unitaires et d'intégration
- Améliorer la validation des données et la gestion des erreurs
- Déployer le frontend, le backend et la base de données

## Auteur

**Ilyas Dahir Houssein**

Développeur Full-Stack

## Licence

Ce projet est réalisé dans le cadre d'un projet personnel de développement web.






































## 🚀 Aperçu
Cette application permet à chaque utilisateur de gérer ses tâches par journée et par semaine.

Fonctionnalités principales :
- ✅ Ajouter / modifier / supprimer une tâche
- 📅 Planifier les tâches par semaine
- 👤 Gestion des utilisateurs
- 🌐 API REST avec PostgreSQL + Prisma

Exemple d'une tache avec l'utilisateur qui fais la tache ,le jour ou il fais et la semaine de cette journee:
<img width="569" height="461" alt="image" src="https://github.com/user-attachments/assets/6e303357-3100-4b59-8c1d-372c5b0e8e40" />
## 🛠️ Technologies utilisées
- **Backend** : Node.js, Express, Prisma, PostgreSQL  
- **Frontend** : Angular  
- **Autres outils** : Git, Swagger, VS Code
## ⚙️ Installation

### 1. Cloner le projet
```bash
git clone https://github.com/ton-utilisateur/Mon_projet_App_Todo.git
cd Backend_todo
npm install

cd ../FrontEnd_Todo
npm install

3. Configurer la base de données

Crée un fichier .env dans Backend_todo/ :

DATABASE_URL="postgresql://user:password@localhost:5432/todo_app"

4. Lancer le projet
# Backend
npm run dev

# Frontend
ng serve

## 📡 Endpoints principaux

| Méthode | Endpoint | Description |
|----------|-----------|-------------|
| GET | /api/taches | Récupérer toutes les tâches |
| POST | /api/taches | Ajouter une tâche |
| PUT | /api/taches/:id | Modifier une tâche |
| DELETE | /api/taches/:id | Supprimer une tâche |

## 👨‍💻 Auteur
Développé par **Ilyas Dahir** — Étudiant en développement web Full Stack.
