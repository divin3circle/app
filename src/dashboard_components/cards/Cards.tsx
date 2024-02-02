import React from 'react';
import './Cards.css';
import { iconsImgs } from '../../assets/images';
type TFinalDataProps = {
  finalData: {
    username: string;
    type: string;
    interest: string;
  };
};
function Cards({ finalData }: TFinalDataProps) {
  return (
    <div className="grid-one-item grid-common grid-c1">
      <div className="grid-c-title">
        <h3 className="grid-c-title-text">Membership Card</h3>
        <button className="grid-c-title-icon">
          <img src={iconsImgs.plus} alt="plus" />
        </button>
      </div>
      <div className="grid-c1-content">
        <p>Warembo Token Balance</p>
        <div className="lg-value">10, 000, 000 WRB</div>
        <div className="flex items-center gap-2">
          <span className="text-xl">Role: </span>
          <span className="text-xl">
            {finalData.interest !== undefined ? finalData.interest : '....'}
          </span>
        </div>
        <div className="card-logo-wrapper">
          <div>
            <p className="text text-silver-v1 expiry-date">Member Since</p>
            <p className="text text-sm text-white">02/23</p>
          </div>
          <div className="card=logo">
            <div className="logo-shape1"></div>
            <div className="logo-shape2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
