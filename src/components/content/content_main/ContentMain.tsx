import React from 'react';
import './ContentMain.css';
import Cards from '../../../dashboard_components/cards/Cards';
import Learning from '../../../learning/Learning';
import Report from '../../../reports/Reports';
import Proposal from '../../../budget/Proposals';
import Loans from '../../../loans/Loans';
import Monthly from '../../../monthly/Monthly';
import Tokens from '../../../tokens/Tokens';
import Finance from '../../../finance/Finance';
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
      <div className="content-grid-one md:grid-cols-2">
        <Cards finalData={finalData} />
        <Learning />
        {/* <Tokens /> */}
      </div>
      {/* <div className="max-w-[800px] mx-auto my-0">
       
      </div> */}
      <div className="content-grid-two">
        <div className="grid-two-item">
          <Proposal />
        </div>
        <div className="grid-two-item">
          <div className="subgrid-two">
            <Tokens />

            <Monthly />
          </div>
        </div>
        <div className="grid-two-item">
          <div className="subgrid-two">
            <Loans />
            <Finance />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentMain;
