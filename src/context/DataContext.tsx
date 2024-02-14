import {
  useContext,
  useEffect,
  useState,
  createContext,
  ReactNode,
} from 'react';
import { UserData } from './StepperContext';
import { Team, Proposal, EducationalContent } from './StepperContext';

interface DataProviderProps {
  children: ReactNode;
}

export const DataContext = createContext<{
  userData: UserData;
  setUserData: (user: UserData) => void;
}>({
  userData: {
    id: '',
    username: '',
    membershipDate: '',
    role: '',
    businessType: '',
    teams: [] as Team[],
    tokenBalance: 10,
    stakedAmount: 0,
    dateStaked: '',
    hasEducationalAccess: false,
    proposals: [] as Proposal[],
    votingPower: BigInt(0),
    votingPowerMaturityDate: '',
  },
  setUserData: (userData: UserData) => {},
});

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [userData, setUserData] = useState<UserData>({
    id: '',
    username: '',
    membershipDate: '',
    role: '',
    businessType: '',
    teams: [] as Team[],
    tokenBalance: 10,
    stakedAmount: 0,
    dateStaked: '',
    hasEducationalAccess: false,
    proposals: [] as Proposal[],
    votingPower: BigInt(0),
    votingPowerMaturityDate: '',
  });

  return (
    <DataContext.Provider value={{ userData, setUserData }}>
      {children}
    </DataContext.Provider>
  );
};
