# 🚀 DevTech Magazine | React TP4



Une plateforme hybride combinant un **Magazine Technologique** moderne et un **Gestionnaire de Tâches (To-Do List)** interactif. Ce projet démontre la maîtrise du routing, des hooks (`useState`) et de la gestion de composants atomiques.

---

## 📸 Aperçu de l'Interface
L'application propose une interface épurée avec :
* **Hero Section** : Un titre impactant avec une barre de recherche intelligente.
* **Grille d'Articles** : Des cartes interactives avec effets de survol (hover).
* **Navigation** : Une barre de navigation fixe avec compteur d'articles dynamique.

## ✨ Fonctionnalités Clés

### 🔍 Recherche & Filtrage Avancé
* **Barre de Recherche Dynamique** : Filtrage instantané par titre ou mot-clé sans rechargement de page.
* **Filtres par Catégorie** : Segmentation des articles par tags (React, JS, UI/UX, Backend).

### 📖 Expérience de Lecture
* **Routage Dynamique** : Utilisation de `react-router-dom` pour naviguer vers les détails d'un article.
* **Gestion d'État (State)** : Suivi des "Likes" par article via le hook `useState`.

### 📱 Design & UX
* **Responsive Design** : Adaptabilité complète (Mobile / Tablette / Desktop).
* **Typographie** : Utilisation de la police *Plus Jakarta Sans* pour un confort de lecture optimal.

## 🛠️ Architecture Technique

| Module | Technologie | Rôle |
| :--- | :--- | :--- |
| **Frontend** | React 18 | Moteur de l'interface et logique de rendu. |
| **Routing** | React Router 6 | Navigation entre l'accueil et les articles. |
| **Styling** | CSS3 (Variables) | Design système, thémisation et mise en page Grid/Flexbox. |
| **Données** | JSON/State | Gestion d'un dataset de 20 articles techniques. |





---

## ✨ Points Forts du Projet

### 📰 DevTech Magazine
* **Système de Recherche** : Filtrage intelligent des articles par titre ou catégorie.
* **Architecture de Cartes** : Design élégant avec badges thématiques et indicateurs de lecture.
* **Navigation Dynamique** : Consultation détaillée des articles via des routes paramétrées.

### ✅ To-Do Manager
* **Gestion Interactive** : Ajout, marquage et suppression de tâches en temps réel.
* **Modularité** : Découpage précis de l'interface en composants fonctionnels (`TodoForm`, `TodoItem`).

---

## 📂 Structure des Fichiers (src)

Le projet suit une organisation hybride pour séparer la logique de page et les composants de base :

```text
src/
├── components/          # Composants structurants du blog
│   ├── ArticleDetail.js
│   └── ArticleList.js
├── pages/               # Vues principales
│   ├── Accueil.js
│   └── Article.js
├── Taches.js            # Page principale du module To-Do
├── TodoForm.js          # Formulaire de création de tâches
├── TodoItem.js          # Composant unité de tâche
├── TodoList.js          # Conteneur de la liste
├── App.js               # Root, Routing et State global
├── App.css              # Design système & Styles
└── index.js             # Point d'entrée React
```

##Lancer l'application :

```
npm start

```

L'application sera disponible sur `http://localhost:3000`























