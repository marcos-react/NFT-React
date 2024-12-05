import React, { useContext } from 'react';
import { TutorialContext } from '../Context/TutorialContext';

const Card = () => {
  const {
    currentCardData,
    nextStep,
    prevStep,
    isFirstStep,
    isFinalStep,
  } = useContext(TutorialContext);

  return (
    <div className="card w-full max-w-xs mx-auto bg-base-100 shadow-xl rounded-xl">
      <div
        className="py-5 flex justify-center items-center rounded-t-xl"
        style={{ backgroundColor: currentCardData.bgcolor }}
      >
        <img
          src={currentCardData.image}
          alt={currentCardData.title}
          className="w-full h-48 object-cover rounded-t-xl"
        />
      </div>
      <div className="card-body p-4">
        <h1 className="text-lg font-bold mb-2">{currentCardData.title}</h1>
        <p className="text-sm text-gray-600 mb-4">{currentCardData.description}</p>
        <div className="flex justify-between items-center">
          {!isFirstStep() && (
            <button
              onClick={prevStep}
              className="btn btn-circle btn-secondary"
            >
              <span>Before</span>
            </button>
          )}
          {!isFinalStep() && (
            <button
              onClick={nextStep}
              className="btn btn-circle btn-primary"
            >
              <span>Next</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;

