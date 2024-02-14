import {
  $query,
  $update,
  nat,
  Vec,
  StableBTreeMap,
  Record,
  text,
  Principal,
  Opt,
  nat64,
} from 'azle';

type User = Record<{
  id: text;
  username: text;
  membershipDate: text;
  role: text;
  businessType: text;
  teams: Vec<Team>;
  tokenBalance: nat;
  stakedAmount: nat;
  dateStaked: text;
  hasEducationalAccess: boolean;
  proposals: Vec<Proposal>;
  votingPower: nat;
  votingPowerMaturityDate: text;
}>;

type Proposal = Record<{
  id: text;
  title: text;
  description: text;
  datePublished: text;
  votes: nat;
  status: text;
  owner: text;
  isApproved: boolean; // if the proposal is approved to be voted upon, i.e has more than 50% of the total voting power
}>;

type Team = Record<{
  id: text;
  name: text;
  description: text;
  members: Vec<User>;
  content: Vec<EducationalContent>;
}>;
type EducationalContent = Record<{
  id: text;
  title: text;
  content: text;
  link: text;
  datePublished: text;
  paid: boolean;
}>;

const users = new StableBTreeMap<text, User>(0, 100, 1024);
const proposals = new StableBTreeMap<text, Proposal>(1, 100, 1024);
const teams = new StableBTreeMap<text, Team>(2, 100, 1024);
const educationalContent = new StableBTreeMap<text, EducationalContent>(
  3,
  100,
  1024,
);

const teamNames = [
  'Real Estate',
  'Agriculture',
  'Science & Technology',
  'Health',
  'Finance',
];
const teamDescriptions = [
  'Join for real estate discussions and learning opportunities',
  'All you need to know about managing an agriculture and farming business',
  'Learn about the latest in science and technology here',
  'Looking to start a health business? This is the team for you!',
  'Get the latest in finance and investment opportunities here!',
];

const starterProposals: Proposal[] = [
  {
    id: '0',
    title: 'Genesis Proposal',
    description: 'This is the first proposal to be voted on by the community',
    datePublished: '2023-01-01',
    votes: BigInt(0),
    status: 'pending',
    owner: '0',
    isApproved: true, //can be voted on
  },
  {
    id: '1',
    title: 'Opening of the Grant Fund',
    description:
      'Allow every member of the community to apply for a grant to start a business',
    datePublished: '2023-01-01',
    votes: BigInt(0),
    status: 'pending',
    owner: '1',
    isApproved: true, //can be voted on
  },
  {
    id: '2',
    title: 'Third Proposal',
    description: 'This is the third proposal to be voted on by the community',
    datePublished: '2021-10-01',
    votes: BigInt(0),
    status: 'pending',
    owner: '2',
    isApproved: true, //can be voted on
  },
  {
    id: '3',
    title: 'Fourth Proposal',
    description: 'This is the fourth proposal to be voted on by the community',
    datePublished: '2021-10-01',
    votes: BigInt(0),
    status: 'pending',
    owner: '3',
    isApproved: true, //can be voted on
  },
  {
    id: '4',
    title: 'Fifth Proposal',
    description: 'This is the fifth proposal to be voted on by the community',
    datePublished: '2021-10-01',
    votes: BigInt(0),
    status: 'pending',
    owner: '4',
    isApproved: true, //can be voted on
  },
];

//For demo purposes, will create 5 proposals
for (let i = 0; i < starterProposals.length; i++) {
  const proposal = {
    id: i.toString(),
    title: starterProposals[i].title,
    description: starterProposals[i].description,
    datePublished: starterProposals[i].datePublished,
    votes: starterProposals[i].votes,
    status: starterProposals[i].status,
    owner: starterProposals[i].owner,
    isApproved: starterProposals[i].isApproved,
  };
  proposals.insert(proposal.id, proposal);
}

//For demo purposes, will create 5 teams
for (let i = 0; i < teamNames.length; i++) {
  const team = {
    id: i.toString(),
    name: teamNames[i],
    description: teamDescriptions[i],
    members: [] as Vec<User>,
    content: [] as Vec<EducationalContent>,
  };
  teams.insert(team.id, team);
}

//get number of users
$query;
export function getNumberOfUsers(): bigint {
  return BigInt(users.items.length);
}

$update;
export function createUser(user: User): User {
  users.insert(user.id, user);
  return user;
}

$query;
export function getUsers(): Vec<User> {
  return users.values();
}

$query;
export function getUser(id: text): Opt<User> {
  const userOpt = users.get(id);
  if ('None' in userOpt) {
    return Opt.None;
  } else {
    return userOpt;
  }
}

$update;
export function updateUser(id: text, user: User): boolean {
  users.insert(id, user);
  return true;
}

$query;
export function getTeams(): Vec<Team> {
  return teams.values();
}

$query;
export function getProposals(): Vec<Proposal> {
  return proposals.values();
}

//add user to a team
$update;
export function addUserToTeam(userId: text, teamId: text): boolean {
  const userOpt = getUser(userId);
  if ('None' in userOpt) {
    return false;
  }
  const teamOpt = teams.get(teamId);
  if ('None' in teamOpt) {
    return false;
  }
  const updatedTeam = {
    id: teamOpt.Some.id,
    name: teamOpt.Some.name,
    description: teamOpt.Some.description,
    members: [...teamOpt.Some.members, userOpt.Some],
    content: teamOpt.Some.content,
  };
  teams.insert(teamId, updatedTeam);
  return true;
}
//check if user is a member of a team
$query;
export function isUserMemberOfTeam(userId: text, teamId: text): boolean {
  const userOpt = getUser(userId);
  if ('None' in userOpt) {
    return false;
  }
  const teamOpt = teams.get(teamId);
  if ('None' in teamOpt) {
    return false;
  }
  return teamOpt.Some.members.includes(userOpt.Some);
}

//check educational acess
$query;
export function checkEducationalAccess(userId: text): boolean {
  const userOpt = getUser(userId);
  if ('None' in userOpt) {
    return false;
  }
  return userOpt.Some.hasEducationalAccess;
}
//add educational content
$update;
export function addEducationalContent(
  teamId: text,
  educationalContent: EducationalContent,
): Opt<EducationalContent> {
  const teamOpt = teams.get(teamId);
  if ('None' in teamOpt) {
    return Opt.None;
  }
  const updatedTeam = {
    id: teamOpt.Some.id,
    name: teamOpt.Some.name,
    description: teamOpt.Some.description,
    members: teamOpt.Some.members,
    content: [...teamOpt.Some.content, educationalContent],
  };
  teams.insert(teamId, updatedTeam);
  return Opt.Some(educationalContent);
}

//check if team is premium
$query;
export function isTeamPremium(teamId: text): boolean {
  const premiumKey = 0;
  const teamPremiumKey = Number(teamId);
  return premiumKey === teamPremiumKey;
}

//get all proposals
$query;
export function getAllProposals(): Vec<Proposal> {
  return proposals.values();
}
//single proposal
$query;
export function getProposal(id: text): Opt<Proposal> {
  const proposalOpt = proposals.get(id);
  if ('None' in proposalOpt) {
    return Opt.None;
  } else {
    return proposalOpt;
  }
}
//create proposal
$update;
export function createProposal(proposal: Proposal): Proposal {
  proposals.insert(proposal.id, proposal);
  return proposal;
}
//update proposal
$update;
export function updateProposal(id: text, proposal: Proposal): boolean {
  proposals.insert(id, proposal);
  return true;
}

//vote on proposal
$update;
export function voteOnProposal(
  userId: text,
  proposalId: text,
  vote: nat,
): boolean {
  const userOpt = getUser(userId);
  if ('None' in userOpt) {
    return false;
  }
  const proposalOpt = proposals.get(proposalId);
  if ('None' in proposalOpt) {
    return false;
  }
  const updatedProposal = {
    id: proposalOpt.Some.id,
    title: proposalOpt.Some.title,
    description: proposalOpt.Some.description,
    datePublished: proposalOpt.Some.datePublished,
    votes: proposalOpt.Some.votes + vote,
    status: proposalOpt.Some.status,
    owner: proposalOpt.Some.owner,
    isApproved: proposalOpt.Some.isApproved,
  };
  proposals.insert(proposalId, updatedProposal);
  return true;
}
//approve proposal
