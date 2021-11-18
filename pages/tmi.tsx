import Container from "../components/Container";
import NowPlaying from "../components/NowPlaying";
import Tracks from "../components/TopTracks";
import classes from "../styles/tmi.module.css";
import { useState, useEffect } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  Brush,
} from "recharts";

export default function Tmi({ data }) {
  const [hidden, setHidden] = useState(true);
  const LineData = data;

  useEffect(() => {
    setHidden(false);
  }, 2000);

  return (
    <Container
      title="Too Much Information - Mert Uygur"
      description="Too much information about mert uygur. Spotify top songs."
    >
      <div className={classes.tmi}>
        <div className={classes.chart}>
          <div className={classes.chart__title}>Happiness Graph</div>
          <div className={classes.chart__chart}>
            <LineChart width={1100} height={400} data={data}>
              <Line
                type="monotone"
                dataKey="happiness"
                activeDot={{ r: 8 }}
                fill="var(--orange)"
                stroke="var(--orange)"
                strokeWidth={3}
              />
              <Line
                type="monotone"
                dataKey="work"
                activeDot={{ r: 8 }}
                dot={false}
                stroke="#07596D"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="leisure"
                activeDot={{ r: 8 }}
                stroke="#8884d8"
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="game"
                activeDot={{ r: 8 }}
                stroke="#39D310"
                strokeDasharray="3 4 5 2"
                dot={false}
              />
              <Tooltip />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <XAxis
                dataKey="date"
                tickCount={50}
                minTickGap={15}
                hide={hidden}
              />
              <Brush startIndex={50} />
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
  };
};
