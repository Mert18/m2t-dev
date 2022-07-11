import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import ContributionDot from "./ContributionDot/ContributionDot";

const Header = () => {
  const [loading, setLoading] = useState(false);
  const [contributions, setContributions] = useState([]);
  const [maxCont, setMaxCont] = useState<any>({});

  useEffect(() => {
    const getContributions = async () => {
      setLoading(true);
      const headers = {
        Authorization: `Bearer ${import.meta.env.VITE_GITHUB_ACCESS_TOKEN}`,
      };
      const body = {
        query: `query {
            viewer { 
              login
              name
              contributionsCollection {
                contributionCalendar {
                  colors
                  totalContributions
                  weeks {
                    contributionDays {
                      color
                      contributionCount
                      date
                      weekday
                    }
                    firstDay
                  }
                }
              }
            }
          }`,
      };
      const response = await fetch("https://api.github.com/graphql", {
        method: "POST",
        body: JSON.stringify(body),
        headers: headers,
      })
        .then((res) => res.json())
        .then((data) => {
          setContributions(
            data.data.viewer.contributionsCollection.contributionCalendar.weeks
          );
        });

      setLoading(false);
    };
    getContributions();
  }, []);

  return (
    <header className="">
      <div className="h-[20vh] p-4 flex justify-center">
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
      </div>
    </header>
  );
};

export default Header;
