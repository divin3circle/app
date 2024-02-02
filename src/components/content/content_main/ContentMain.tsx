import React from 'react';
import './ContentMain.css';
import Cards from '../../../dashboard_components/cards/Cards';
import Learning from '../../../learning/Learning';
import Report from '../../../reports/Reports';
import Proposal from '../../../budget/Proposals';
type TFinalDataProps = {
  finalData: {
    username: string;
    type: string;
    interest: string;
  };
};
function ContentMain({ finalData }: TFinalDataProps) {
  return (
    <div className="main-content-holder">
      <div className="content-grid-one">
        <Cards finalData={finalData} />
        <Learning />
        <Report />
      </div>
      <div className="content-grid-two">
        <Proposal />
      </div>
      <div className="grid-two-item">
        <div className="subgrid-two"></div>
      </div>
      <div className="grid-two-item">
        <div className="subgrid-two"></div>
      </div>
    </div>
  );
}

export default ContentMain;
