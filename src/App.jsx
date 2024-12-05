import React from 'react';
import './App.css';
import { TutorialProvider } from './Context/TutorialContext';
import Card from './components/Card';

const App = () => {
  return (
    <TutorialProvider>
      <Card />
    </TutorialProvider>
  );
};

export default App;
