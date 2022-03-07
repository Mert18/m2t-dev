import {
  LineChart,
  Line,
  Legend,
  XAxis,
  CartesianGrid,
  Brush,
  ResponsiveContainer,
} from "recharts";
import { useState, useEffect } from "react";
import styled from "styled-components";
import SectionHeader from "../SectionHeader";

const ChartWrapper = styled.div`
  grid-area: chart;
  background: var(--primary);
  padding: 1rem;
  overflow: auto;
`

const Chart = ({ data }) => {
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    setHidden(false);
  }, []);

  return (
    <ChartWrapper>
      <SectionHeader title="Happiness Graph" />
      <ResponsiveContainer width={1850} height={500}>
        <LineChart data={data}>
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
            stroke="var(--work)"
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
      </ResponsiveContainer>
    </ChartWrapper>
  );
};

export default Chart;
