import React, { useEffect } from 'react';
import Stepper from '../components/ui/Stepper';
import StepperControls from '../components/ui/StepperControls';
import UserType from '../components/steps/UserType';
import Preferences from '../components/steps/Preferences';
import Final from '../components/steps/Final';
import { StepperContext } from '../context/StepperContext';
import { useNavigate } from 'react-router-dom';
import { getDoc, setDoc } from '@junobuild/core';
import { to } from 'react-spring';

type TDetailsProps = {
  finalData: {
    username: string;
    type: string;
    interest: string;
    token: number;
  };
  setFinalData: React.Dispatch<
    React.SetStateAction<{
      username: string;
      type: string;
      interest: string;
      token: number;
    }>
  >;
};

function Details({ finalData, setFinalData }: TDetailsProps): JSX.Element {
  const [currentStep, setCurrentStep] = React.useState(1);
  const [userData, setUserData] = React.useState('');
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [data, setData] = React.useState({
    username: '',
    type: '',
    interest: '',
    token: 0,
  });
  const navigate = useNavigate();

  const steps = ['User Type', 'Preferences', 'Complete'];

  useEffect(() => {
    if (
      isSubmitted &&
      userData['username'] !== '' &&
      userData['type'] !== '' &&
      userData['interest'] !== ''
    ) {
      setData({
        username: userData['username'],
        type: userData['type'],
        interest: userData['interest'],
        token: 10,
      });
    }
    // console.log(data);
  }, [userData, isSubmitted]);

  useEffect(() => {
    if (data.username !== '' && data.type !== '' && data.interest !== '') {
      console.log(data);
      const saveData = async () => {
        try {
          await setDoc({
            collection: 'test',
            doc: {
              key: data['username'],
              data: {
                name: data['username'],
                type: data['type'],
                interest: data['interest'],
                token: 10,
              },
            },
          });
          setFinalData({
            username: data['username'],
            type: data['type'],
            interest: data['interest'],
            token: 10,
          });
        } catch (err) {
          console.log(err);
        }
      };
      saveData();
    }
    console.log(isSubmitted);
  }, [data]);
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
    if (currentStep === steps.length - 1) {
      setIsSubmitted(true);
    }
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
        {currentStep !== steps.length && (
          <StepperControls
            handleClick={handleClick}
            currentStep={currentStep}
            steps={steps}
            setIsSubmitted={setIsSubmitted}
          />
        )}
      </div>
    </div>
  );
}

export default Details;
