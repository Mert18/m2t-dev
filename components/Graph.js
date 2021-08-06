import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import axios from "axios";

const Graph = () => {
  const [data, setData] = useState([]);
  const getAllData = async () => {
    await axios
      .get(`/api/about`)
      .then((response) => {
        const allData = response.data;
        setData(allData);
      })
      .catch((error) => console.error("can not fetch items."));
  };
  useEffect(() => {
    getAllData();
  }, []);

  return (
    <>
      <LineChart width={1000} height={400} data={data}>
        <Line type="monotone" dataKey="game" stroke="blue" dot={false} />
        <Line type="monotone" dataKey="work" stroke="yellow" dot={false} />
        <Line type="monotone" dataKey="leisure" stroke="#A6808C" dot={false} />
        <Line
          type="monotone"
          dataKey="happiness"
          stroke="#EF5B5B"
          strokeWidth={3}
          dot={false}
        />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="date" stroke="white" hide={true} />
        <YAxis />
        <Legend />
        <Tooltip wrapperStyle={{ backgroundColor: "#ccc", color: "black" }} />
      </LineChart>
    </>
  );
};

export default Graph;
