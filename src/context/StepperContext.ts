import { createContext } from 'react';

export type UserData = {
  id: string;
  username: string;
  membershipDate: string;
  role: string;
  businessType: string;
  teams: Team[];
  tokenBalance: bigint;
  stakedAmount: bigint;
  dateStaked: string;
  hasEducationalAccess: boolean;
  proposals: Proposal[];
  votingPower: bigint;
  votingPowerMaturityDate: string;
};

export type Proposal = {
  id: string;
  title: string;
  description: string;
  datePublished: string;
  votes: bigint;
  status: string;
  owner: string;
  isApproved: boolean;
};

export type Team = {
  id: string;
  name: string;
  description: string;
  members: UserData[];
  content: EducationalContent[];
};

export type EducationalContent = {
  id: string;
  title: string;
  content: string;
  link: string;
  datePublished: string;
  paid: boolean;
};

export const StepperContext = createContext({
  userData: {
    id: '',
    username: '',
    membershipDate: '',
    role: '',
    businessType: '',
    teams: [] as Team[],
    tokenBalance: BigInt(10),
    stakedAmount: BigInt(0),
    dateStaked: '',
    hasEducationalAccess: false,
    proposals: [] as Proposal[],
    votingPower: BigInt(0),
    votingPowerMaturityDate: 'December 31, 2021',
  },
  setUserData: (userData: UserData) => {},
});
