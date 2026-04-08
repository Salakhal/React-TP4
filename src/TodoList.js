import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ elements, basculerEtat, retirerElement }) => {
  // Petit bonus : message s'il n'y a pas de tâches (différent du prof)
  if (elements.length === 0) {
    return <p style={{ textAlign: 'center', color: '#888', fontStyle: 'italic' }}>Votre liste est vide pour le moment.</p>;
  }

  return (
    <div style={{ border: '1px solid #ddd', borderRadius: '5px', overflow: 'hidden' }}>
      {elements.map((item) => (
        <TodoItem
          key={item.code} // Clé obligatoire pour React
          element={item}
          actionCocher={basculerEtat}
          actionSupprimer={retirerElement}
        />
      ))}
    </div>
  );
};

export default TodoList;