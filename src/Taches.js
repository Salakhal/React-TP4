import React, { useState } from 'react';

function Taches() {
  const [taches, setTaches] = useState([
    { id: 1, texte: "Configurer React Router", terminee: true },
    { id: 2, texte: "Créer une belle interface CSS", terminee: false },
  ]);
  const [texte, setTexte] = useState('');

  const ajouterTache = (e) => {
    e.preventDefault();
    if (texte.trim() === '') return;
    const nouvelleTache = { id: Date.now(), texte, terminee: false };
    setTaches([...taches, nouvelleTache]);
    setTexte('');
  };

  const changerEtat = (id) => {
    setTaches(taches.map((t) => t.id === id ? { ...t, terminee: !t.terminee } : t));
  };

  const supprimerTache = (id) => {
    setTaches(taches.filter((t) => t.id !== id));
  };

  return (
    <div className="card">
      <h1>Gestion des Tâches (To-Do)</h1>
      
      <form onSubmit={ajouterTache} className="todo-form">
        <input
          value={texte}
          onChange={(e) => setTexte(e.target.value)}
          placeholder="Entrez une nouvelle tâche..."
          required
        />
        <button type="submit" className="btn-primary">Ajouter</button>
      </form>

      <ul className="todo-list">
        {taches.length === 0 ? <p style={{ color: '#64748b' }}>Aucune tâche pour le moment. 🎉</p> : null}
        
        {taches.map((tache) => (
          <li key={tache.id} className="todo-item">
            <div className="todo-content">
              <input
                type="checkbox"
                className="todo-checkbox"
                checked={tache.terminee}
                onChange={() => changerEtat(tache.id)}
              />
              <span style={{ 
                textDecoration: tache.terminee ? 'line-through' : 'none',
                color: tache.terminee ? '#94a3b8' : '#1e293b'
              }}>
                {tache.texte}
              </span>
            </div>
            <button className="btn-danger" onClick={() => supprimerTache(tache.id)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Taches;