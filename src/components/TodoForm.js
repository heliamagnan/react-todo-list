// Importe React et le hook useState depuis la bibliothèque React
import React, { useState } from 'react';

// Définit le composant TodoForm avec une prop addTodo
const TodoForm = ({ addTodo }) => {
  // Utilise le hook useState pour créer un état local 'text' et une fonction 'setText' pour le mettre à jour
  const [text, setText] = useState('');

  // Fonction appelée lors de la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    // Vérifie si le texte n'est pas vide avant d'ajouter la tâche
    if (text.trim() !== '') {
      // Appelle la fonction addTodo avec le texte comme argument
      addTodo(text);
      // Réinitialise le texte à une chaîne vide après l'ajout de la tâche
      setText('');
    }
  };

  // Rendu du formulaire avec un champ de texte et un bouton de soumission
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ajouter une tâche"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Ajouter</button>
    </form>
  );
};

// Exporte le composant TodoForm
export default TodoForm;
