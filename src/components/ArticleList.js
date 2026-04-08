import React from 'react';
import { Link } from 'react-router-dom';

const ArticleList = ({ liste }) => {
  if (liste.length === 0) {
    return <div style={{textAlign: 'center', padding: '50px', fontSize: '1.2rem', color: '#6b7280'}}>Aucun article trouvé pour cette recherche 🕵️‍♂️</div>;
  }

  return (
    <div className="articles-grid">
      {liste.map((article) => (
        <Link to={`/article/${article.id}`} key={article.id} className="card">
          <span className={`card-badge badge-${article.type}`}>{article.categorie}</span>
          <h2>{article.titre}</h2>
          <p>{article.resume}</p>
          <div className="card-meta">
            <span>{article.date}</span>
            <span>❤️ {article.likes}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ArticleList;