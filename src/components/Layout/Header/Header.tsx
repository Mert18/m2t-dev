import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import ContributionBar from "./ContributionBar/ContributionBar";

const Header = () => {
  const [loading, setLoading] = useState(false);
  const [contributions, setContributions] = useState([]);
  const [weeklyConts, setWeeklyConts] = useState<any>([{}]);
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

  const getWeeklyContributions = (contributions: any) => {
    contributions.map((cont: any) => {
      let sumOfTheWeek = cont.contributionDays.reduce((acc: any, curr: any) => {
        return acc + curr.contributionCount;
      }, 0);
      setWeeklyConts((prev: any) => [
        ...prev,
        { day: cont.firstDay, count: sumOfTheWeek },
      ]);
    });
  };

  useEffect(() => {
    getWeeklyContributions(contributions);
    const max = weeklyConts.reduce(function (prev: any, current: any) {
      return prev.count > current.count ? prev : current;
    });
    setMaxCont(max);
  }, [contributions]);

  return (
    <header>
      <div className="h-[20vh] p-4 flex justify-center">
        <ul className="h-full flex items-end justify-center">
          {weeklyConts.slice(-53).map((week: any, index: any) => (
            <li key={index} className="flex items-end h-full">
              <ContributionBar week={week} maxCont={maxCont} />
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
