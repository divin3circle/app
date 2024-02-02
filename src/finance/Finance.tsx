import { iconsImgs } from '../assets/images';
import './Finance.css';

const Finance = () => {
  return (
    <div className="subgrid-two-item grid-common grid-c8">
      <div className="grid-c-title">
        <h3 className="grid-c-title-text">AI Financial Advice</h3>
        <button className="grid-c-title-icon">
          <img src={iconsImgs.plus} />
        </button>
      </div>
      <div className="grid-c8-content">
        <p className="text text-silver-v1">Coming soon....</p>
      </div>
    </div>
  );
};

export default Finance;
