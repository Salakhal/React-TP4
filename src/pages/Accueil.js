import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Accueil = ({ articles }) => {
  const [filter, setFilter] = useState('tous');
  const [searchTerm, setSearchTerm] = useState(''); // État pour la recherche

  // Logique de filtrage combinée (Catégorie + Recherche)
  const articlesFiltrés = articles.filter(art => {
    const correspondAuFiltre = filter === 'tous' || art.type === filter;
    const correspondALaRecherche = 
      art.titre.toLowerCase().includes(searchTerm.toLowerCase()) || 
      art.categorie.toLowerCase().includes(searchTerm.toLowerCase());
    
    return correspondAuFiltre && correspondALaRecherche;
  });

  return (
    <div className="container">
      {/* Header avec Titre et Barre de recherche */}
      <div className="home-header" style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '10px' }}>Ressources Front-End & Design</h1>
        <p style={{ color: '#64748b', marginBottom: '30px' }}>Des articles de qualité pour les développeurs exigeants.</p>
        
        <div className="search-container">
          <input 
            type="text" 
            placeholder="Rechercher par titre ou catégorie (ex: React, UI...)" 
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="filter-bar">
        <button onClick={() => setFilter('tous')} className={filter === 'tous' ? 'active' : ''}>Tous</button>
        <button onClick={() => setFilter('react')} className={filter === 'react' ? 'active' : ''}>React</button>
        <button onClick={() => setFilter('js')} className={filter === 'js' ? 'active' : ''}>JavaScript</button>
        <button onClick={() => setFilter('ui')} className={filter === 'ui' ? 'active' : ''}>UI/UX</button>
        <button onClick={() => setFilter('backend')} className={filter === 'backend' ? 'active' : ''}>Backend</button>
      </div>

      <div className="articles-grid">
        {articlesFiltrés.length > 0 ? (
          articlesFiltrés.map(art => (
            <div key={art.id} className="article-card">
              <div>
                <span className={`card-badge badge-${art.type}`}>{art.categorie}</span>
                <h3>{art.titre}</h3>
                <p>{art.resume}</p>
              </div>
              <div className="card-footer">
                <span>📅 {art.date}</span>
                <Link to={`/article/${art.id}`} className="btn-read">Lire la suite</Link>
              </div>
            </div>
          ))
        ) : (
          <div style={{ textAlign: 'center', gridColumn: '1 / -1', padding: '50px' }}>
            <h3>Aucun article ne correspond à votre recherche.</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Accueil;