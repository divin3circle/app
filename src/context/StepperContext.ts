import { createContext } from 'react';

export type UserData = {
  id: string;
  username: string;
  membershipDate: string;
  role: string;
  businessType: string;
  teams: Team[] | [];
  tokenBalance: number;
  stakedAmount: number;
  dateStaked: string;
  hasEducationalAccess: boolean;
  proposals: Proposal[] | [];
  votingPower: number;
  votingPowerMaturityDate: string;
};

export type Proposal = {
  id: string;
  title: string;
  description: string;
  datePublished: string;
  votes: number;
  status: string;
  owner: string;
  isApproved: boolean;
};

export type Team = {
  id: string;
  name: string;
  description: string;
  members: UserData[] | [];
  content: EducationalContent[] | [];
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
    teams: [],
    tokenBalance: 10,
    stakedAmount: 0,
    dateStaked: '',
    hasEducationalAccess: false,
    proposals: [],
    votingPower: 0,
    votingPowerMaturityDate: 'December 31, 2021',
  },
  setUserData: (userData: UserData) => {},
});
