import Container from "../components/Container";
import NowPlaying from "../components/NowPlaying";
import Tracks from "../components/TopTracks";
import classes from "../styles/tmi.module.css";
import { useState, useEffect } from "react";
import { LineChart, Line, Legend, XAxis, CartesianGrid, Brush } from "recharts";
import Image from "next/image";

export default function Tmi({ data }) {
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    setHidden(false);
  }, []);

  return (
    <Container
      title="Too Much Information - Mert Uygur"
      description="Too much information about mert uygur. Spotify top songs."
    >
      <div className={classes.tmi}>
        <div className={classes.chart}>
          <div className={classes.chart__title}>Happiness Graph</div>
          <div className={classes.chart__chart}>
            <LineChart width={1200} height={450} data={data}>
              <Legend verticalAlign="top" height={48} />
              <Line
                type="monotone"
                dataKey="happiness"
                activeDot={{ r: 8 }}
                fill="var(--tertiary)"
                stroke="var(--tertiary)"
                strokeWidth={3}
              />
              <Line
                type="monotone"
                dataKey="work"
                activeDot={{ r: 8 }}
                dot={false}
                stroke="var(--flavor)"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="leisure"
                activeDot={{ r: 8 }}
                stroke="var(--flavor2)"
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="game"
                activeDot={{ r: 8 }}
                stroke="var(--flavor3)"
                dot={false}
                strokeWidth={2}
              />
              <CartesianGrid stroke="var(--tertiary)" strokeDasharray="5 5" />
              <XAxis
                dataKey="date"
                tickCount={50}
                minTickGap={15}
                stroke="var(--tertiary)"
                hide={hidden}
              />
              <Brush startIndex={80} stroke="var(--tertiary)" />
            </LineChart>
          </div>
        </div>
        <div className={classes.spotify}>
          <div className={classes.toptrackstitle}>Top Tracks</div>
          <div className={classes.toptracks}>
            <Tracks />
          </div>
          <div className={classes.nowplaying}>
            <NowPlaying />
          </div>

          <a
            href="https://open.spotify.com/user/vnthw0w8gp2uil1unfvq4nz8n?si=9dfb7ed1658f496a"
            target="_blank"
            rel="noreferrer"
          >
            <div className={classes.spotify__profile}>
              <p>Spotify Profile</p>
            </div>
          </a>
        </div>
      </div>
    </Container>
  );
}

export const getStaticProps = async () => {
  const response = await fetch(`https://merd.dev/api/data`);
  const data = await response.json();

  return {
    props: { data },
    revalidate: 60,
  };
};
