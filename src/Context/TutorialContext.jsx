import React, { createContext, useState } from 'react';
import timeManagment from './../assets/time_managment.svg';
import programming from './../assets/programming.svg';
import meditation from './../assets/meditation.svg';

// Crear el contexto
export const TutorialContext = createContext();

// Proveedor del contexto
export const TutorialProvider = ({ children }) => {
  const tutorialData = [
    {
      title: "Dedica moltes hores",
      description: "Un minim de 30 hores a la setmana. Si no en tens prou, hauràs de dedicar-li mes hores. Al principi sembla imposible, però notaràs una millora ràpidament",
      bgcolor: "#44979f",
      image: timeManagment
    },
    {
      title: "Programa projectes propis",
      description: "Mes val 10 hores treballant en projectes propis, que 10 hores mirant tutorials. La motivación i la implicació en el projecte ajudará a accelerar el teu aprenentatge",
      bgcolor: "#ffffff",
      image: programming
    },
    {
      title: "Procura descansar",
      description: "Descansar bé i desconnectar són vitals. D'aquesta manera reduirás l'estrès i l'ansietat. Millorarás el teu aprenentatge",
      bgcolor: "#bbbbbb",
      image: meditation
    }
  ];

  const [step, setStep] = useState(0);

  const nextStep = () => step < tutorialData.length - 1 && setStep(step + 1);
  const prevStep = () => step > 0 && setStep(step - 1);

  const isFirstStep = () => step === 0;
  const isFinalStep = () => step === tutorialData.length - 1;

  return (
    <TutorialContext.Provider
      value={{
        tutorialData,
        currentCardData: tutorialData[step],
        step,
        nextStep,
        prevStep,
        isFirstStep,
        isFinalStep,
        setStep,
        totalStep: tutorialData.length,
      }}
    >
      {children}
    </TutorialContext.Provider>
  );
};