import { select } from '@material-tailwind/react';
import React, { useEffect, useRef, useState } from 'react';

type TStepperProps = {
  steps: string[];
  currentStep: number;
};
type StepType = {
  description: string;
  completed: boolean;
  highlighted: boolean;
  selected: boolean;
};

function Stepper({ currentStep, steps }: TStepperProps) {
  const [newStep, setNewStep] = useState<StepType[]>([]);
  const stepRef = useRef<any[]>([]);
  const updateStep = (stepNumber: number, steps: any | any[]) => {
    const newSteps = [...steps];
    let count = 0;

    while (count < newSteps.length) {
      if (count === stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: true,
          selected: true,
          completed: true,
        };
        count++;
      } else if (count < stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: true,
          completed: true,
        };
        count++;
      } else {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: false,
          completed: false,
        };
        count++;
      }
    }
    return newSteps;
  };
  useEffect(() => {
    //object
    const stepsState = steps.map((step, index) =>
      Object.assign(
        {},
        {
          description: step,
          completed: false,
          highlighted: index === 0 ? true : false,
          selected: index === 0 ? true : false,
        },
      ),
    );
    stepRef.current = stepsState;
    console.log(stepRef.current);
    const current = updateStep(currentStep - 1, stepRef.current);
    setNewStep(current);
  }, [currentStep, steps]);

  const displaySteps = newStep.map((step, index) => {
    console.log(step);
    console.log(newStep);
    return (
      <div
        key={index}
        className={` ${
          index !== newStep.length - 1
            ? 'w-full flex items-center '
            : 'flex items-center'
        }`}
      >
        <div className="relative flex flex-col items-center">
          <div
            className={` rounded-full transition duration-500 ease-in-out border-2 border-gray-300 h-12 w-12 flex items-center justify-center py-3 ${
              step.selected
                ? 'bg-green-500 text-white font-bold border border-green-600'
                : ''
            }`}
          >
            {/* number*/}{' '}
            {step.completed ? (
              <span className="text-white font-bold text-xl">&#10003;</span>
            ) : (
              <h1>{index + 1}</h1>
            )}
          </div>
          <div
            className={`absolute top-0 text-center mt-12 w-32 text-xs font-medium uppercase ${
              step.highlighted ? 'text-gray-900' : 'text-gray-400'
            }`}
          >
            {/* description*/}{' '}
            <p className="py-4 font-semibold">{step.description}</p>
          </div>
        </div>
        <div
          className={`flex-auto border-t-2 transition duration-500 ease-in-out ${
            step.completed ? 'border-green-500' : 'border-gray-300'
          }`}
        >
          {/* display line*/}
        </div>
      </div>
    );
  });
  return (
    <div className="mx-4 p-4 flex justify-between items-center">
      {displaySteps}
    </div>
  );
}

export default Stepper;
