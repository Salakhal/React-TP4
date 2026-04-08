import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ArticleDetail = ({ donnees, actionLike }) => {
  const { id } = useParams();
  const article = donnees.find((item) => item.id.toString() === id);

  if (!article) return <div className="container"><h2>Article non trouvé</h2><Link to="/">Retour</Link></div>;

  return (
    <div className="container" style={{maxWidth: '800px', marginTop: '50px'}}>
      <span className={`card-badge badge-${article.type}`}>{article.categorie}</span>
      <h1 style={{fontSize: '2.5rem', margin: '20px 0'}}>{article.titre}</h1>
      <p style={{fontSize: '1.2rem', color: '#64748b', marginBottom: '30px', borderLeft: '4px solid #3b82f6', paddingLeft: '15px'}}>
        {article.resume}
      </p>
      <div style={{lineHeight: '1.8', fontSize: '1.1rem'}}>
        <p>{article.contenu}</p>
        <p>L'évolution technologique en 2026 nous montre que <strong>{article.titre}</strong> devient un pilier incontournable. Ce contenu professionnel est conçu pour vous aider à mieux comprendre les enjeux du secteur.</p>
      </div>
      <div style={{marginTop: '40px', borderTop: '1px solid #eee', paddingTop: '20px'}}>
        <button onClick={() => actionLike(article.id)} className="btn-read" style={{background: '#ef4444', border: 'none'}}>
          ❤️ Like ({article.likes})
        </button>
        <Link to="/" style={{marginLeft: '20px', textDecoration: 'none', color: '#3b82f6'}}>← Retour à l'accueil</Link>
      </div>
    </div>
  );
};

export default ArticleDetail;