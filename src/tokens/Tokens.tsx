import toast from 'react-hot-toast';
import { iconsImgs } from '../assets/images';
import Loading from '../components/ui/Loading';
import { backend } from '../declarations/backend';
import './Tokens.css';
import {
  CircularProgressbarWithChildren,
  CircularProgressbar,
  buildStyles,
} from 'react-circular-progressbar';
import { useState } from 'react';
import TokensModal from './TokensModal';

const Tokens = () => {
  const userKeyFromStorage = localStorage.getItem('userKey');
  const [tokenData, setTokenData] = useState<{
    stakedToken: BigInt;
    totalTokens: BigInt;
    votingPower: BigInt;
    percentage: BigInt;
  }>({
    stakedToken: BigInt(0),
    totalTokens: BigInt(0),
    votingPower: BigInt(0),
    percentage: BigInt(0),
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [toggleModal, setToggleModal] = useState<boolean>(false);
  const fetchFinancials = async () => {
    const userKey = userKeyFromStorage;
    if (userKey === null) return;
    const user = await backend.getUser(userKey);
    const percent = await backend.getPercentageStaked(userKey);
    if (user.length !== 0) {
      setTokenData({
        stakedToken: user[0].stakedAmount,
        totalTokens: user[0].tokenBalance,
        votingPower: user[0].votingPower,
        percentage: percent,
      });
    }
  };
  fetchFinancials();
  const convertToKsh = (value: number) => {
    return Number(value) * 0.01; // 1 ksh = 1000 tokens
  };
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
    console.log(isStaked);
    setLoading(false);
    toast.success(`${5} tokens staked successfully`);
  };

  const handleModal = () => {
    setToggleModal(!toggleModal);
  };

  if (loading) return <Loading />;
  return (
    <div className="subgrid-two-item grid-common grid-c7">
      <div className="grid-c-title">
        <h3 className="grid-c-title-text">Financials</h3>
        <button
          onClick={handleModal}
          className="grid-c-title-icon flex gap-2 items-center bg-primary py-2 px-2 ease-in duration-150 shadow-primary shadow-2xl border-primary hover:scale-95 hover:text-gray-200 font-bold rounded-md"
        >
          <p className="text-gray-200">Stake</p>
        </button>
      </div>
      {/* content */}
      <div className="flex gap-2 justify-between items-center mt-4">
        {/* progressbar */}
        <div className="w-[30%] h-[30%]">
          <CircularProgressbarWithChildren
            value={Number(tokenData.percentage)}
            // text={`${66}%`}
            styles={buildStyles({
              textColor: '#fff',
              pathColor: '#FFA500',
              trailColor: '#d6d6d6',
              // strokeLinecap: 'butt',
              pathTransitionDuration: 3,
            })}
          >
            <div>
              <strong className="flex items-center justify-center text-2xl text-primary">
                {Number(tokenData.percentage)}%
              </strong>
              {/* <h1 className="text-primary flex justify-center items-center text-xl gap-2 font-bold mt-4">
                          {tokenData.percentage.toString()}
                        </h1> */}
            </div>
          </CircularProgressbarWithChildren>
        </div>
        {/* maincontent */}
        <div>
          <ul className="flex flex-col p-4">
            <li className="data-item text-silver-v1 flex flex-col gap-1">
              <span className="data-item-text">Total Account Balance</span>
              <div className="bg-[#212121] rounded-lg px-4 cursor-pointer py-1 font-bold">
                <span className="data-item-value">
                  Ksh.{' '}
                  {convertToKsh(
                    Number(tokenData.totalTokens) +
                      Number(tokenData.stakedToken),
                  )}
                </span>
                {' / '}
                <span className="data-item-value text-sm">
                  {Number(tokenData.totalTokens) +
                    Number(tokenData.stakedToken)}{' '}
                  WRB
                </span>
              </div>
            </li>
            <li className="data-item text-silver-v1 flex flex-col gap-1">
              <span className="data-item-text">Staked Tokens</span>
              <div className="bg-[#212121] rounded-lg px-4 cursor-pointer py-1 w-40 font-bold">
                <span className="data-item-value">
                  Ksh. {convertToKsh(Number(tokenData.stakedToken))}
                </span>
                {' / '}
                <span className="data-item-value text-sm">
                  {Number(tokenData.stakedToken)} WRB
                </span>
              </div>
            </li>
            <li className="data-item text-silver-v1 flex flex-col gap-1">
              <span className="data-item-text">Voting Power</span>
              <div className="bg-[#212121] rounded-lg px-4 cursor-pointer py-1 font-bold w-24">
                <span className="data-item-value text-sm">
                  {Number(tokenData.votingPower)} points{' '}
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="hidden md:flex justify-center mt-8">
        <blockquote className="text-center">
          <p className="text-gray-500">
            "Empowering women financially is not just about money, it's about
            giving them the tools and resources to create a better future for
            themselves and their families."
          </p>
          <footer className="text-gray-700 mt-2">{'>'}- Unknown</footer>
        </blockquote>
      </div>
      {toggleModal && (
        <TokensModal
          tokenBalance={tokenData.totalTokens}
          handleModal={handleModal}
        />
      )}
    </div>
  );
};

export default Tokens;
