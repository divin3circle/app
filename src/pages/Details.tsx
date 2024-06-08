import React, { useContext, useEffect } from 'react';
import Stepper from '../components/ui/Stepper';
import StepperControls from '../components/ui/StepperControls';
import UserType from '../components/steps/UserType';
import Preferences from '../components/steps/Preferences';
import Final from '../components/steps/Final';
import { StepperContext, UserData } from '../context/StepperContext';
import { useNavigate } from 'react-router-dom';

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
  const { userData, setUserData } = useContext(StepperContext);
  // const [userData, setUserData] = React.useState('');
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [data, setData] = React.useState({
    username: '',
    type: '',
    interest: '',
    token: 0,
  });
  const navigate = useNavigate();
  const [finalUser, setFinalUser] = React.useState<UserData>({
    id: '',
    username: '',
    membershipDate: '',
    role: '',
    businessType: '',
    teams: [],
    tokenBalance: BigInt(10),
    stakedAmount: BigInt(0),
    dateStaked: '',
    hasEducationalAccess: false,
    proposals: [],
    votingPower: BigInt(0),
    votingPowerMaturityDate: '',
  });

  const steps = ['User Type', 'Preferences', 'Complete'];

  // useEffect(() => {
  //   if (
  //     isSubmitted &&
  //     userData['username'] !== '' &&
  //     userData['role'] !== '' &&
  //     userData['interest'] !== ''
  //   ) {
  //     setData({
  //       username: userData['username'],
  //       type: userData['type'] as string,
  //       interest: userData['interest'],
  //       token: 10,
  //     });
  //   }
  //   // console.log(data);
  // }, [userData, isSubmitted]);

  // useEffect(() => {
  //   if (data.username !== '' && data.type !== '' && data.interest !== '') {
  //     console.log(data);
  //     const saveData = async () => {
  //       try {
  //         await setDoc({
  //           collection: 'test',
  //           doc: {
  //             key: data['username'],
  //             data: {
  //               name: data['username'],
  //               type: data['type'],
  //               interest: data['interest'],
  //               token: 10,
  //             },
  //           },
  //         });
  //         setFinalData({
  //           username: data['username'],
  //           type: data['type'],
  //           interest: data['interest'],
  //           token: 10,
  //         });
  //       } catch (err) {
  //         console.log(err);
  //       }
  //     };
  //     saveData();
  //   }
  //   console.log(isSubmitted);
  // }, [data]);

  // console.log(finalUser);

  useEffect(() => {
    if (
      userData.username !== '' &&
      userData.role !== '' &&
      userData.businessType !== ''
    ) {
      console.log(userData);
    }
  }, [userData]);
  console.log(userData);
  const displaySteps = (step: number) => {
    switch (step) {
      case 1:
        return <UserType setFinalUser={setFinalUser} finalUser={finalUser} />;
        break;
      case 2:
        return (
          <Preferences setFinalUser={setFinalUser} finalUser={finalUser} />
        );
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
