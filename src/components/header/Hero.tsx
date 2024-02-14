import React, { useContext, useEffect, useState } from 'react';
import {
  InternetIdentityProvider,
  signIn,
  authSubscribe,
  Unsubscribe,
  User,
} from '@junobuild/core';
import { useNavigate } from 'react-router-dom';
import { TLoadingProps } from '../../pages/Landing';
import { backend } from '../../declarations/backend';
import { DataContext } from '../../context/DataContext';
type THeroProps = {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const Hero = ({ loading, setLoading }: THeroProps) => {
  const { userData, setUserData } = useContext(DataContext);
  const [user, setUser] = useState<User | undefined | null>(undefined);
  useEffect(() => {
    const checkMembership = async () => {
      const sub: Unsubscribe = authSubscribe((user: User | null): void => {
        console.log(user);
        setUser(user);
      });
      //console.log(user);
      if (user?.key !== null && user?.key !== undefined) {
        //console.log(user);
        const userKey = user.key.toString();
        localStorage.setItem('userKey', userKey);
        //console.log(userKey);
        const isMember = await backend.getUser(userKey);
        //console.log(isMember);
        if (isMember.length !== 0) {
          const currentUser = await backend.getUser(userKey);
          setUserData({ ...userData, id: userKey });
          navigate('/dashboard');
        } else {
          const newUser = { ...userData, id: userKey };
          console.log(newUser);
          setUserData({ ...userData, id: userKey });
          const currentUser = await backend.createUser(newUser);
          navigate('/user-info');
        }
      }
    };
    checkMembership();
  }, [user]);
  const navigate = useNavigate();
  const handleLogin = async () => {
    setLoading(true);
    await signIn({
      provider: new InternetIdentityProvider({}),
    });
    setLoading(false);
    // navigate('/details');
  };

  return (
    <div>
      <section className="relative bg-[url(https://www.shutterstock.com/image-photo/beautiful-female-african-american-business-600nw-1601707636.jpg)] bg-contain bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Empower Yourself, Empower the World
              <strong className="block font-extrabold text-green-500">
                {' '}
                Join Inua DAO{' '}
              </strong>
            </h1>

            <p className="mt-4 max-w-lg sm:text-xl/relaxed">
              Forget traditional investing. Inua DAO goes beyond profits to
              empower women and other small business owners to make a real
              difference. Back groundbreaking initiatives, connect with
              like-minded individuals, and shape a more sustainable and
              equitable world.
            </p>

            <div className="md:mt-8 flex flex-wrap gap-4 text-center mt-16">
              <button
                className="bg-green-500 px-12 py-3 text-white text-sm font-medium rounded w-full block shadow hover:text-green-500 border-green-500 hover:bg-transparent border-[1px] ease-in duration-150 sm:w-auto"
                onClick={handleLogin}
              >
                Get Started
              </button>

              <a
                href="#"
                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-green-600 shadow hover:text-green-700 focus:outline-none focus:ring active:text-green-500 sm:w-auto"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
