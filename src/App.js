import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Accueil from './pages/Accueil';
import ArticleDetail from './components/ArticleDetail';
import './App.css';

const App = () => {
  const [dataArticles, setDataArticles] = useState([
    { id: 1, type: "react", categorie: "React JS", titre: "React 19 et les Actions", resume: "Simplifiez la gestion des formulaires et des états serveurs.", contenu: "React 19 introduit les 'Actions', une nouvelle manière de gérer les mutations de données. Fini les 'isLoading' manuels partout ! Avec le hook 'useActionState', React gère automatiquement le cycle de vie de vos requêtes asynchrones.", date: "8 Avril", temps: "5 min", likes: 145 },
    { id: 2, type: "ui", categorie: "UI/UX", titre: "L'accessibilité numérique", resume: "Pourquoi le Web doit être inclusif pour tous les utilisateurs.", contenu: "L'accessibilité n'est pas une option, c'est un droit. En utilisant des balises ARIA correctes et en respectant les contrastes de couleurs WCAG, vous permettez aux personnes malvoyantes d'utiliser vos services.", date: "7 Avril", temps: "4 min", likes: 92 },
    { id: 3, type: "js", categorie: "JavaScript", titre: "Le futur de TypeScript", resume: "Les types nominaux et les nouvelles interfaces en 2026.", contenu: "TypeScript continue de dominer le monde JS. Les dernières versions apportent une inférence de type encore plus poussée, capable de valider des architectures entières au moment de la compilation.", date: "6 Avril", temps: "6 min", likes: 210 },
    { id: 4, type: "backend", categorie: "Backend", titre: "Architecture Microservices", resume: "Comment découpler vos applications pour mieux scaler.", contenu: "Passer d'un monolithe à des microservices demande une rigueur sur la communication entre services. L'utilisation de RabbitMQ ou Kafka est devenue indispensable pour la résilience.", date: "5 Avril", temps: "10 min", likes: 330 },
    { id: 5, type: "react", categorie: "React JS", titre: "Zustand : Adieu Redux ?", resume: "Le gestionnaire d'état léger qui séduit tout le monde.", contenu: "Zustand est devenu la solution favorite pour gérer l'état global. Sans boilerplate, simple à tester et extrêmement performant, il permet de partager des données sans complexité inutile.", date: "4 Avril", temps: "3 min", likes: 188 },
    { id: 6, type: "ui", categorie: "UI/UX", titre: "Figma vers React", resume: "Les outils qui automatisent l'intégration design-code.", contenu: "Le fossé entre design et développement se réduit. Des outils comme Locofy permettent d'exporter du code React propre directement depuis Figma, tout en gardant le contrôle sur les composants.", date: "3 Avril", temps: "5 min", likes: 112 },
    { id: 7, type: "js", categorie: "JavaScript", titre: "Node.js 24 : Quoi de neuf ?", resume: "Les performances du moteur V8 atteignent des sommets.", contenu: "Node.js ne ralentit pas face à Bun. Avec le support natif des fichiers .env et une gestion de la mémoire optimisée, Node reste le choix numéro 1 pour les environnements sécurisés.", date: "2 Avril", temps: "7 min", likes: 245 },
    { id: 8, type: "backend", categorie: "Backend", titre: "Sécurité des API REST", resume: "Protégez vos données contre les injections et attaques.", contenu: "L'implémentation de JWT (JSON Web Tokens), le Rate Limiting et la validation stricte des entrées via Zod sont des étapes critiques pour protéger votre infrastructure.", date: "1 Avril", temps: "8 min", likes: 405 },
    { id: 9, type: "react", categorie: "React JS", titre: "Next.js App Router", resume: "Maîtrisez le routing dynamique et le SEO avancé.", contenu: "L'App Router de Next.js change la donne pour le SEO. Grâce au Streaming et au rendu par composants, vos pages s'affichent instantanément même avec des données lourdes.", date: "31 Mars", temps: "9 min", likes: 290 },
    { id: 10, type: "ui", categorie: "UI/UX", titre: "Psychologie des couleurs", resume: "Comment influencer l'utilisateur par le choix des teintes.", contenu: "Le bleu inspire la confiance, le rouge l'urgence. Comprendre la psychologie derrière chaque couleur permet d'orienter le clic de l'utilisateur et d'améliorer le taux de conversion.", date: "30 Mars", temps: "4 min", likes: 156 },
    { id: 11, type: "js", categorie: "JavaScript", titre: "WebAssembly (Wasm)", resume: "Exécuter du code Rust directement dans le navigateur.", contenu: "WebAssembly permet de faire tourner des logiciels lourds (montage vidéo, jeux 3D) dans le navigateur avec des performances proches du natif. C'est le futur du web puissant.", date: "29 Mars", temps: "12 min", likes: 378 },
    { id: 12, type: "backend", categorie: "Backend", titre: "PostgreSQL vs MongoDB", resume: "Le match éternel entre SQL et NoSQL en 2026.", contenu: "PostgreSQL gagne du terrain grâce à son support JSONB performant. Cependant, MongoDB reste imbattable pour la flexibilité des schémas dans les phases de prototypage.", date: "28 Mars", temps: "6 min", likes: 222 },
    { id: 13, type: "react", categorie: "React JS", titre: "React Native en 2026", resume: "Créez des apps iOS et Android avec un seul code JS.", contenu: "Avec la nouvelle architecture 'Fabric', React Native est plus fluide que jamais. La communication entre le pont JS et le natif est supprimée au profit d'appels directs.", date: "27 Mars", temps: "8 min", likes: 198 },
    { id: 14, type: "ui", categorie: "UI/UX", titre: "Micro-interactions", resume: "Les petits détails qui font les grandes expériences.", contenu: "Un bouton qui rebondit, une barre de progression subtile... Les micro-interactions donnent un sentiment de qualité et de finition. Ne négligez jamais le retour visuel.", date: "26 Mars", temps: "3 min", likes: 134 },
    { id: 15, type: "js", categorie: "JavaScript", titre: "Clean Code en JS", resume: "Écrire du code que vos collègues pourront lire demain.", contenu: "Le clean code, c'est choisir des noms explicites et diviser ses fonctions en petites unités. Un code lisible coûte moins cher à maintenir qu'un code 'intelligent' complexe.", date: "25 Mars", temps: "7 min", likes: 450 },
    { id: 16, type: "backend", categorie: "Backend", titre: "GraphQL : Le futur ?", resume: "Pourquoi REST pourrait disparaître pour les apps complexes.", contenu: "GraphQL permet au client de demander exactement ce dont il a besoin. Cela évite le 'over-fetching' et permet de faire évoluer les APIs sans casser les versions précédentes.", date: "24 Mars", temps: "9 min", likes: 312 },
    { id: 17, type: "react", categorie: "React JS", titre: "Tailwind CSS + React", resume: "Le duo gagnant pour un développement ultra-rapide.", contenu: "Tailwind permet de styliser vos composants React sans quitter votre fichier JSX. C'est un gain de productivité immense qui force une cohérence visuelle parfaite.", date: "23 Mars", temps: "5 min", likes: 510 },
    { id: 18, type: "ui", categorie: "UI/UX", titre: "Mobile First Design", resume: "Concevoir pour smartphone avant l'ordinateur.", contenu: "La majorité du trafic web est mobile. Concevoir en 'Mobile First' oblige à prioriser le contenu essentiel, ce qui améliore l'expérience utilisateur globale.", date: "22 Mars", temps: "6 min", likes: 167 },
    { id: 19, type: "js", categorie: "JavaScript", titre: "Tester son code (Vitest)", resume: "Dormez tranquille grâce aux tests automatisés.", contenu: "Tester son code n'est pas une perte de temps. Avec Vitest, l'exécution est instantanée. Cela garantit qu'une correction ne casse pas une autre fonctionnalité.", date: "21 Mars", temps: "8 min", likes: 284 },
    { id: 20, type: "backend", categorie: "Backend", titre: "Serverless avec AWS", resume: "Déployez du code sans gérer de serveurs physiques.", contenu: "Le Serverless permet de ne payer que pour ce que vous consommez. C'est idéal pour les tâches asynchrones ou les APIs avec des pics de trafic imprévisibles.", date: "20 Mars", temps: "11 min", likes: 395 }
  ]);

  const gererLike = (idArticle) => {
    setDataArticles(dataArticles.map(art => 
      art.id === idArticle ? { ...art, likes: art.likes + 1 } : art
    ));
  };

  return (
    <BrowserRouter>
      <nav className="navbar">
        <Link to="/" className="logo">DevTech <span>Magazine</span></Link>
        <div className="nav-links">
          <Link to="/">Accueil</Link>
          <span className="badge-count">{dataArticles.length} Articles</span>
        </div>
        
      </nav>
      <Routes>
        <Route path="/" element={<Accueil articles={dataArticles} />} />
        <Route path="/article/:id" element={<ArticleDetail donnees={dataArticles} actionLike={gererLike} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;