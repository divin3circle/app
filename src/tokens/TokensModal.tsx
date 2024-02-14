import React, { useState } from 'react';
import { backend } from '../declarations/backend';
import toast from 'react-hot-toast';
import Loading from '../components/ui/Loading';

type TokensModalProps = {
  tokenBalance: BigInt;
  handleModal: () => void;
};

function TokensModal({ tokenBalance, handleModal }: TokensModalProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const [userAmount, setUserAmount] = useState<number>(0);
  const userKeyFromStorage = localStorage.getItem('userKey');
  const stakeTokens = async (amount: number) => {
    setLoading(true);
    const userKey = userKeyFromStorage;
    if (userKey === null) return;
    const now = new Date();
    const nowString = new Date().toISOString();
    const sixMonthsLater = new Date(now.setMonth(now.getMonth() + 6));
    const isStaked = await backend.stakeTokens(
      userKey,
      BigInt(amount),
      nowString,
      sixMonthsLater.toISOString(),
    );
    // console.log(isStaked);
    setLoading(false);
    if (isStaked) {
      toast.success(`${amount} tokens staked successfully`);
    } else {
      toast.error(
        `Failed to stake ${amount} tokens. Check your balance and try again`,
      );
    }
  };
  const handleStake = (a: number) => {
    if (a > 0) {
      if (a > Number(tokenBalance)) {
        toast.error('Insufficient balance');
        handleModal();
        return;
      }
      stakeTokens(a);
      //   handleModal();
    }
  };
  if (loading) return <Loading />;
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40"
      style={{ backdropFilter: 'blur(5px)' }}
    >
      <div className="bg-white p-4 rounded-md shadow-xl">
        <h1 className="text-xl font-bold text-center text-primary">
          Stake Warembo Tokens
        </h1>
        <label
          htmlFor="token"
          className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
        >
          <input
            type="number"
            id="token"
            placeholder="Enter amount of tokens to stake"
            className="peer text-black h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
            value={userAmount}
            onChange={(e) => setUserAmount(Number(e.target.value))}
          />

          <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
            Enter amount of tokens to stake
          </span>
        </label>
        <p className="text-gray-500 text-sm text-center mt-4">
          Balance: {tokenBalance.toString()} WRB Tokens
        </p>
        <div className="flex items-center mt-10 justify-between gap-2">
          <button
            className="bg-black shadow-md rounded-lg hover:bg-transparent hover:text-black border-2 border-black text-white py-2 px-8 ease-in duration-150"
            onClick={() => handleStake(userAmount)}
          >
            stake
          </button>
          <button
            className="bg-red-500 shadow-md rounded-lg hover:bg-red-500/80 text-white py-2 px-8 ease-in duration-150"
            onClick={handleModal}
          >
            close
          </button>
        </div>
      </div>
    </div>
  );
}

export default TokensModal;
