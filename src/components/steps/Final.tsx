import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { NavigateFunction } from 'react-router-dom';
import { useContext } from 'react';
import { StepperContext } from '../../context/StepperContext';
import { useSpring, animated } from 'react-spring';

type TFinalProps = {
  navigate: NavigateFunction;
};
function Final({ navigate }: TFinalProps) {
  // const { userData, setUserData } = useContext(StepperContext);
  const fade = useSpring({ opacity: 1, from: { opacity: 0 } });
  const navigateToDashboard = () => {
    navigate('/dashboard');
  };
  return (
    <animated.div
      style={fade}
      className="flex flex-col items-center justify-center "
    >
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center justify-center">
          <h1 className="text-3xl font-bold mb-4 flex justify-center items-center">
            Account Created!
            <FaCheckCircle className="text-green-500 mx-auto" />
          </h1>
        </div>
        <p className="text-gray-700">
          Congratulations! Your account has been successfully created.
        </p>
        <div className="flex items-center justify-center py-4">
          <button
            onClick={navigateToDashboard}
            className="bg-green-500 text-white px-4 py-2 rounded-lg mt-4"
          >
            Proceed to Dashboard
          </button>
        </div>
      </div>
    </animated.div>
  );
}

export default Final;
