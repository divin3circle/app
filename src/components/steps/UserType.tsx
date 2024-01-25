import React, { useContext } from 'react';
import { StepperContext } from '../../context/StepperContext';

function UserType() {
  const { userData, setUserData } = useContext(StepperContext);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  // console.log(userData);
  return (
    <div>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">
            This won't take long😊
          </h1>

          <p className="mt-4 text-gray-500">
            We just need a few details to get you started. Please specify the
            type of user you are and your username. These details will only be
            visible to you and are completely anonymous.
          </p>
        </div>

        <div className="mx-auto mb-0 mt-8 max-w-md space-y-4">
          <div>
            <label htmlFor="username" className="sr-only">
              User Type
            </label>

            <div className="relative">
              <input
                onChange={handleChange}
                value={userData['type'] || ''}
                name="type"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Community Member👩‍🏫 or Contributor💰?"
              />
            </div>
          </div>
          <div>
            <label htmlFor="username" className="sr-only">
              Username
            </label>

            <div className="relative">
              <input
                onChange={handleChange}
                value={userData['username'] || ''}
                name="username"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="What should we call you?😄"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserType;
