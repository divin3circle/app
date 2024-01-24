import React from 'react';
import Stepper from '../components/ui/Stepper';
import StepperControls from '../components/ui/StepperControls';
import UserType from '../components/steps/UserType';
import Preferences from '../components/steps/Preferences';
import Final from '../components/steps/Final';
import { StepperContext } from '../context/StepperContext';
import { useNavigate } from 'react-router-dom';

function Details() {
  const [currentStep, setCurrentStep] = React.useState(1);
  const [userData, setUserData] = React.useState('');
  const [finalData, setFinalData] = React.useState<any[]>([]);
  const navigate = useNavigate();

  const steps = ['User Type', 'Preferences', 'Complete'];
  console.log(userData);
  const displaySteps = (step: number) => {
    switch (step) {
      case 1:
        return <UserType />;
        break;
      case 2:
        return <Preferences />;
        break;
      case 3:
        return <Final navigate={navigate} />;
        break;
      default:
    }
  };

  const handleClick = (direction: string) => {
    let newStep = currentStep;
    direction === 'next' ? newStep++ : newStep--;
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };
  return (
    <div className="md:w-3/4 mx-auto shadow-xl rounded-xl p-2 bg-white">
      {/* Stepper form*/}
      <div className="container horzontal mt-5">
        <Stepper steps={steps} currentStep={currentStep} />
      </div>
      <div className="my-10 p-10">
        <StepperContext.Provider
          value={{
            userData,
            setUserData,
            finalData,
            setFinalData,
          }}
        >
          {displaySteps(currentStep)}
        </StepperContext.Provider>
      </div>
      {/* controls*/}
      <div>
        <StepperControls
          handleClick={handleClick}
          currentStep={currentStep}
          steps={steps}
        />
      </div>
    </div>
  );
}

export default Details;
