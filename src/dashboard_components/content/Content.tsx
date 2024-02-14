import React from 'react';
import './Content.css';
import ContentTop from '../../components/content/content_top/ContentTop';
import ContentMain from '../../components/content/content_main/ContentMain';
type TFinalDataProps = {
  finalData: {
    username: string;
    type: string;
    interest: string;
  };
};
function Content({ finalData }: TFinalDataProps) {
  return (
    <div className="main-content">
      <ContentTop />
      <ContentMain finalData={finalData} />
    </div>
  );
}

export default Content;
