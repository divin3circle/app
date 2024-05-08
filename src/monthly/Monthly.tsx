import { iconsImgs, teamImgs } from '../assets/images';
import { targets } from '../data';
import profile from '../assets/profile.jpg';
import './Monthly.css';
import { backend } from '../declarations/backend';
import { useState } from 'react';
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { GiStrong } from 'react-icons/gi';
import { FaClock } from 'react-icons/fa6';

const Monthly = () => {
  const [stakeData, setStakeData] = useState<{
    stakedToken: BigInt;
    stakedDate: string;
    maturityDate: string;
  }>({
    stakedToken: BigInt(0),
    stakedDate: '',
    maturityDate: '',
  });
  const [days, setDays] = useState<number>(0);
  const [remPercentage, setRemPercentage] = useState<number>(0);
  const userKeyFromStorage = localStorage.getItem('userKey');
  const setData = async () => {
    const userKey = userKeyFromStorage;
    if (userKey === null) return;
    const user = await backend.getUser(userKey);
    if (user.length !== 0) {
      if (
        user[0].stakedAmount !== BigInt(0) &&
        user[0].dateStaked !== '' &&
        user[0].votingPowerMaturityDate !== ''
      ) {
        const staked = new Date(user[0].dateStaked);
        const maturity = new Date(staked.setMonth(staked.getMonth() + 6));
        const diff = getDifferenceInDays(
          new Date().toDateString(),
          maturity.toDateString(),
        );
        // console.log(diff);
        setRemPercentage(calculateDaysPercentage(diff));
        setDays(diff);
      }
      setStakeData({
        stakedToken: user[0].stakedAmount,
        stakedDate: user[0].dateStaked,
        maturityDate: user[0].votingPowerMaturityDate,
      });
    }
  };
  setData();
  const getDifferenceInDays = (date1: string, date2: string) => {
    const now = new Date(date1);
    const then = new Date(date2);
    const diff = then.getTime() - now.getTime();
    return Math.floor(diff / (1000 * 60 * 60 * 24));
  };
  const calculateDaysPercentage = (days: number) => {
    return 100 - (days / 182) * 100;
  };
  return (
    <div className="subgrid-two-item grid-common grid-c6">
      <div className="grid-c-title">
        <h3 className="grid-c-title-text">Voting Power Maturity</h3>
        <button className="grid-c-title-icon">
          <img src={iconsImgs.plus} />
        </button>
      </div>
      <div className="grid-c6-content">
        <div className="grid-items">
          {targets.map((target) => (
            <div className="grid-item" key={target.id}>
              <div className="grid-item-top">
                <div className="grid-item-top-l">
                  <div className="avatar img-fit-cover">
                    <img src={profile} />
                  </div>
                  <p className="text text-silver-v1">Tokens Staked</p>
                </div>
                <div className="grid-item-top-r">
                  <span className="text-silver-v1">
                    {Number(stakeData.stakedToken) > 0
                      ? `${Number(stakeData.stakedToken)} WRB`
                      : 'Not Tokens Staked'}
                  </span>
                </div>
              </div>
              <div className="grid-item-bottom">
                <div className="grid-item-badges">
                  <span className="grid-item-badge">
                    Date staked {stakeData.stakedDate.substring(0, 10)}
                  </span>
                  <span className="grid-item-badge">Remaining {days} days</span>
                </div>
                {/* */}
                <div className="flex items-center justify-center mt-4 ease-in-out duration-500">
                  <div className="w-[200px] h-[200px]">
                    <CircularProgressbarWithChildren
                      value={remPercentage}
                      // text={`${66}%`}
                      styles={buildStyles({
                        textColor: '#fff',
                        pathColor: '#FFA500',
                        trailColor: '#d6d6d6',
                        // strokeLinecap: 'butt',
                        pathTransitionDuration: 4,
                      })}
                    >
                      <div>
                        <strong className="flex items-center justify-center text-2xl text-primary">
                          {Math.floor(remPercentage)}%
                        </strong>
                        <h1 className="text-primary flex justify-center items-center text-xl gap-2 font-bold mt-4">
                          <FaClock /> there
                        </h1>
                      </div>
                    </CircularProgressbarWithChildren>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Monthly;
