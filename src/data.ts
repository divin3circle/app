import { iconsImgs } from './assets/images';
import { teamImgs } from './assets/images';
import profile from './assets/profile.jpg';
export const navigationLinks = [
  { id: 1, title: 'Home', image: iconsImgs.home },
  { id: 2, title: 'Proposals', image: iconsImgs.budget },
  { id: 3, title: 'My Teams', image: iconsImgs.plane },
  { id: 4, title: 'Loans & Grants', image: iconsImgs.wallet },
  { id: 5, title: 'Finacials', image: iconsImgs.bills },
  { id: 6, title: 'My Reports', image: iconsImgs.report },
  { id: 7, title: 'My Targets', image: iconsImgs.wallet },
  { id: 8, title: 'AI Financials', image: iconsImgs.wealth },
  { id: 9, title: 'Account', image: iconsImgs.user },
  { id: 10, title: 'Settings', image: iconsImgs.gears },
];

export const learningTeams = [
  {
    id: 11,
    name: 'Nairobi Womens Group',
    image: teamImgs.team1,
    date: '23/12/04',
    members: 220,
  },
  {
    id: 12,
    name: 'Lake Bay Group',
    image: teamImgs.team,
    date: '23/07/21',
    members: 170,
  },
  {
    id: 13,
    name: 'Inua Mama Group',
    image: teamImgs.team3,
    date: '23/08/25',
    members: 64,
  },
];

export const reportData = [
  {
    id: 14,
    month: 'Jan',
    value1: 90,
    value2: null,
  },
  {
    id: 15,
    month: 'Feb',
    value1: 35,
    value2: 60,
  },
  {
    id: 16,
    month: 'Mar',
    value1: 25,
    value2: null,
  },
  {
    id: 17,
    month: 'Apr',
    value1: 100,
    value2: null,
  },
  {
    id: 18,
    month: 'May',
    value1: 55,
    value2: null,
  },
];

export const proposals = [
  {
    id: 19,
    title: 'Grant Proposal',
    type: 'Ongoing',
    votes: 20,
    isCompleted: false,
    description: 'This is an ongoing grant proposal.',
  },
  {
    id: 20,
    title: 'Loan Payment Proposal',
    type: 'Ongoing',
    votes: 7,
    isCompleted: false,
    description: 'This is an ongoing loan payment proposal.',
  },
  {
    id: 21,
    title: 'Token Governance Proposal',
    type: 'Ongoing',
    votes: 4,
    isCompleted: false,
    description: 'This is an ongoing token governance proposal.',
  },
  {
    id: 22,
    title: 'Team Funding Proposal',
    type: null,
    votes: 130,
    isCompleted: true,
    description: 'This team funding proposal has been completed.',
  },
  {
    id: 23,
    title: 'Community Garden Project',
    type: null,
    votes: 400,
    isCompleted: true,
    description: 'The community garden project has been completed.',
  },
];

export const subscriptions = [
  {
    id: 24,
    title: 'LinkedIn',
    due_date: '23/12/04',
    amount: 20000,
  },
  {
    id: 25,
    title: 'Netflix',
    due_date: '23/12/10',
    amount: 5000,
  },
  {
    id: 26,
    title: 'DSTV',
    due_date: '23/12/22',
    amount: 2000,
  },
];

export const loans = [
  {
    id: 24,
    title: 'ITO Grants',
    type: 'Grant',
    due_date: 'Grant😊',
    amount: 2000,
    minToken: 0,
  },
  {
    id: 25,
    title: 'Inua Mama Loans',
    type: 'Loan',
    due_date: 'March',
    amount: 20000,
    minToken: 300,
  },
  {
    id: 26,
    title: 'AgroForex Loans',
    type: 'Loan',
    due_date: 'December',
    amount: 2000,
    minTokens: 1000,
  },
];

export const targets = [
  {
    id: 27,
    image: profile,
    saving_amount: 25000,
    title: 'Month Target',
    date_taken: '23/12/22',
    amount_left: 4000,
  },
];
