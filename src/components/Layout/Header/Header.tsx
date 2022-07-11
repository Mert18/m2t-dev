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
    <header className="grid grid-cols-12 p-4 relative">
      <section className="col-start-4 col-end-10 flex flex-col items-center p-4">
        <div className="flex flex-col justify-center items-center mb-2">
          <p className="">Merd</p>
          <p>
            Software Engineer{" "}
            <a
              href="http://www.robolaunch.io/"
              target="_blank"
              rel="noreferrer"
              className="text-purple-600"
            >
              @Robolaunch
            </a>
          </p>
        </div>
        <a href="" target="_blank" rel="noreferrer">
          <img src="/icons/github.svg" width="32px" />
        </a>
      </section>
      <div className="absolute top-8 right-8">
        <img src="/icons/moon.svg" />
      </div>
    </header>
  );
};

export default Header;
