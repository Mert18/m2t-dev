import React from "react";
import ContributionDot from "../ContributionDot/ContributionDot";

interface IGithub {
  contributions: any;
}

const Github = ({ contributions }: IGithub) => {
  return (
    <div className="flex flex-col items-start ">
      <p className="uppercase font-bold text-sm text-blue-200">
        Github contributions
      </p>
      <ul className="h-full flex items-start justify-center p-4 bg-white-200">
        {contributions.map((cont: any) => (
          <li
            key={cont.firstDay}
            className="flex flex-col items-center justify-center"
          >
            <ul>
              {cont.contributionDays.map((day: any) => (
                <li key={day.date}>
                  <ContributionDot
                    count={day.contributionCount}
                    color={day.color}
                    date={day.date}
                  />
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Github;
