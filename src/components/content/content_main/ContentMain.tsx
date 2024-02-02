import React from 'react';
import './ContentMain.css';
import Cards from '../../../dashboard_components/cards/Cards';
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
      </div>
    </div>
  );
}

export default ContentMain;
