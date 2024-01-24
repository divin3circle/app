import React from 'react';
import { FaAngleLeft, FaAngleRight, FaRegCheckCircle } from 'react-icons/fa';

type TStepperControlsProps = {
  currentStep: number;
  steps: string[];
  handleClick: (direction: string) => void;
};

function StepperControls({
  currentStep,
  steps,
  handleClick,
}: TStepperControlsProps) {
  return (
    <div className="flex justify-around container mt-4 mb-8">
      <button
        onClick={() => handleClick('prev')}
        className={`bg-gray-100 font-semibold md:px-12 px-8 py-2 rounded-md hover:border-[1px] border-green-500 hover:bg-transparent ease-in duration-150 ${
          currentStep === 1 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
        }`}
      >
        <FaAngleLeft size={28} />
      </button>
      <button
        onClick={() => handleClick('next')}
        className="bg-black text-white font-semibold  md:px-12 px-8 py-2 rounded-md hover:border-[1px] border-green-500 hover:bg-transparent ease-in duration-150 hover:text-black cursor-pointer"
      >
        {currentStep === steps.length - 1 ? (
          <FaRegCheckCircle size={28} />
        ) : (
          <FaAngleRight size={28} />
        )}
      </button>
    </div>
  );
}

export default StepperControls;
