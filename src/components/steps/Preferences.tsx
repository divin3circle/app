import React, { useContext } from 'react';
import { StepperContext, UserData } from '../../context/StepperContext';
type TUserTypeProps = {
  finalUser: UserData;
  setFinalUser: React.Dispatch<React.SetStateAction<UserData>>;
};
function Preferences({ finalUser, setFinalUser }: TUserTypeProps) {
  const { userData, setUserData } = useContext(StepperContext);
  const [businessType, setBusinessType] = React.useState('');

  const handleBusinessType = (e: React.ChangeEvent<HTMLInputElement>) => {
    const b = e.target.value;
    setBusinessType(b);
  };
  React.useEffect(() => {
    setUserData({ ...userData, businessType: businessType });

    setFinalUser({ ...userData, businessType: businessType });
    setUserData({ ...userData, businessType: businessType });
  }, [businessType]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  return (
    <div>
      <div className="mx-auto max-w-lg text-center">
        <h1 className="text-2xl font-bold sm:text-3xl">Almost there</h1>

        <p className="mt-4 text-gray-500">
          What type of Business are you interested in?
        </p>
      </div>
      <div className="mx-auto mb-0 mt-8 max-w-md space-y-4">
        <div>
          <label htmlFor="interest" className="sr-only">
            Main Interest
          </label>

          <div className="relative">
            <input
              onChange={handleBusinessType}
              value={businessType || ''}
              name="interest"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="A business that you are interested in or own."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Preferences;
