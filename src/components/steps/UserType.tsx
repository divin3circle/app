import React, { useContext, useEffect } from 'react';
import { StepperContext, UserData } from '../../context/StepperContext';

type TUserTypeProps = {
  finalUser: UserData;
  setFinalUser: React.Dispatch<React.SetStateAction<UserData>>;
};

function UserType({ setFinalUser, finalUser }: TUserTypeProps) {
  const [name, setName] = React.useState('');
  const [role, setRole] = React.useState('');
  const { userData, setUserData } = useContext(StepperContext);

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const n = e.target.value;
    setName(n);
  };
  const handleRole = (e: React.ChangeEvent<HTMLInputElement>) => {
    const r = e.target.value;
    setRole(r);
  };
  useEffect(() => {
    setUserData({ ...userData, username: name, role: role });

    setFinalUser({ ...userData, username: name, role: role });
    setUserData({ ...userData, username: name, role: role });
  }, [name, role]);
  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   setUserData({ ...userData, [name]: value });
  // };
  // console.log(userData);
  return (
    <div>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">
            This won't take long
          </h1>

          <p className="mt-4 text-gray-500">
            We just need a few details to get you started. These details will
            only be visible to you and are completely anonymous.
          </p>
        </div>

        <div className="mx-auto mb-0 mt-8 max-w-md space-y-4">
          <div>
            <label htmlFor="username" className="sr-only">
              Username
            </label>

            <div className="relative">
              <input
                onChange={handleName}
                value={name || ''}
                name="username"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Your username"
              />
            </div>
          </div>
          <div>
            <label htmlFor="role" className="sr-only">
              Role
            </label>

            <div className="relative">
              <input
                onChange={handleRole}
                value={role || ''}
                name="role"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="What's your intended role in the community?"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserType;
