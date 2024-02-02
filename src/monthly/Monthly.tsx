import { iconsImgs, teamImgs } from '../assets/images';
import { targets } from '../data';
import profile from '../assets/profile.jpg';
import './Monthly.css';

const Monthly = () => {
  return (
    <div className="subgrid-two-item grid-common grid-c6">
      <div className="grid-c-title">
        <h3 className="grid-c-title-text">Savings</h3>
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
                  <p className="text text-silver-v1">{target.title}</p>
                </div>
                <div className="grid-item-top-r">
                  <span className="text-silver-v1">
                    Ksh. {target.saving_amount}
                  </span>
                </div>
              </div>
              <div className="grid-item-bottom">
                <div className="grid-item-badges">
                  <span className="grid-item-badge">
                    Date taken {target.date_taken}
                  </span>
                  <span className="grid-item-badge">
                    Amount left Ksh {target.amount_left}
                  </span>
                </div>
                <div className="grid-item-progress">
                  <div className="grid-item-fill"></div>
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
