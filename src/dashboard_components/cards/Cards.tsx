import React, { useContext } from 'react';
import './Cards.css';
import { iconsImgs } from '../../assets/images';
import { DataContext } from '../../context/DataContext';
import { backend } from '../../declarations/backend';
type TFinalDataProps = {
  finalData: {
    username: string;
    type: string;
    interest: string;
  };
};
function Cards({ finalData }: TFinalDataProps) {
  const { userData } = useContext(DataContext);
  const [tokens, setTokens] = React.useState(-1);
  const [date, setDate] = React.useState('NaN');
  const [role, setRole] = React.useState('NaN');

  const getUserInfo = async () => {
    const userKeyFromStorage = localStorage.getItem('userKey');
    const userKey = userData.id;
    if (userKeyFromStorage !== null) {
      const currentUser = await backend.getUser(userKeyFromStorage);
      if (currentUser.length !== 0) {
        // console.log(currentUser[0].tokenBalance);
        setTokens(Number(currentUser[0].tokenBalance));
        setDate(currentUser[0].membershipDate.substring(0, 10));
        setRole(currentUser[0].role);
      }
    }
  };
  getUserInfo();

  return (
    <div className="grid-one-item grid-common grid-c1">
      <div className="grid-c-title">
        <h3 className="grid-c-title-text">Membership Card</h3>
        <button className="grid-c-title-icon flex gap-2 items-center bg-primary py-2 px-2 ease-in duration-150 shadow-primary shadow-2xl border-primary hover:scale-95 hover:text-gray-200 font-bold rounded-md">
          <p className="text-gray-200">Connect wallet</p>
        </button>
      </div>
      <div className="grid-c1-content">
        <p>Warembo Token Balance</p>
        <div className="lg-value">{tokens} WRB TOKENS</div>
        <div className="flex items-center gap-2">
          <span className="text-xl">Role: {role} </span>
          <span className="text-xl">
            {finalData.interest !== undefined ? finalData.interest : '....'}
          </span>
        </div>
        <div className="card-logo-wrapper">
          <div>
            <p className="text text-silver-v1 expiry-date">Member Since</p>
            <p className="text text-sm text-white">{date}</p>
          </div>
          <div className="card=logo">
            <div className="logo-shape1"></div>
            <div className="logo-shape2"></div>
          </div>
        </div>
        <div className="mt-4">
          <p className="p-4 font-semibold ">
            "We need women at all levels, including the top, to change the
            dynamic, to change the conversation, to change the power."
          </p>
          <p className="text-gray-500 p-2 font-semibold">- Sheryl Sandberg</p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
