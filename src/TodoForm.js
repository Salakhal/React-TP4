import React, { useState } from 'react';

const TodoForm = ({ onNouvelleTache }) => {
  const [valeurInput, setValeurInput] = useState('');

  const gererValidation = (event) => {
    // Stoppe le rafraîchissement de la page
    event.preventDefault();
    
    // Nettoie la saisie
    const texteNettoye = valeurInput.trim();
    
    if (texteNettoye) {
      onNouvelleTache(texteNettoye);
      setValeurInput(''); // On vide l'input
    }
  };

  return (
    <form onSubmit={gererValidation} style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
      <input
        type="text"
        value={valeurInput}
        onChange={(e) => setValeurInput(e.target.value)}
        placeholder="Que devez-vous faire ?"
        required
        style={{ flex: 1, padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
      />
      <button 
        type="submit" 
        style={{ padding: '10px 15px', background: '#28a745', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
      >
        Enregistrer
      </button>
    </form>
  );
};

export default TodoForm;