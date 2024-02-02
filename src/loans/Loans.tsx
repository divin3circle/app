import React from 'react';
import './Loans.css';
import { loans } from '../data';
import { iconsImgs } from '../assets/images';

const Loans = () => {
  return (
    <div className="subgrid-two-item grid-common grid-c5">
      <div className="grid-c-title">
        <h3 className="grid-c-title-text">Loans & Grants Available</h3>
        <button className="grid-c-title-icon">
          <img src={iconsImgs.plus} />
        </button>
      </div>
      <div className="grid-c5-content">
        <div className="grid-items">
          {loans.map((loan) => (
            <div className="grid-item" key={loan.id}>
              <div className="grid-item-l">
                <div className="icon">
                  <img src={iconsImgs.alert} />
                </div>
                <p className="text text-silver-v1">
                  {loan.title} <span>{loan.due_date}</span>
                </p>
              </div>
              <div className="grid-item-r">
                <span className="text-silver-v1 text-sm">
                  Ksh.{loan.amount}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loans;
