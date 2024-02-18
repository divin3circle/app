import { Actor, HttpAgent } from '@dfinity/agent';
import {
  idlFactory as tokenIdlFactory,
  canisterId as tokenCanisterId,
} from 'dfx-generated/token';

async function getBalance(accountId: string): Promise<number> {
  const agent = new HttpAgent({ host: 'https://ic0.app' });
  const tokenActor = Actor.createActor(tokenIdlFactory, {
    agent,
    canisterId: tokenCanisterId,
  });

  return tokenActor.getBalance(accountId);
}

async function transfer(
  fromAccountId: string,
  toAccountId: string,
  amount: number,
): Promise<void> {
  const agent = new HttpAgent({ host: 'https://ic0.app' });
  const tokenActor = Actor.createActor(tokenIdlFactory, {
    agent,
    canisterId: tokenCanisterId,
  });

  await tokenActor.transfer(fromAccountId, toAccountId, amount);
}
