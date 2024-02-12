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
export function getUser(id: text): boolean {
  const userOpt = users.get(id);
  if ('None' in userOpt) {
    return false;
  } else {
    return true;
  }
}
