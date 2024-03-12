import React from "react";

interface IList {
  points: string[];
}

const List = ({ points }: IList) => {
  return (
    <ul className="w-full my-2">
      {points.map((point, index) => (
        <li className="my-2" key={point}>
          {index + 1}. {point}
        </li>
      ))}
    </ul>
  );
};

export default List;
