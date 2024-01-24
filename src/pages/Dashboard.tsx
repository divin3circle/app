import { User, signOut } from '@junobuild/core';
import React from 'react';

type TDashboardProps = {
  user: User | null | undefined;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

function Dashboard({
  user,
  loading,
  setLoading,
}: TDashboardProps): JSX.Element {
  return (
    <div>
      <h1>The Dashboard</h1>
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
    </div>
  );
}

export default Dashboard;
