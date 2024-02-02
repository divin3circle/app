import { User, signOut } from '@junobuild/core';
import React from 'react';
import { useContext } from 'react';
import { StepperContext } from '../context/StepperContext';
import Sidebar from '../dashboard_components/sidebar/Sidebar';
import Content from '../dashboard_components/content/Content';
import { SidebarProvider } from '../context/SidebarContext';

type TDashboardProps = {
  user: User | null | undefined;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  finalData: {
    username: string;
    type: string;
    interest: string;
  };
  setFinalData: React.Dispatch<
    React.SetStateAction<{
      username: string;
      type: string;
      interest: string;
    }>
  >;
};

function Dashboard({
  user,
  loading,
  setLoading,
  finalData,
  setFinalData,
}: TDashboardProps): JSX.Element {
  // const { userData, setUserData } = useContext(StepperContext);
  return (
    <div className="app md:m-4">
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
    </div>
  );
}

export default Dashboard;
