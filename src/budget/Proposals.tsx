import React from 'react';
import './Proposals.css';
import { iconsImgs } from '../assets/images';
import { proposals } from '../data';

function Proposal() {
  return (
    <div>
      <div className="grid-two-item grid-common grid-c4">
        <div className="grid-c-title">
          <h3 className="grid-c-title-text">Proposals</h3>
          <button className="grid-c-title-icon">
            <img src={iconsImgs.plus} />
          </button>
        </div>
        <div className="grid-c-top text-silver-v1">
          <h2 className="text-lg font-bold">Tokens Needed</h2>
          <span className="lg-value">100, 000 WRB</span>
        </div>
        <div className="grid-c4-content bg-jet">
          <div className="grid-items">
            {proposals.map((proposal) => (
              <div className="grid-item" key={proposal.id}>
                <div className="grid-item-l">
                  <div className="icon">
                    <img src={iconsImgs.check} />
                  </div>
                  <p className="text text-silver-v1">
                    {proposal.title}{' '}
                    <span>
                      {proposal.type !== null ? proposal.type : 'Finished'}
                    </span>
                  </p>
                </div>
                <div className="grid-item-r">
                  <span className="text-silver-v1 text-sm">
                    {proposal.votes} votes
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      )
    </div>
  );
}

export default Proposal;
