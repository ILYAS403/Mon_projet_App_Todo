# 📝 Mon_projet_App_Todo
Une application To-Do List complète avec un backend Node.js/Express et un frontend Angular.


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
