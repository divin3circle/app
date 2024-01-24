import React, { useContext } from 'react';
import { StepperContext } from '../../context/StepperContext';

function Preferences() {
  const { userData, setUserData } = useContext(StepperContext);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  return (
    <div>
      <div className="mx-auto max-w-lg text-center">
        <h1 className="text-2xl font-bold sm:text-3xl">Almost there😇</h1>

        <p className="mt-4 text-gray-500">
          What is your main main interest in the Inua DAO community?
        </p>
      </div>
      <div className="mx-auto mb-0 mt-8 max-w-md space-y-4">
        <div>
          <label htmlFor="username" className="sr-only">
            Main Interest
          </label>

          <div className="relative">
            <input
              onChange={handleChange}
              value={userData['interest'] || ''}
              name="interest"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Grant Funds🤑,Community Loans💵,or Contribute💰?"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Preferences;
