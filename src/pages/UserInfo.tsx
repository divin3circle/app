import React, { useState, useContext } from 'react';
import Navbar from '../components/header/Navbar';
import { DataContext } from '../context/DataContext';
import Loading from '../components/ui/Loading';
import { useNavigate } from 'react-router-dom';
import { backend } from '../declarations/backend';

function UserInfo() {
  const { userData, setUserData } = useContext(DataContext);
  const [name, setName] = useState('');
  const [communityRole, setCommunityRole] = useState('');
  const [business, setBusiness] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleRoleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCommunityRole(event.target.value);
  };

  const handleBusinessTypeChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setBusiness(event.target.value);
  };

  const handleInfo = async () => {
    setLoading(true);
    const newUser = {
      ...userData,
      username: name,
      role: communityRole,
      businessType: business,
      membershipDate: new Date().toISOString(),
    };
    console.log(userData);
    console.log(newUser);
    //fetch the unregistered user from backend to get their id, set up in the Hero component
    const unRegisteredUser = await backend.getUser(newUser.id);
    //update the data of now registered user to the backend and send it to the backend
    const registeredUser = await { ...newUser };
    //send the registered user to the backend
    const updated = await backend.updateUser(registeredUser.id, registeredUser);
    // console.log(updated);
    //verify if the user is updated and set the user data to the new user
    // const vfu = await backend.getUser(newUser.id);
    // console.log(updated, vfu);
    setUserData({ ...registeredUser });
    setLoading(false);
    navigate('/dashboard');
  };

  if (loading) return <Loading />;

  return (
    <div>
      <Navbar />
      <div className="container mx-auto flex justify-center items-center h-screen">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <p className="text-center text-gray-500 font-semibold text-2xl">
            Seems like you are a new user, Let's sign you up 🚀.
          </p>
          <div className="space-y-4 py-8">
            <div>
              <label className="sr-only" htmlFor="name">
                Username
              </label>
              <input
                className="w-full rounded-lg border-gray-200 p-3 text-sm border-[1px]"
                placeholder="Username"
                type="text"
                id="name"
                onChange={handleUsernameChange}
              />
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="sr-only" htmlFor="role">
                  Community Role
                </label>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm border-[1px]"
                  placeholder="What role will you play in the community?"
                  type="text"
                  id="role"
                  onChange={handleRoleChange}
                />
              </div>

              <div>
                <label className="sr-only" htmlFor="business">
                  Business Type
                </label>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm border-[1px]"
                  placeholder="What type of business do you run?"
                  id="business"
                  onChange={handleBusinessTypeChange}
                />
              </div>
            </div>

            <div>
              <label className="sr-only" htmlFor="description">
                Business Description
              </label>

              <textarea
                className="w-full rounded-lg border-gray-200 p-3 text-sm border-[1px]"
                placeholder="Tell us about your business."
                rows={5}
                id="description"
              ></textarea>
            </div>
          </div>
          <div className="flex items-center justify-center my-8">
            <button
              className="bg-green-500 px-12 py-3 text-white text-sm font-medium rounded w-full block shadow hover:text-green-500 border-green-500 hover:bg-transparent border-[1px] ease-in duration-150 sm:w-auto"
              onClick={handleInfo}
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
