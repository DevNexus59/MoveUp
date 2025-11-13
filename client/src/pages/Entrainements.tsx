import React from 'react';
import Search from '../components/Search';
const Entrainements: React.FC = () => {
  const exercices = [
    'Pompes',
    'Squats',
    'Abdos',
    'Fentes',
    'Tractions',
    'Planche',
    'Burpees'
  ];

  return (
    <div>
      <h1>Liste des Entraînements</h1>
      <Search data={exercices} />
    </div>
  );
};

export default Entrainements;
