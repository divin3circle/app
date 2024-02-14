import { User, signOut } from '@junobuild/core';
import React from 'react';
import { useContext, useEffect } from 'react';
import { StepperContext } from '../context/StepperContext';
import Sidebar from '../dashboard_components/sidebar/Sidebar';
import Content from '../dashboard_components/content/Content';
import { SidebarProvider } from '../context/SidebarContext';
import { DataContext } from '../context/DataContext';

type TDashboardProps = {
  finalData: {
    username: string;
    type: string;
    interest: string;
    token: number;
  };
};

function Dashboard({ finalData }: TDashboardProps): JSX.Element {
  // const { userData, setUserData } = useContext(StepperContext);
  const { userData, setUserData } = useContext(DataContext);
  console.log(userData);
  useEffect(() => {}, []);

  // console.log(userData);
  return (
    <div className="app">
      <Sidebar finalData={finalData} />

      <Content finalData={finalData} />
      {/* <h1>
        Welcome {finalData.username === '' ? '....' : finalData.username}{' '}
      </h1>
      {user !== undefined && user !== null ? (
        <div>
          <button
            className="bg-green-500 px-4 py-2 text-white font-semibold text-xl rounded-md hover:text-green-500 border-green-500 hover:bg-transparent border-[1px] ease-in duration-150"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => signOut()}
          >
            Sign Out
          </button>{' '}
        </div>
      ) : (
        <h1>Not logged in</h1>
      )}
    </div> */}
      {/* <button onClick={() => signOut()} className="py-4 px-4 bg-orange-600">
        sign out
      </button> */}
    </div>
  );
}

export default Dashboard;
