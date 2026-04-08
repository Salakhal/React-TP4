import React from 'react';

const TodoItem = ({ element, actionCocher, actionSupprimer }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px', borderBottom: '1px solid #eee', backgroundColor: element.estFini ? '#f9f9f9' : '#fff' }}>
      <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', gap: '10px' }}>
        <input
          type="checkbox"
          checked={element.estFini}
          onChange={() => actionCocher(element.code)}
        />
        <span style={{ textDecoration: element.estFini ? 'line-through' : 'none', color: element.estFini ? '#aaa' : '#333', fontWeight: '500' }}>
          {element.titre}
        </span>
      </label>
      
      <button 
        onClick={() => actionSupprimer(element.code)}
        style={{ background: '#dc3545', color: 'white', border: 'none', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer', fontSize: '12px' }}
      >
        Retirer
      </button>
    </div>
  );
};

export default TodoItem;