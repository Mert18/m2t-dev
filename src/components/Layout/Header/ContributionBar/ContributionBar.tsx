import React, { useState } from "react";

interface IContributionBar {
  week: any;
  maxCont: any;
}

const ContributionBar = ({ week, maxCont }: IContributionBar) => {
  const [infoPanelVisible, setInfoPanelVisible] = useState(false);
  return (
    <div
      className="mr-2 w-4 rounded bg-red-400 relative"
      style={{ height: `${(week.count * 100) / maxCont.count}%` }}
      onMouseEnter={() => setInfoPanelVisible(true)}
      onMouseLeave={() => setInfoPanelVisible(false)}
    >
      {infoPanelVisible && (
        <div className="absolute top-full left-full w-max h-max bg-white">
          <p>{week.day}</p>
          <p>{week.count}</p>
        </div>
      )}
    </div>
  );
};

export default ContributionBar;
