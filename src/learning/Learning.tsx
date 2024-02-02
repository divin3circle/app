import React from 'react';
import './Learning.css';
import { learningTeams } from '../data';
import { iconsImgs } from '../assets/images';

function Learning() {
  return (
    <div className="grid-one-item grid-common grid-c2">
      <div className="grid-c-title">
        <h3 className="grid-c-title-text">Your Teams</h3>
        <button className="grid-c-title-icon">
          <img src={iconsImgs.plus} alt="teams" />
        </button>
      </div>
      <div className="grid-content">
        <div className="grid-items">
          {learningTeams.map((learningTeam) => (
            <div className="grid-item" key={learningTeam.id}>
              <div className="grid-item-l">
                <div className="avatar img-fit-cover">
                  <img src={learningTeam.image} />
                </div>
                <p className="text">
                  {learningTeam.name} <span>{learningTeam.date}</span>
                </p>
              </div>
              <div className="grid-item-r">
                <span className="text-gray-400">
                  {learningTeam.members} memebers
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Learning;
